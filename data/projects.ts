export interface Project {
    slug: string;
    title: string;
    description: string;
    tags: string[];
    href?: string;
    repo?: string;
    image?: string;        // path relative to /public, e.g. "/images/projects/myapp.png"
    featured: boolean;
    status: "live" | "wip" | "archived";
    categories: string[];  // e.g. ["Website", "Internet of Things"]

    // Extended properties for the project-detail pages:
    background?: string; // Latar Belakang (Overview)
    details?: string; // Detail Proyek (Technical / Functional Details)
    techStackExtended?: {
        fe?: string[];
        be?: string[];
        db?: string[];
        toolsServices?: string[];
    };
    gallery?: string[]; // Screenshots UI
    contributors?: {
        name: string;
        githubUrl: string;
    }[];
    relatedSlugs?: string[]; // Related projects slugs (1-2 related)
}

export const projects: Project[] = [
    {
        slug: "humana-web",
        title: "Humana Web",
        description: "Sistem HRIS berbasis web untuk mengelola presensi, data karyawan, dan operasional perusahaan secara terpusat.",
        tags: ["Next.js", "Tailwind CSS", "Firebase"],
        repo: "https://github.com/raffli0/humana-web",
        image: "/images/projects/pakar.webp", // Fallback to pakar or other webp
        featured: true,
        status: "wip",
        categories: ["Website", "Mobile App"],
        background: "Proyek ini dilatarbelakangi oleh kebutuhan perusahaan dalam mendigitalisasi proses HRIS (Human Resource Information System). Sebelum sistem ini dikembangkan, pencatatan absensi harian, pengajuan cuti, dan manajemen data profil karyawan masih dilakukan secara manual menggunakan lembar kerja excel terpisah, sehingga rentan terhadap kesalahan pencatatan dan lambat dalam proses rekapitulasi data.",
        details: "Sistem HRIS versi web ini menyediakan panel dashboard admin untuk manajemen data karyawan, dashboard statistik presensi bulanan, sistem persetujuan izin/cuti secara real-time, serta modul manajemen penggajian (payroll) terintegrasi. Sistem dilengkapi dengan kontrol akses berbasis peran (RBAC) untuk menjamin keamanan data sensitif perusahaan.",
        techStackExtended: {
            fe: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "Shadcn UI", "Framer Motion"],
            be: ["Node.js (Firebase Admin SDK)", "Next.js Route Handlers"],
            db: ["Google Cloud Firestore"],
            toolsServices: ["Firebase Authentication", "Git & GitHub", "Vercel Deployment"]
        },
        gallery: ["/images/projects/pakar.webp"],
        contributors: [
            { name: "Raffly", githubUrl: "https://github.com/raffli0" },
            { name: "Nabila Aulia Rahma", githubUrl: "https://github.com/" }
        ],
        relatedSlugs: ["humana-app", "perpus-digital"]
    },
    {
        slug: "humana-app",
        title: "Humana App",
        description: "Aplikasi mobile untuk mengelola Human Resource Information System absensi geolokasi karyawan.",
        tags: ["Flutter", "Dart", "Firebase"],
        href: "/",
        repo: "https://github.com/raffli0/humana-forui",
        image: "/images/projects/porto.webp",
        featured: true,
        status: "wip",
        categories: ["Mobile App", "Website"],
        background: "Merupakan pendamping mobile dari sistem Humana Web. Dibuat untuk mempermudah karyawan lapangan atau jarak jauh melakukan absensi harian secara praktis langsung dari smartphone mereka tanpa perlu menggunakan mesin absen fisik, sekaligus menjamin keaslian data presensi melalui koordinat GPS.",
        details: "Aplikasi ini memfasilitasi absensi masuk/pulang berbasis geolokasi dengan integrasi Google Maps API, pengambilan foto selfie untuk verifikasi wajah, pelacakan riwayat presensi bulanan, modul pengajuan izin kerja/cuti langsung dari aplikasi, serta akses cepat ke slip gaji digital bulanan.",
        techStackExtended: {
            fe: ["Flutter SDK", "Dart", "Provider State Management"],
            be: ["Firebase Cloud Functions", "Firebase Auth Mobile SDK"],
            db: ["Google Cloud Firestore"],
            toolsServices: ["Google Maps Geolocation API", "Git & GitHub", "Android Studio"]
        },
        gallery: ["/images/projects/porto.webp"],
        contributors: [
            { name: "Raffly", githubUrl: "https://github.com/raffli0" }
        ],
        relatedSlugs: ["humana-web"]
    },
    {   
        slug: "cnc-mini",
        title: "Mikrokontroler Arduino CNC Mini GRBL-28byj-48",
        description: "Mini CNC Menggunakan Arduino Uno dan 3 Stepper Motor 28BYJ-48 untuk menggambar pola dua dimensi.",
        tags: ["Arduino", "GRBL", "28byj-48"],
        repo: "https://github.com/raffli0/GRBL-28byj-48",
        image: "/images/projects/cnc.webp",
        featured: true,
        status: "wip",
        categories: ["Mikrokontroler"],
        background: "Proyek mikrokontroler ini dirancang sebagai alat bantu belajar dan eksperimen rekayasa perangkat keras murah. Tujuannya adalah merakit mesin CNC (Computer Numerical Control) mini untuk keperluan plotting gambar atau pengukiran sederhana dengan memanfaatkan motor stepper murah tipe 28BYJ-48 dan driver ULN2003.",
        details: "Memanfaatkan Arduino Uno yang di-flash dengan firmware GRBL yang telah dimodifikasi agar kompatibel dengan rasio langkah stepper motor 28BYJ-48. Mesin mampu menerima instruksi G-Code standar dari software kontroler di komputer lalu menerjemahkannya ke gerakan mekanis presisi di sumbu X, Y, dan Z.",
        techStackExtended: {
            fe: ["Universal Gcode Sender (UGS)", "Candle CNC Software"],
            be: ["Arduino C/C++ Code (GRBL Firmware Library)"],
            db: ["None"],
            toolsServices: ["Arduino IDE", "Stepper Motor 28BYJ-48", "Driver ULN2003 / CNC Shield V3", "Fritzing Schematic Designer"]
        },
        gallery: ["/images/projects/cnc.webp"],
        contributors: [
            { name: "Raffly", githubUrl: "https://github.com/raffli0" },
            { name: "Dianne Ramadhani", githubUrl: "https://github.com/Diannerd" },
            { name: "Rajza Muhammad Yasyfa Fajri Sidiq", githubUrl: "https://github.com/Rajza-Muhammad-Yasyfa-Fajri-Sidiq" }
        ],
        relatedSlugs: ["iot-heartbeat"]
    },
    {
        slug: "iot-heartbeat",
        title: "Deteksi detak jantung & saturasi oksigen",
        description: "IoT berbasis sensor heartbeat MAX30100 untuk memantau kesehatan detak jantung jarak jauh.",
        tags: ["HTML", "Bootstrap", "JavaScript", "Python", "MQTT", "ESP32"],
        href: "/",
        repo: "https://github.com/Salsabillasyazwani/Deteksi-detak-jantung_Kelompok10_SistemMikrokontroler",
        image: "/images/projects/iot.webp",
        featured: true,
        status: "wip",
        categories: ["Internet of Things", "Website"],
        background: "Latar belakang dibuatnya proyek ini adalah untuk memfasilitasi pemantauan kesehatan jarak jauh bagi pasien isolasi mandiri atau lansia. Data tanda-tanda vital seperti detak jantung (BPM) dan tingkat kejenuhan oksigen darah (SpO2) dapat dibaca secara non-invasif lalu dipantau oleh tenaga medis secara terpusat.",
        details: "Menggunakan modul sensor MAX30100/MAX30102 yang terhubung ke NodeMCU ESP32. Data hasil pembacaan diproses menggunakan filter digital di ESP32, lalu ditransmisikan secara nirkabel via protokol MQTT ke broker MQTT Mosquitto. Server backend Python membaca antrean pesan lalu mempublikasikannya ke web dashboard interaktif dengan WebSockets.",
        techStackExtended: {
            fe: ["HTML5", "CSS3", "Bootstrap 5", "Chart.js for Real-time Graphs", "JavaScript (WebSockets)"],
            be: ["Python (Flask)", "MQTT Broker Mosquitto", "ESP32 Arduino Firmware"],
            db: ["MySQL (untuk riwayat data pasien)"],
            toolsServices: ["ESP32 NodeMCU", "Sensor MAX30100 / MAX30102", "Arduino IDE", "Visual Studio Code"]
        },
        gallery: ["/images/projects/iot.webp"],
        contributors: [
            { name: "Raffly", githubUrl: "https://github.com/raffli0" },
            { name: "Salsabilla Syazwani", githubUrl: "https://github.com/Salsabillasyazwani" }
        ],
        relatedSlugs: ["cnc-mini"]
    },
    {
        slug: "sistem-pakar",
        title: "Sistem Pakar Diagnosa Kerusakan Laptop",
        description: "Sistem pakar menggunakan Certainty Factor untuk mendiagnosa kerusakan hardware dan software laptop.",
        tags: ["Laravel", "MySQL", "Bootstrap"],
        repo: "https://github.com/raffli0/Sistem_Pakar_Kerusakan_Laptop",
        image: "/images/projects/pakar.webp",
        featured: true,
        status: "wip",
        categories: ["Website"],
        background: "Kesulitan pengguna awam dalam mengidentifikasi jenis kerusakan laptop seringkali berujung pada biaya servis yang tidak perlu. Sistem pakar ini dirancang untuk memindahkan kecakapan teknis seorang teknisi laptop senior ke dalam basis data aturan terkomputerisasi agar pengguna dapat mendiagnosa secara cepat.",
        details: "Menerapkan metode penalaran Forward Chaining untuk mencocokkan gejala-gejala yang dialami laptop dengan basis pengetahuan, serta metode Certainty Factor (CF) untuk menghitung tingkat keyakinan (probabilitas kepastian) dari hasil diagnosa akhir. Memiliki panel admin lengkap untuk mengelola gejala, jenis kerusakan, dan relasi aturan.",
        techStackExtended: {
            fe: ["HTML5", "CSS3", "Bootstrap 5", "AdminLTE Dashboard Template", "jQuery"],
            be: ["Laravel Framework (PHP)", "Eloquent ORM"],
            db: ["MySQL Database"],
            toolsServices: ["Composer", "Git & GitHub", "Apache Web Server"]
        },
        gallery: ["/images/projects/pakar.webp"],
        contributors: [
            { name: "Raffly", githubUrl: "https://github.com/raffli0" },
            { name: "Agung Candra Saputra", githubUrl: "https://github.com/AgungCandraS" },
            { name: "Albany Adchrisa Diwangga", githubUrl: "https://github.com/Adchrisa" }

        ],
        relatedSlugs: ["perpus-digital"]
    },
    {
        slug: "perpus-digital",
        title: "Perpus Digital",
        description: "Website untuk mengelola sirkulasi buku perpustakaan secara digital dan kalkulasi denda otomatis.",
        tags: ["Laravel", "MySQL", "Tailwind CSS"],
        repo: "https://github.com/raffli0",
        image: "/images/projects/pakar.webp",
        featured: false,
        status: "wip",
        categories: ["Website"],
        background: "Proyek perpustakaan digital ini dilatarbelakangi oleh kurang efektifnya sistem manajemen peminjaman buku manual di sekolah. Proses verifikasi tanggal tenggat, pencarian stok buku, dan penghitungan denda keterlambatan secara manual sering memicu selisih pencatatan dan penumpukan antrean.",
        details: "Aplikasi ini memfasilitasi pencatatan katalog buku digital berbasis kategori, sistem manajemen keanggotaan perpustakaan, pencatatan otomatis transaksi pinjam-kembali buku, kalkulasi denda keterlambatan harian secara otomatis sebesar Rp1.000/hari, serta ekspor laporan bulanan.",
        techStackExtended: {
            fe: ["Tailwind CSS", "HTML5", "JavaScript (Alpine.js)"],
            be: ["Laravel Framework", "PHP Core"],
            db: ["MySQL Database"],
            toolsServices: ["Composer Package Manager", "Git", "XAMPP local server"]
        },
        gallery: ["/images/projects/pakar.webp"],
        contributors: [
            { name: "Raffly", githubUrl: "https://github.com/raffli0" }
        ],
        relatedSlugs: ["sistem-pakar", "fakie-web"]
    },
    {
        slug: "fakie-web",
        title: "Fakie Web",
        description: "Website e-commerce untuk menjual produk-produk perlengkapan skate (skateboards & apparel).",
        tags: ["Vite", "Tailwind CSS", "TypeScript"],
        repo: "https://github.com/raffli0",
        image: "/images/projects/pakar.webp",
        featured: false,
        status: "wip",
        categories: ["Website"],
        background: "Proyek ini berawal dari ide untuk memfasilitasi komunitas skateboard lokal dalam mencari dan berbelanja papan skate, wheels, truck, dan bearing berkualitas secara online. Desain web berfokus pada kecepatan muat tinggi, antarmuka minimalis bernuansa kasual, dan responsivitas tinggi.",
        details: "Merupakan aplikasi frontend e-commerce SPA (Single Page Application). Memiliki fitur galeri katalog produk interaktif dengan penyaringan kategori, keranjang belanja (cart) berbasis LocalStorage untuk menyimpan produk terpilih, serta antarmuka pembayaran simulasi (checkout form).",
        techStackExtended: {
            fe: ["React (Vite)", "TypeScript", "Tailwind CSS", "Lucide Icons"],
            be: ["None (Mock JSON Database API)"],
            db: ["Browser LocalStorage (untuk persistent cart)"],
            toolsServices: ["Vite Dev Server", "ESLint Linter Tool", "Git & GitHub"]
        },
        gallery: ["/images/projects/pakar.webp"],
        contributors: [
            { name: "Raffly", githubUrl: "https://github.com/raffli0" }
        ],
        relatedSlugs: ["perpus-digital"]
    },
];
