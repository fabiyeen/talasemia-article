"use client";

import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc, setDoc, increment } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Eye } from "lucide-react";

export default function ViewCounter() {
  const [views, setViews] = useState<number | null>(null);

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
            } catch (error: any) {
              // If document doesn't exist, create it
              if (error.code === "not-found") {
                await setDoc(docRef, { views: 1 });
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
        } catch (error) {
          console.error("Error updating views:", error);
        }
      };

      // Only attempt to update if Firebase env vars are configured
      if (process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID) {
        updateViews();
      }
    }
  }, []);

  if (views === null) {
    // Render placeholder while fetching
    return (
      <div className="flex items-center justify-center space-x-2 text-[var(--foreground)] mt-12 opacity-0">
        <Eye className="w-5 h-5" />
        <span>Total Views: ...</span>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center space-x-2 text-[var(--foreground)] mt-12 opacity-80 font-bold tracking-wide">
      <Eye className="w-5 h-5" />
      <span>Total Views: {views}</span>
    </div>
  );
}
