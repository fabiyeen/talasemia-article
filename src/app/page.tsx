import FadeIn from "@/components/FadeIn";
import ImageCarousel from "@/components/ImageCarousel";
import Image from "next/image";
import ViewCounter from "@/components/ViewCounter";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  const carouselImages = [
    { src: "/images/1.jpg", alt: "Potret 1" },
    { src: "/images/2.jpg", alt: "Potret 2" },
    { src: "/images/3.jpg", alt: "Potret 3" },
    { src: "/images/4.jpg", alt: "Potret 4" },
    { src: "/images/5.jpeg", alt: "Potret 5" },
    { src: "/images/6.jpg", alt: "Potret 6" },
    { src: "/images/7.jpg", alt: "Potret 7" },
    { src: "/images/8.jpg", alt: "Potret 8" },
    { src: "/images/9.jpeg", alt: "Potret 9" },
    { src: "/images/10.jpg", alt: "Potret 10" },
    { src: "/images/11.jpg", alt: "Potret 11" }
  ];

  return (
    <main className="min-h-screen py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto overflow-hidden">
      
      {/* HEADER */}
      <FadeIn className="text-center mb-16 md:mb-24">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight uppercase">
          Bersahabat dengan Talasemia
        </h1>
        <hr className="border-[var(--foreground)] border-t-2 w-32 mx-auto mb-6 opacity-60" />
        <p className="italic text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed max-w-3xl mx-auto">
          Sebuah sisi pertarungan medis, psikologis, dan sosial pengidap talasemia mayor.
        </p>
        <hr className="border-[var(--foreground)] border-t-2 w-32 mx-auto mt-6 opacity-60" />
      </FadeIn>

      {/* INTRO TEXT */}
      <FadeIn className="mb-16 md:mb-24 text-lg md:text-xl leading-relaxed space-y-6">
        <p>
          Belum lama ini, Indonesia dikabarkan krisis BBM. Pernahkah timbul kekhawatiran jika BBM habis sepenuhnya? Seluruh transportasi berbahan bakar minyak tak lagi berfungsi. Mati total. Bagaimana jika tubuh manusia diibaratkan seperti mesin? Layaknya kendaraan yang perlu isi ulang BBM setiap minggu, manusia perlu diisi bahan bakarnya sendiri berupa darah.
        </p>
        <p>
          <strong>Talasemia mayor.</strong> Itulah kondisi kelainan darah yang mengharuskan manusia melakukan "isi ulang darah" atau transfusi darah secara berkala seumur hidupnya. Ini adalah sebuah kisah nyata bagi kurang lebih 150.000 orang di seluruh Indonesia.
        </p>
      </FadeIn>

      {/* VIDEO EMBED */}
      <FadeIn className="mb-16 md:mb-24">
        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl bg-black/10">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0"
            title="Video Interaktif Talasemia"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </FadeIn>

      {/* SECTION 1 */}
      <section className="mb-16 md:mb-24">
        <FadeIn>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 uppercase tracking-wide">
            KISAH RANI: MANIFESTASI DISIPLIN PEJUANG TALASEMIA
          </h2>
        </FadeIn>
        
        <div className="space-y-6 text-lg md:text-xl leading-relaxed text-justify">
          <FadeIn>
            <p>
              Siang itu, di ruang talasemia RSCM Kiara, Rani terlihat tergesa-gesa menggeledah tas jinjing besarnya. Di dalamnya, ada belasan makan siang pesanan teman-temannya, pasien talasemia mayor yang tengah menjalankan transfusi darah di ruangan itu. Proses transfusi darah memakan waktu 6-8 jam untuk 2 kantong darah yang masuk ke tubuh mereka setiap sesinya. Rani paham sulitnya mencari makan dengan infus yang menancap di tangan seharian. Oleh karena itu, hampir setiap minggunya, Rani membuka Pre-Order makanan dari wirausahanya yang sudah dimulai sejak 2021. Di sisi lain, karena Rani juga merupakan pasien talasemia mayor yang setiap 6 minggu sekali melakukan transfusi darah di tempat itu.
            </p>
          </FadeIn>

          <FadeIn className="my-12">
            <div className="relative w-full h-[50vh] md:h-[70vh] rounded-xl overflow-hidden bg-black/10">
              <Image 
                src="/images/rani-transfusi.png" 
                alt="Rani saat memberikan pesanan makanan ke teman sesama pasien thalasemia mayor"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm md:text-base text-center mt-4 opacity-75 max-w-2xl mx-auto">
              Rani saat memberikan pesanan makanan ke teman sesama pasien thalasemia mayor yang sedang menjalankan transfusi darah.
            </p>
          </FadeIn>

          <FadeIn>
            <p>
              Kehidupan Rani berubah pada 2007, kala la masih duduk di bangku kelas 6 SD. Selama berminggu-minggu Rani mulai mengalami gejala lemas, mudah pusing, demam berkepanjangan hingga tubuh yang menguning. Pagi itu, dengan keluhan yang sama, Rani tidak bisa bangun. la dilarikan ke rumah sakit. Kadar hemoglobin (Hb) Rani hanya 4 g/dL, jauh dari angka normal anak perempuan seusianya. Rani segera dipindahkan ke ruang isolasi, segera melakukan transfusi darah. Rani didiagnosa Talasemia Beta HbE. Sebuah cabang dari talasemia mayor, kelainan genetik yang membuat sel darah rapuh dan mudah pecah. Kondisi ini mengharuskan Rani bergantung pada transfusi darah seumur hidupnya.
            </p>
          </FadeIn>

          <FadeIn>
            <p>
              Semenjak itu, seluruh peraturan hidup Rani berubah. Orang tua Rani menerapkan proteksi yang luar biasa ketat. Untuk menjaga sel darah merah yang rapuh, pasien talasemia mayor tidak disarankan melakukan aktivitas fisik yang berat dan dapat membuat tubuh cepat lelah. Oleh sebab itu, Rani dilarang mengikuti kegiatan fisik, termasuk pelajaran olahraga hingga pramuka. Seluruh aktivitas di luar sekolah dihentikan. Segera pulang setelah sekolah selesai dengan antar jemput yang berjalan hingga Rani kuliah. Di samping itu, kertas catatan berisi daftar makan tinggi zat besi yang tidak boleh Rani konsumsi ditempel di meja makan. Kontrol makanan dilakukan untuk mencegah penumpukan zat besi dari banyaknya volume darah yang masuk. Rani jarang memiliki teman sepanjang masa remajanya. Teman-teman sekelas melihatnya sebagai sosok yang tidak bisa diajak bekerja sama. Rani tahu bahwa satu-satunya hal untuk membuktikan dirinya dibutuhkan di sekolah hanya ambisi belajar dan kepintaran akademisnya. Sejak itu, Rani yang paham dunianya menyusut, hanya berfokus pada edukasinya.
            </p>
          </FadeIn>

          <FadeIn className="my-12 flex flex-col sm:flex-row gap-6">
            <div className="flex-1">
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-black/10">
                <Image 
                  src="/images/rani-sd.jpg" 
                  alt="Rani (depan kiri) pada salah satu acara sekolahnya sebelum terdiagnosa talasemia."
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm md:text-base text-center mt-4 opacity-75">
                Rani (depan kiri) pada salah satu acara sekolahnya sebelum terdiagnosa talasemia.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <p>
              Tantangan talasemia tidak berhenti pada pergaulan sosial Rani. Transfusi darah rutin yang la lakukan menghadapkan Rani pada penumpukan zat besi yang berpengaruh buruk pada organ tubuhnya. Oleh karena itu, semua pasien talasemia mayor diwajibkan mengonsumsi obat kelasi besi setiap hari seumur hidupnya, tanpa putus. Rani sudah menjalankan rutinitas itu hingga saat ini.
            </p>
          </FadeIn>

          <FadeIn className="my-12">
            <div className="relative w-full rounded-xl overflow-hidden bg-black/10">
              <Image 
                src="/images/obat-kelasi.jpeg" 
                alt="Obat kelasi besi dan vitamin Rani."
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
              />
            </div>
            <p className="text-sm md:text-base text-center mt-4 opacity-75">
              Obat kelasi besi dan vitamin Rani.
            </p>
          </FadeIn>

          <FadeIn>
            <p className="text-xl md:text-2xl italic font-medium my-10 pl-6 border-l-4 border-[var(--foreground)]">
              "Bayangkan orang sehat kalau sakit, minum obat sampai sakitnya sembuh saja pun kadang bolong, lupa, atau bosan. Bagaimana mereka yang harus minum obat non-stop seumur hidupnya?", ucap Prof. Lia, salah satu pakar utama talasemia di Indonesia.
            </p>
          </FadeIn>

          <FadeIn>
            <p>
              Bahkan dengan konsistensi, tubuh Rani tidak selalu berkompromi. Pada tahun 2020, limpanya membengkak hingga stadium 5 akibat penumpukan zat besi yang membentuk batu empedu. Batu empedu ini menimbulkan rasa sakit luar biasa. Dengan ukuran limpa yang abnormal, Rani meminta tindakan operasi pengangkatan limpa (splenektomi). Rani menghabiskan tujuh hari persiapan operasi di ruang rawat inap sendiri. Tak ada satu pun pembesuk. Momen ini menjadi titik terendah Rani dalam perjalanan pengobatannya. Sebuah medan tempur pikiran yang mempertanyakan tubuhnya yang selalu gagal meski sudah dijaga mati-matian.
            </p>
          </FadeIn>

          <FadeIn className="my-12">
            <div className="relative w-full rounded-xl overflow-hidden bg-black/10">
              <Image 
                src="/images/limpa-bengkak.jpg" 
                alt="Ukuran limpa stadium 5 (17cm) Rani saat diangkat."
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
              />
            </div>
            <p className="text-sm md:text-base text-center mt-4 opacity-75">
              Ukuran limpa stadium 5 (17cm) Rani saat diangkat.
            </p>
          </FadeIn>

          <FadeIn>
            <p>
              Kala masa pemulihannya berjalan pasca-splenektomi, keluarga dan teman-teman rumah sakit Rani menjenguknya, menghibur dan memberi semangat. Teman-teman rumah sakit Rani adalah sesama pasien talasemia mayor. Mereka kenal dekat sejak Rani menjadi bagian dari komunitas Thalassemia Movement (TM) sejak 2017. Saat itu, untuk pertama kalinya, Rani memiliki teman yang memahami sepenuhnya sakit dan perjuangan yang sebelumnya la lalui sendiri. Bersama komunitasnya, Rani berhasil mendobrak batasan fisiknya. la sering pergi bergaul, menghadiri acara TM, hingga pertama kalinya dalam 19 tahun melakukan olahraga trekking hingga yoga, kegiatan yang dilarang sepanjang masa kecilnya.
            </p>
          </FadeIn>

          <FadeIn className="my-12">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black/10">
              <Image 
                src="/images/rani-jenguk.jpg" 
                alt="Rani dengan teman-teman pasien talasemia yang sedang menjenguk Rani pasca-splenektomi."
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm md:text-base text-center mt-4 opacity-75">
              Rani dengan teman-teman pasien talasemia yang sedang menjenguk Rani pasca-splenektomi.
            </p>
          </FadeIn>

          <FadeIn>
            <p>
              Kini, rumah sakit bagai rumah kedua Rani. Di sini, perkembangan sosialnya hidup. Kepribadiannya bertumbuh. Ada kebiasaan kecil Rani dan teman-teman rumah sakitnya yang cukup menghangatkan hati saya. Kebiasaan dan kehangatan yang tidak umum dijumpai di kalangan orang sehat. <strong>Satu buka obat, semua buka obat.</strong> Aksi nyata kecil yang menjaga semangat dan kesehatan satu sama lain.
            </p>
          </FadeIn>

          <FadeIn className="my-12">
            <div className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-xl overflow-hidden bg-black/10">
              <Image 
                src="/images/rani-collage.png" 
                alt="Potret Rani di rumah sakit bersama teman-teman seperjuangan talasemia mayor."
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm md:text-base text-center mt-4 opacity-75">
              Potret Rani di rumah sakit bersama teman-teman seperjuangan talasemia mayor.
            </p>
          </FadeIn>

          <FadeIn>
            <p>
              Talasemia telah merenggut masa remaja dan banyak kesempatan hidup Rani. Adapun, penerimaan Rani membuktikan bahwa talasemia tidak bisa merenggut ambisi, semangat, disiplin, dan masa depannya. Di ruang transfusi yang terkesan dingin, justru kehangatan persaudaraan yang mereka ciptakan menjadi semangat untuk terus bertahan hidup.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="mb-16 md:mb-24">
        <FadeIn>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 uppercase tracking-wide">
            KISAH ANDREW: TALASEMIA DAN SEGUDANG MIMPI YANG DIPERJUANGKAN
          </h2>
        </FadeIn>

        <div className="space-y-6 text-lg md:text-xl leading-relaxed text-justify">
          <FadeIn>
            <div className="clearfix">
              Tahun 2009, Andrew kecil terbaring di salah satu bilik ruang IGD di Jakarta Barat. Di usia yang baru 2 tahun, tubuh kecilnya harus menerima tusukan jarum suntik. Tiga hari kemudian, Andrew akan pulang dengan dua kantong darah yang mengisi tubuhnya dan diagnosa talasemia beta mayor. Kini, 17 
              <div className="float-left w-[45%] md:w-[35%] lg:w-[30%] mr-6 mb-4 mt-3 relative aspect-[3/4] rounded-xl overflow-hidden bg-black/10">
                <Image 
                  src="/images/andrew-kecil-rs.png" 
                  alt="Andrew kecil di rumah sakit."
                  fill
                  className="object-cover"
                />
              </div>
              {" "}tahun kemudian, ia mengulang rutinitas yang sama. Transfusi darah setiap 3-5 minggu sekali.
            </div>
          </FadeIn>

          <FadeIn>
            <p>
              Namun demikian, penanganan talasemia Andrew selama 5 tahun pertamanya dengan talasemia kurang maksimal. Rumah sakit pertamanya belum mempunyai pakar atau standar operasional khusus untuk kondisi talasemia. Penanganan yang kurang maksimal itu membuat transfusi darah Andrew baru dilakukan ketika Hb sudah menurun ke angka 5-7 g/dL. Dengan sel darah merah yang rapuh, organ sudah bekerja lebih keras untuk memompa darah, meski tidak sempurna. Kadar Hb yang terus-menerus rendah akan semakin membuat tubuh kesulitan untuk memompa darah ke seluruh organ sehingga beresiko pada ketahanan organ. Perawatan yang tidak optimal itu juga mengakibatkan hambatan dalam pertumbuhan Andrew.
            </p>
          </FadeIn>

          <FadeIn className="my-12">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black/10">
              <Image 
                src="/images/andrew-sekolah.jpeg" 
                alt="Potret masa kecil Andrew di sekolah bersama teman-temannya."
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm md:text-base text-center mt-4 opacity-75">
              Potret masa kecil Andrew di sekolah bersama teman-temannya.
            </p>
          </FadeIn>

          <FadeIn>
            <p>
              Saat berusia 7 tahun, Andrew dan orang tua mencari pakar yang dapat lebih memahami dan memadai kebutuhan pengobatan medis Andrew. Momen itu mempertemukan keluarga Andrew dengan Prof. Lia, seorang pakar talasemia yang tegas dan disiplin. Andrew berada di bawah pengawasan Prof. Lia selama 11 tahun ke depan, menjadikannya pasien reguler Prof. Lia yang datang setiap bulan. Prof. Lia tidak hanya memberikan perawatan yang tepat, namun juga membentuk mentalitas Andrew untuk lebih disiplin dan peduli pada tubuh sendiri, memperhatikan aspek obat-obatan yang tak boleh lupa dikonsumsi hingga mempertahankan Hb agar tidak menyentuh di bawah 9 g/dL. Selama waktu yang cukup lama, rutinitas rumah sakit Andrew tidak menjadi tantangan utama, melainkan stigma sosial.
            </p>
          </FadeIn>

          <FadeIn>
            <p>
              Sekolah bisa menjadi medan perang mental dan sosial bagi pengidap talasemia mayor. Seperti Rani, Andrew mendapatkan hak istimewa semasa sekolah. Pertama, izin menggunakan lift sekolah ketika siswa lain hanya boleh naik ke kelas masing-masing dengan tangga. Kedua, absen dari pelajaran olahraga. Namun, izin yang berniat melindunginya justru menjadi bumerang. Hak istimewa itu memunculkan desas-desus iri teman-temannya. Sedikit demi sedikit, Andrew mulai merasa terasingkan.
            </p>
          </FadeIn>

          <FadeIn>
            <p>
              Lebih jauh, rasa percaya diri Andrew sebagai pria perlahan remuk. Standar seorang laki-laki seringkali diukur dari ketahanan fisik, salah satunya dari olahraga, sebuah hal yang justru harus dihindari Andrew. Akibatnya, Andrew merasa tidak pernah dipandang sebagai laki-laki. Tumbuh tanpa memiliki kelompok teman laki-laki semasa sekolahnya.
            </p>
          </FadeIn>

          <FadeIn>
            <p>
              Namun, ketika satu pintu tertutup, la mencoba membuka pintu lain. Jalur pada dunia seni dan hiburan. Kini, sebagai mahasiswa film, lebih dari sebelumnya, Andrew meluapkan segala imajinasi dan energinya untuk membuat karya-karya yang bermakna. Berkarya menjadi pelampiasan terbaik untuk kembali membentuk citra diri Andrew yang selalu dipertanyakan sebelumnya.
            </p>
          </FadeIn>

          <FadeIn className="my-12">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black/10">
              <Image 
                src="/images/andrew-shooting.png" 
                alt="Potret Andrew saat shooting film pendek dengan teman-teman kampus."
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm md:text-base text-center mt-4 opacity-75">
              Potret Andrew saat shooting film pendek dengan teman-teman kampus.
            </p>
          </FadeIn>

          <FadeIn>
            <p>
              Semakin menguatkan kepercayaan dirinya, Andrew sempat dikirim menjadi perwakilan menghadiri Thalassaemia International Federation (TIF) Conference 2023 di Malaysia, konferensi tahunan talasemia berskala internasional. Untuk pertama kalinya, Andrew dipertemukan dan berkaca pada sesama pasien dari Indonesia dan berbagai negara lain. Momen ini menyadarkan bahwa la tidak pernah berbeda sendiri. Semenjak kesempatan itu pula, Andrew juga dipertemukan dengan teman dekat sesama pasien talasemia mayor, Bimbim. Andrew masih berada pada usia yang dipenuhi kejenuhan mengonsumsi obat atau pada sistem rumah sakit yang belum sempurna dan seringkali memunculkan demotivasi untuk berobat, terutama karena Andrew sudah menjalankan prosedur berobatnya sendiri. Meski keduanya tidak berobat di rumah sakit yanng sama, Bimbim menjadi sosok yang setia mendengarkan segala keluhan Andrew sembari sesekali mengingatkan untuk selalu jangan lengah dalam menjalankan pengobatannya, sebuah bentuk kehangatan antar pasien talasemia mayor untuk saling menjaga.
            </p>
          </FadeIn>

          <FadeIn className="my-12">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-black/10">
              <Image 
                src="/images/andew-bimbim.png" 
                alt="Potret Andrew dengan Bimbim, salah satu teman seperjuangan talasemia yang paling akrab dengan Andrew."
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm md:text-base text-center mt-4 opacity-75">
              Potret Andrew dengan Bimbim, salah satu teman seperjuangan talasemia yang paling akrab dengan Andrew.
            </p>
          </FadeIn>

          <FadeIn>
            <p>
              Andrew menemukan jiwa dan kebahagiaan utamanya pada seni, serta relasi antar pejuang talasemia sebagai pendukungnya di dunia medisnya. Melalui itu, Andrew menemukan semangatnya, membuktikan bahwa kondisi kronisnya, sekalipun seumur hidup, tidak akan membatasi mimpi dan tekadnya untuk terus berkarya dan berdampak.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="mb-16 md:mb-24">
        <FadeIn>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 uppercase tracking-wide">
            TALASEMIA SECARA MEDIS & BEBAN JANGKA PANJANGNYA
          </h2>
        </FadeIn>

        <div className="space-y-6 text-lg md:text-xl leading-relaxed text-justify">
          <FadeIn>
            <p>
              Mencari tahu lebih mengenai talasemia secara medis, konteks penyebaran, dan situasinya di Indonesia, Prof. Dr. dr. Pustika Amalia Wahidiyat, Sp.A(K), Subsp. HO., lebih akrab dipanggil Prof. Lia, menjadi sosok yang tepat. Selama 30 tahun beliau mendedikasikan pelayanannya di bidang hematologi (penyakit darah) dan onkologi (kanker). Kini, Prof. Lia adalah salah satu pakar utama talasemia di Indonesia.
            </p>
          </FadeIn>

          <FadeIn>
            <p>
              Talasemia berasal dari kata <em>thalassa</em> (laut tengah) dan <em>haema</em> (darah). Penyakit genetik ini pertama kali ditemukan pada sekelompok anak di salah satu pulau di laut tengah yang memiliki ciri fisik unik. Ciri-ciri itu melainkan wajah pucat, tulang menonjol, tubuh kecil, dan perut membuncit karena pembengkakan pada hati dan limpa.
            </p>
          </FadeIn>

          <FadeIn>
            <p>
              Kelainannya terletak pada sel darah merah. Sel darah merah mengandung hemoglobin. Kesalahan genetik yang diturunkan orang tua pembawa menyebabkan rantai hemoglobin tidak terbentuk sempuna. Oleh karena itu, sel darah merah sangat rapuh, terus-menerus pecah, dan tidak optimal untuk regenerasi. Adapun, talasemia dapat dibagi menjadi 3 jenis.
            </p>
          </FadeIn>

          <FadeIn className="my-12">
            <div className="relative w-full rounded-xl overflow-hidden bg-black/10">
              <Image 
                src="/images/skema-genetik.png" 
                alt="Skema penurunan gen talasemia pada anak."
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
              />
            </div>
            <p className="text-sm md:text-base text-center mt-4 opacity-75">
              Skema penurunan gen talasemia pada anak.
            </p>
          </FadeIn>

          <FadeIn>
            <p>
              <strong>Pertama, talasemia minor</strong> yang tidak bergejala dan tampak normal, namun sel darah merah tetap lebih kecil dan pucat. Jenis ini tidak berpengaruh pada tubuh, namun bisa menurunkan talasemia sehingga disebut sebagai pembawa sifat. <strong>Kedua, talasemia intermedia</strong>, pengidap membutuhkan transfusi darah, namun dalam interval yang lebih lama (beberapa bulan sekali atau saat membutuhkan seperti pada masa kehamilan). <strong>Ketiga, talasemia mayor</strong>, jenis paling berat, mewajibkan pasien menjalankan transfusi darah seumur hidup secara rutin (2-6 minggu sekali).
            </p>
          </FadeIn>

          <FadeIn>
            <p>
              Sayangnya talasemia tidak umum diketahui meski dapat diturunkan ke siapapun. Penurunannya ibarat melempar dadu di setiap kehamilan. Jika sesama pembawa sifat menikah, ada peluang sebesar 25% di setiap kehamilan untuk melahirkan anak talasemia mayor. Sebuah persentase yang terkesan kecil, namun nyatanya sangat memungkinkan untuk menimpa siapapun, karena berlaku pada tiap kehamilan. Terbukti dengan angka kelahiran talasemia mayor yang masih meningkat setiap tahunnya, bahwa masih banyak pasangan belum teredukasi, belum mengetahui dirinya memiliki talasemia minor, dan belum paham akan resiko jangka panjangnya.
            </p>
          </FadeIn>

          <FadeIn className="my-12">
            <div className="relative w-full rounded-xl overflow-hidden bg-black/10">
              <Image 
                src="/images/info-prev.png" 
                alt="Infografik Prevalensi Pengidap Talasemia di Indonesia"
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
              />
            </div>
            <p className="text-sm md:text-base text-center mt-4 opacity-75">
              Infografik Prevalensi Pengidap Talasemia di Indonesia (Data Yayasan Thalassaemia Indonesia & BPJS Kesehatan 2025).
            </p>
          </FadeIn>

          <FadeIn>
            <p>
              Pada pengidap talasemia, terjadi kelebihan zat besi dari pengobatan berupa transfusi darah yang harus dilakukan rutin dan tubuh yang tidak optimal menyaring darah. Zat besi yang berlebih akhirnya menumpuk pada organ. Penumpukan zat besi mengakibatkan berbagai komplikasi pada berbagai organ yang dapat memicu komplikasi pendarahan hingga gagal jantung, kulit yang membuat warna kulit menggelap atau menguning, kelenjar endokrin yang dapat mengakibatkan diabetes, hingga kelenjar hormon yang menghambat pertumbuhan. Tulang pengidap talasemia mayor juga sangat rapuh karena tubuh bekerja sangat keras untuk menghasilkan sel darah merah.
            </p>
          </FadeIn>

          <FadeIn>
            <p>
              Indonesia berada di ikat pinggang talasemia dunia. Pembawa sifat mencapai 3-10% sehingga diperkirakan sebanyak 2.500 bayi talasemia mayor lahir setiap tahun. BPJS Kesehatan menunjukkan adanya 398 ribu kasus talasemia per tahun 2025. Data ini terus meningkat dari tahun-tahun sebelumnya, seperti data Yayasan Thalassemia Indonesia (YTI). Adapun, untuk talasemia mayor YTI mencatat adanya 15.000 pasien per tahun 2025. Estimasi mencapai 25.000 pasien pada tahun 2025, menghitung berdasarkan persentase dan kelahiran talasemia mayor. Menurut Prof. Lia, selisih ini bisa diakibatkan banyaknya pengidap talasemia yang belum tercatat, berada di daerah terpencil, atau meninggal akibat anemia berat sebelum terdiagnosis dan tercatat.
            </p>
          </FadeIn>

          <FadeIn className="my-12">
            <div className="relative w-full rounded-xl overflow-hidden bg-black/10">
              <Image 
                src="/images/infografik-biaya.png" 
                alt="Infografik jumlah pengeluaran pengidap talasemia dan klaim manfaat talasemia BPJS Kesehatan"
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
              />
            </div>
            <p className="text-sm md:text-base text-center mt-4 opacity-75">
              Infografik jumlah pengeluaran pengidap talasemia dan klaim manfaat talasemia BPJS Kesehatan (Data BPJS Kesehatan 2025).
            </p>
          </FadeIn>

          <FadeIn>
            <p>
              Talasemia juga menjadi salah satu penyakit termahal yang ditanggung BPJS. Biaya perawatan per anak bisa mencapai Rp300.000.000 per tahun. Sementara, pengobatan talasemia mayor berlangsung seumur hidup. Talasemia mayor memiliki alternatif pengobatan permanen yang jarang disinggung karena biaya yang luar biasa berat. Terapi gen atau transplantasi sumsum tulang berkisar antara Rp4.000.000.000 - Rp10.000.000.000 (miliar). Pada data penyakit kronis dengan biaya tertinggi Program JKN, talasemia tercatat di peringkat ke-6 dengan pengeluaran sebesar Rp852 miliar pada tahun 2025, jumlah yang meningkat dari 4 tahun sebelumnya.
            </p>
          </FadeIn>

          <FadeIn>
            <p>
              Tidak cukup sampai situ, dampak talasemia mayor pada pertumbuhan psikologis dan sosial pengidap juga menjadi tantangan yang signifikan. Prof. Lia menjelaskan bahwa kasus perundungan umum terjadi pada pengidap talasemia mayor, bahkan berujung pada sejumlah pengidap yang putus sekolah. Perizinan dan ketidakhadiran, baik di sekolah hingga tempat kerja dicap sebagai "penyakitan dan tidak produktif". Lapangan kerja sudah terbatas untuk tenaga kerja yang sehat dan produktif. Perubahan ini menutup banyak kesempatan bekerja pengidap talasemia mayor, termasuk Rani. Stigma sosial juga bisa dinilai melalui fisik pengidap. Ciri khas pengidap yang dianggap jelek dan penyakitan sehingga banyak orang tidak selalu mendukung untuk berasosiasi dengan pengidap talasemia mayor.
            </p>
          </FadeIn>

          <FadeIn>
            <p>
              Namun dengan runtunan kendala dan tantangan dari segala aspek, disitulah Prof. Lia beliau memiliki peran yang lebih krusial dari memeriksa pasien dan meresepkan obat. Prof. Lia senantiasa menjadi sosok tegas yang siap menghadapkan pasiennya dengan realita pahit untuk menumbuhkan semangat perubahan ke arah yang baik.
            </p>
          </FadeIn>

          <FadeIn className="my-12">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black/10">
              <Image 
                src="/images/prof-lia.jpg" 
                alt="Potret Prof. Lia bersama para pasien talasemia mayor."
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm md:text-base text-center mt-4 opacity-75">
              Potret Prof. Lia bersama para pasien talasemia mayor.
            </p>
          </FadeIn>

          <FadeIn>
            <p className="text-xl md:text-2xl italic font-medium my-10 pl-6 border-l-4 border-[var(--foreground)]">
              "Saya selalu tanyakan kamu mau jadi yang bagus atau jadi yang jelek?", ucap Prof. Lia membagikan pertanyaan jimatnya, mendorong para pasien untuk tidak abai.
            </p>
          </FadeIn>

          <FadeIn>
            <p>
              Bagi para pasien Prof. Lia, ketegasan yang didasarkan kehangatan dan rasa sayang, mendorong aksi perubahan yang baik, justru membuat mereka, seperti teman-teman komunitas TM menyapa Prof. Lia dengan sebutan "mami", layaknya ibu yang memastikan anak-anaknya supaya terus mewujudkan semangat bertahan. Berhenti melihat penyakit sebagai musuh, namun menjadi bagian dari diri kita yang harus dirawat.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 4 */}
      <section className="mb-16 md:mb-24">
        <FadeIn>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 uppercase tracking-wide">
            MENJADI BERBEDA: BATASAN SOSIAL & PSIKOLOGIS
          </h2>
        </FadeIn>

        <div className="space-y-6 text-lg md:text-xl leading-relaxed text-justify">
          <FadeIn className="mb-12">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black/10">
              <Image 
                src="/images/tif-conference.jpg" 
                alt="Potret para perwakilan pasien talasemia Indonesia, Malaysia, dan Thailand pada TIF International Conference 2023."
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm md:text-base text-center mt-4 opacity-75">
              Potret para perwakilan pasien talasemia Indonesia, Malaysia, dan Thailand pada TIF International Conference 2023.
            </p>
          </FadeIn>

          <FadeIn>
            <p>
              Ada istilah "sekolah adalah masa-masa terindah". Bagi sebagian pengidap talasemia mayor, sekolah hanya tempat perhentian untuk belajar. Hak istimewa, perizinan, dan keterbatasan mengikuti kegiatan berat menjadi pintu pembuka pejuang talasemia mayor seperti Andrew dan Rani diasingkan dan dianggap berbeda. Mempertanyakan kemampuan diri sendiri dan meremukkan rasa percaya diri diluar perjuangan medis yang sudah harus dihadapi.
            </p>
          </FadeIn>

          <FadeIn>
            <p>
              Tumbuh dengan pembiasaan sifat ambisius dan kompetitif, Rani adalah sosok dengan semangat dan disiplin kerja yang tinggi. la sempat mengenal lingkungan kerja kantoran semasa akhir kuliahnya, tahun 2017-2022, sebelum PHK masif akibat pandemi COVID-19. Sejak itu, kompetisi mencari kerja semakin memburuk. Standar rekrutmen perusahaan jauh lebih spesifik. Usaha setelah usaha melamar, semua berujung pada penolakan. Untuk waktu yang lama tidak ada yang memberi kejelasan, mengakibatkan Rani mempertanyakan diri hingga seorang HR pada suatu perusahaan bisa jujur menyatakan bahwa permasalahannya hanya terletak pada penyakit Rani. Penolakan itu menenangkan Rani. Membuat segala hal yang abu-abu menjadi jelas. Namun, dirinya tak kuasa merasa kepercayaan dirinya perlahan hilang. Pekerjaan menjadi sebuah perbincangan sensitif untuk Rani, bahkan ketika di rumah. Dalam acara kumpul keluarga besar, Rani tidak bisa menghindari ketidaknyamanan itu karena sepupu-sepupunya sibuk membicarakan karir. Sayangnya, Rani yang tidak merasa terhubung, diam memojok, merasa dipandang sebelah mata.
            </p>
          </FadeIn>

          <FadeIn>
            <p>
              Di kisah lain, Andrew yang kini berada di pergaulan kuliah harus bertarung dengan ketidakpastian sistem rumah sakit dan perasaan Fear of Missing Out (FOMO) dengan pergaulan kuliahnya. Di saat teman-temannya berkumpul hingga larut, Andrew harus pergi, berobat dan menyiapkan strategi jadwal pengobatan kedepannya yang tidak akan bertabrakan dengan kegiatan kampusnya.
            </p>
          </FadeIn>

          <FadeIn>
            <p>
              Ironisnya, sistem rumah sakit Andrew terkadang justru menjadi sumber demotivasinya. Sejak berpindah ke dokter dewasa, la kehilangan sosok mentor seperti Prof. Lia. Pengobatannya menjadi sekadar formalitas. Dengan ruang transfusi yang hanya memuat 7-12 pasien untuk sekitar 130 pasien, booking jadwal transfusi tidak selalu mudah. Belum lagi ketika sistem rumah sakit tidak stabil. Pembatalan jadwal yang mendadak, respon yang lambat, seluruh rencana yang dirancang sedemikian rupa sejak bulan sebelumnya hangus begitu saja. Tekanan psikologis ini memicu stres oksidatif yang berpengaruh semakin cepat menurunkan kadar hemoglobin. Ketidakpastian ini membuat Andrew demotivasi hingga menunda pengobatannya karena merasa dipermainkan sistem yang seharusnya membantunya.
            </p>
          </FadeIn>

          <FadeIn>
            <p>
              Rani dan Andrew memiliki otak, bakat, dan semangat yang sama dengan orang sehat lainnya. Namun, talasemia telah membatasi perkembangan sosial dan psikologis mereka. Tumbuh dengan label berbeda dan beban yang tidak produktif. Namun, sederet penghambat ini tidak mustahil dilewati. Di balik kemarahan yang berkelanjutan, Rani perlahan membangun dirinya lewat wirausaha makanannya bersama ibunya hingga menjadi bagian operasional di komunitas sepatu roda sejak 2025. Andrew juga menolak kalah. Satu tahun kuliahnya berhasil la lalui tanpa bolos kelas satu pun. Kisahnya menjadi bukti sebesar apapun tantangan dan sekecil apapun celahnya, tekad untuk bangkit akan selalu ada jalannya.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CAROUSEL SECTION */}
      <FadeIn>
        <ImageCarousel images={carouselImages} />
        <p className="text-sm opacity-80 text-center mt-4">
          Sejumlah kegiatan dan pencapaian Rani & Andrew
        </p>
      </FadeIn>

      {/* SECTION 5 */}
      <section className="my-16 md:my-24">
        <FadeIn>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 uppercase tracking-wide">
            KETIMPANGAN FASILITAS
          </h2>
        </FadeIn>

        <div className="space-y-6 text-lg md:text-xl leading-relaxed text-justify">
          <FadeIn className="mb-12">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black/10">
              <Image 
                src="/images/ruang-rscm.jpeg" 
                alt="Ruang thalassemia di RSCM Kiara."
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm md:text-base text-center mt-4 opacity-75">
              Ruang thalassemia di RSCM Kiara.
            </p>
          </FadeIn>

          <FadeIn>
            <p>
              Realitas talasemia di Indonesia terkadang juga ditentukan dari konteks geografi dan tempat para pengidap tinggal. Rani merasa sudah cukup berpindah rumah sakit sekitar Jakarta. Oleh karena itu, ketika membutuhkan sosok yang tepat untuk bertanya relasi dan berbagai prosedur hingga SOP berobat di berbagai rumah sakit, Rani mungkin menjadi orang yang tepat. Namun berdasarkan pengalamannya, di Jakarta sendiri, standar penanganan belum setara. Contohnya standar kantong darah yang diberikan faskes satu dengan lainnya yang masih berbeda-beda. Jenis obat kelasi besi yang tersedia pun juga masih berbeda. Jika di pusat kota berkembang seperti Jakarta saja belum memiliki pemenuhan standar yang seragam, bagaimana realitanya di luar sana?
            </p>
          </FadeIn>

          <FadeIn>
            <p>
              Di pulau lain, keterbatasan edukasi sempat membuat Tiara di Payakumbuh, Sumatra Barat, memberhentikan pengobatannya selama empat tahun mengira dirinya sudah sembuh dari diagnosa talasemia intermedia pada 2018. Kenyataannya baru menghantam dirinya yang hamil pada 2022. Limpanya membesar hingga diagnosanya naik menjadi talasemia mayor yang mewajibkan transfusi setiap 2 minggu.
            </p>
          </FadeIn>

          <FadeIn>
            <p>
              Sayangnya, Payakumbuh belum memiliki fasilitas khusus untuk talasemia. Untuk bertahan hidup, la terpaksa menempuh perjalanan antar kota sejauh 119 km ke kota Padang. Tiara akan berangkat dan pulang menggunakan bus, menyewa penginapan yang cukup sebagai tempat peristirahatan. Fisik dan ongkosnya ikut terkuras rutin. Bersyukurnya, setibanya di RSUP Padang, prosedur berjalan lancar. Kurang lebih ada 72 pasien talasemia dewasa dan pasien anak yang belum bisa terhitung di RSUP tersebut. Namun, semua dapat teratur oleh dokter. Stok darah pun aman dengan posisi PMI yang dekat markas TNI/Polri.
            </p>
          </FadeIn>

          <FadeIn className="my-12 flex flex-col sm:flex-row gap-6">
            <div className="flex-1">
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-black/10">
                <Image 
                  src="/images/infus-tangan.png" 
                  alt="Ilustrasi infus transfusi darah."
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm md:text-base text-center mt-4 opacity-75">
                Ilustrasi infus transfusi darah.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <p>
              Fasilitas di Padang memadai, namun akses bagi masyarakat daerah yang menjadi perjuangan ekstra yang nyata dan rutin dihadapi pejuang talasemia di daerah. Kini, Tiara dan teman-teman rumah sakitnya sedang berjuang mengajukan permohonan pada direksi untuk membangun poliklinik khusus untuk talasemia dan berharap akan adanya perkembangan pelayanan talasemia di daerah.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 6 */}
      <section className="mb-16 md:mb-24">
        <FadeIn>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 uppercase tracking-wide">
            THALASSEMIA MOVEMENT: WADAH PEREKAT, KARYA, DAN KEHILANGAN
          </h2>
        </FadeIn>

        <div className="space-y-6 text-lg md:text-xl leading-relaxed text-justify">
          <FadeIn className="mb-12">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black/10">
              <Image 
                src="/images/dora-ramadan.jpg" 
                alt="Komunitas Thalassemia Movement pada acara Donor Darah Ramadan (DORA)"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm md:text-base text-center mt-4 opacity-75">
              Komunitas Thalassemia Movement pada acara Donor Darah Ramadan (DORA)
            </p>
          </FadeIn>

          <FadeIn>
            <p>
              Bergabung sejak 2017 pada bidang partnership, Rani menemukan kembali kelayakan dirinya di komunitas Thalassemia Movement (TM). Komunitas yang membentuk dirinya menjadi sosok yang terampil, cakap berinteraksi, dan mengelola operasional, menjadi pembuktian bahwa dirinya jauh dari sekadar label "orang sakit". Melalui TM, Prof. Lia juga membuka gerbang bagi Andrew untuk ikut pada peluang TIF Conference 2023, bertemu dengan sosok inspiratif pejuang lainnya. la melihat talasemia bukan lagi sebagai kutukan, namun elemen hidup yang memberinya kesempatan melangkah jauh, bahkan yang tidak terpungkiri seperti menyurat dengan tim kementerian.
            </p>
          </FadeIn>

          <FadeIn>
            <p>
              Namun, kedekatan emosional di TM sekalipun menyimpan sisi lain. Ketika sebuah lingkaran terlalu intim, kabar duka dapat memicu demotivasi dan kehilangan yang menyeluruh. Rani mengenang tahun 2019 sebagai masa terkelam untuk TM. Kehilangan 5 orang penting dalam 4 bulan. Adapun, puncak kedukaan mereka adalah kepergian Adhit, salah satu founder dan ketua TM pada akhir 2022. Bahkan, di bulan kepergian Adhit, Rani mendadak sakit hingga dirawat akibat hipotermia, namun tanpa alasan dan penjelasan yang masuk akal, bukti bahwa duka bisa meruntuhkan ketahanan tubuh. Duka itu menyebar di seluruh komunitas, membuat TM mengalami masa vakum pada 2023.
            </p>
          </FadeIn>

          <FadeIn className="my-12">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black/10">
              <Image 
                src="/images/adit-collage.png" 
                alt="Potret kedekatan teman-teman Thalassemia Movement dengan (alm.) Adhit."
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm md:text-base text-center mt-4 opacity-75">
              Potret kedekatan teman-teman Thalassemia Movement dengan (alm.) Adhit.
            </p>
          </FadeIn>

          <FadeIn>
            <p>
              Sebelum tenggelam, semboyan kebiasaan kecil pasien talasemia di RSCM Kiara "Satu buka obat, semua buka obat", pertama kali tercipta. Mereka saling memaksa disiplin dan semangat berobat di tengah duka. Upaya agar tidak mengulang kehilangan teman seperjuangan karena abai.
            </p>
          </FadeIn>

          <FadeIn>
            <p>
              Perjuangannya TM bangkit melangkah ke ranah pemerintahan. Melalui jaringan salah satu anggota TM, sahabat seperjuangan Adhit, mereka berhasil duduk bersama Sandiaga Uno. Tujuannya untuk mengadvokasi skrining darah massal di sekolah hingga ke ranah pengadilan memperjuangkan talasemia untuk diakui sebagai kelompok disabilitas tak terlihat.
            </p>
          </FadeIn>

          <FadeIn className="my-12 flex flex-col sm:flex-row gap-6">
            <div className="flex-1">
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-black/10">
                <Image 
                  src="/images/sandiaga-uno.jpeg" 
                  alt="Potret Thalassemia Movement dengan Sandiaga Uno pada acara Donor Darah Ramadan (DORA)."
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm md:text-base text-center mt-4 opacity-75">
                Potret Thalassemia Movement dengan Sandiaga Uno pada acara Donor Darah Ramadan (DORA).
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <p>
              Pergantian kabinet pemerintahan membuat kebijakan berjalan timpang. Namun, TM tetap bergerak mandiri. Mulai dari mengelola data relawan donor, merangkul para pasien hingga dokter, saling menyemangati, komunitas ini berhasil membuktikan tekad memutus rantai talasemia Indonesia.
            </p>
          </FadeIn>

          <FadeIn className="my-12">
            <div className="relative w-full rounded-xl overflow-hidden bg-black/10">
              <Image 
                src="/images/tm-outdoor.png" 
                alt="Potret Rani dengan teman-teman di Thalassemia Movement."
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
              />
            </div>
            <p className="text-sm md:text-base text-center mt-4 opacity-75">
              Potret Rani dengan teman-teman di Thalassemia Movement.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 7 */}
      <section className="mb-16 md:mb-24">
        <FadeIn>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 uppercase tracking-wide">
            BERSAHABAT DAN MELANGKAH
          </h2>
        </FadeIn>

        <div className="space-y-6 text-lg md:text-xl leading-relaxed text-justify">
          <FadeIn>
            <p>
              Pada akhirnya, hidup dengan talasemia mayor adalah tentang menerima seluruh keterbatasan menjadi bagian dari jati diri. Seperti pesan Prof. Lia untuk tidak menjadikan talasemia sebagai musuh, melainkan teman belajar berkembang. Bagi Rani, kuncinya adalah penerimaan secara medis. Cari tahu berbagai hal mengenai kondisimu, cari relasi, upaya yang akhirnya mempertemukannya dengan TM, pintu sosial dan pengembangan dirinya. Ketika satu pintu tertutup, cari dan buka pintu lainnya. Rani sadar la diberi sakit karena la mampu melaluinya. Oleh karena itu, berusahalah hingga batas akhir karena pasti akan ada jalannya.
            </p>
          </FadeIn>

          <FadeIn>
            <p>
              Sementara untuk Andrew, penerimaan itu membuat dirinya tangguh. Di tengah keterbatasannya, la telah menjadi bagian dari pengurus inti divisi eksternal di TM dan aktif di himpunan mahasiswa jurusannya. Fokus Andrew bukan kemalangan dirinya dengan kondisinya, namun menggapai setiap kesempatan dan pencapaian yang akan membuktikan kelayakan dirinya. <em>"Create so much before you die"</em>, ujarnya. Bagi Andrew, darah dan tubuhnya akan selalu la perjuangkan untuk terus berkarya, sistem rumah sakit sekalipun tidak akan menggagalkan dirinya mencapai mimpinya.
            </p>
          </FadeIn>

          <FadeIn className="my-12">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black/10">
              <Image 
                src="/images/dora-vampir.jpg" 
                alt="Potret Andrew pada acara DORA 2024 menjadi maskot vampir TM."
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm md:text-base text-center mt-4 opacity-75">
              Potret Andrew pada acara DORA 2024 menjadi maskot vampir TM.
            </p>
          </FadeIn>

          <FadeIn>
            <p>
              Namun, perjuangan memutus rantai talasemia tidak bisa dijalankan oleh para pejuang talasemia. Mereka membutuhkan atensi dan aksi masyarakat hingga pemerintah. Edukasi talasemia di Indonesia masih tergolong redup karena masyarakat cenderung abai sebelum merasakan dampaknya langsung. Rani dan Andrew menekankan pentingnya menyingkirkan ego dan ketidaktahuan demi melakukan pencegahan berupa skrining darah lengkap sedini mungkin.
            </p>
          </FadeIn>

          <FadeIn>
            <p>
              Kisah Rani, Andrew, Tiara, dan Thalassemia Movement menjadi realita keras sekaligus inspirasi bagi kita semua, sehat maupun tidak. Jika tubuh mereka yang dibatasi komplikasi mampu bangkit, tidak ada alasan bagi kita untuk menyerah pada masa kelam. Gerakkan kepedulian, buka wawasan, dan lakukan skrining. Rangkul pejuang yang ada dan hentikan peluang talasemia di masa depan.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* FOOTER / CREDITS */}
      <FadeIn className="mt-32 mb-16 max-w-4xl mx-auto px-4 md:px-0">
        <div className="bg-[var(--foreground)] text-[var(--background)] rounded-3xl p-8 md:p-12">
          {/* Header */}
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-1.5 h-4 bg-[var(--background)]"></div>
            <h3 className="font-bold text-sm md:text-base tracking-[0.2em] uppercase">
              Tim Redaksi & Produksi
            </h3>
          </div>
          
          <hr className="border-t border-[var(--background)]/20 mb-8" />

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-8">
            <div>
              <p className="text-[10px] md:text-xs tracking-widest uppercase opacity-60 mb-2 font-bold">Penulis</p>
              <p className="font-bold text-sm md:text-base">Michelle Aurelia</p>
            </div>
            <div>
              <p className="text-[10px] md:text-xs tracking-widest uppercase opacity-60 mb-2 font-bold">Riset</p>
              <p className="font-bold text-sm md:text-base">Michelle Aurelia</p>
            </div>
            <div>
              <p className="text-[10px] md:text-xs tracking-widest uppercase opacity-60 mb-2 font-bold">Editor</p>
              <p className="font-bold text-sm md:text-base">Michelle Aurelia</p>
            </div>
            <div>
              <p className="text-[10px] md:text-xs tracking-widest uppercase opacity-60 mb-2 font-bold">Media</p>
              <p className="font-bold text-sm md:text-base">
                Michelle Aurelia (Foto & Infografik)<br/>
                Tri Rani (Foto)<br/>
                Andrew Rasel Gautama (Foto)
              </p>
            </div>
            <div>
              <p className="text-[10px] md:text-xs tracking-widest uppercase opacity-60 mb-2 font-bold">Video Director & Editor</p>
              <p className="font-bold text-sm md:text-base">Michelle Aurelia</p>
            </div>
            <div>
              <p className="text-[10px] md:text-xs tracking-widest uppercase opacity-60 mb-2 font-bold">Web Developer & Editor</p>
              <p className="font-bold text-sm md:text-base">Muhammad Fabiansyah Abubakar</p>
            </div>
          </div>
          
          <ViewCounter />
        </div>
      </FadeIn>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </main>
  );
}
