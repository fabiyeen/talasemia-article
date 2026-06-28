"use client";

import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc, setDoc, increment } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Eye } from "lucide-react";

export default function ViewCounter() {
  const [views, setViews] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Mitigate double-counting during strict mode/dev reloads for the same session
    if (typeof window !== "undefined") {
      const hasCounted = sessionStorage.getItem("page_viewed");
      
      const updateViews = async () => {
        try {
          const docRef = doc(db, "analytics", "page_views");
          
          if (!hasCounted) {
            // First time this session, increment and mark session
            try {
              await updateDoc(docRef, { views: increment(1) });
            } catch (err: any) {
              // If document doesn't exist, create it
              if (err.code === "not-found") {
                await setDoc(docRef, { views: 1 });
              } else {
                throw err;
              }
            }
            sessionStorage.setItem("page_viewed", "true");
          }

          // Fetch the current view count to display
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setViews(docSnap.data().views);
          } else {
            setViews(1);
          }
        } catch (err: any) {
          console.error("Error updating views:", err);
          setError("Failed to load");
        }
      };

      // Only attempt to update if Firebase env vars are configured
      if (process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID) {
        updateViews();
      } else {
        setError("Setup required");
      }
    }
  }, []);

  if (error) {
    return (
      <div className="flex items-center justify-center space-x-2 text-[var(--background)] mt-12 opacity-80 font-medium">
        <Eye className="w-5 h-5" />
        <span>Views: {error}</span>
      </div>
    );
  }

  if (views === null) {
    // Render visible fallback while fetching
    return (
      <div className="flex items-center justify-center space-x-2 text-[var(--background)] mt-12 opacity-80 font-medium">
        <Eye className="w-5 h-5 animate-pulse" />
        <span>Reads: Loading...</span>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center space-x-2 text-[var(--background)] mt-12 opacity-90 font-bold tracking-wide">
      <Eye className="w-5 h-5" />
      <span>Total Reads: {views}</span>
    </div>
  );
}
