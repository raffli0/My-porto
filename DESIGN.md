# Panduan Desain Proyek: My Portfolio (Raffly.dev)

Dokumen ini mendokumentasikan sistem desain, estetika visual, komponen UI, tata letak, dan detail interaksi yang digunakan dalam proyek portofolio pribadi **Raffly.dev**. Desain ini dirancang dengan menggabungkan estetika **minimalis modern** dan elemen **terminal pengembang** (*developer-centric*).

---

## 1. Tema & Konsep Estetika

Portofolio ini mengusung tema **"Hybrid Terminal"**. Konsep ini menggabungkan antarmuka bersih modern (skema warna monokromatik, sudut melengkung halus, transparansi kaca/glassmorphism) dengan detail-detail visual terminal baris perintah (*command line interface*):
- **Command-line Headers**: Penggunaan format perintah Unix (seperti `$ cat about.md`, `$ ls ./projects`, `$ find ./blog`) sebagai judul section.
- **Kursor Berkedip (*Blinking Cursor*)**: Karakter kursor aktif yang mensimulasikan lingkungan *shell* terminal.
- **Kartu Terminal 3D**: Frame visual berbentuk jendela aplikasi macOS/Linux dengan tombol kontrol jendela (merah, kuning, hijau) yang merespons gerakan mouse pengguna secara 3D.
- **Latar Belakang Grid**: Pola grid halus berpendar yang memudar secara radial dari bagian tengah halaman.

---

## 2. Palet Warna (Color Palette)

Aplikasi ini menggunakan Tailwind CSS v4 dengan ruang warna modern **OKLCH** untuk menjamin rentang warna yang cerah dan konsisten di mode gelap maupun terang.

### 2.1 Mode Terang vs. Mode Gelap

| Variabel CSS | Mode Terang (Light Mode) | Mode Gelap (Dark Mode) |
| :--- | :--- | :--- |
| `--background` | `oklch(1 0 0)` (Putih Murni) | `oklch(0.145 0 0)` (Hitam Pekat/Charcoal) |
| `--foreground` | `oklch(0.145 0 0)` (Hitam Teks) | `oklch(0.985 0 0)` (Putih Teks) |
| `--primary` | `oklch(0.205 0 0)` (Abu Sangat Gelap) | `oklch(0.922 0 0)` (Abu Terang/Pemberi Aksen) |
| `--card` | `oklch(1 0 0)` | `oklch(0.205 0 0)` (Abu Gelap) |
| `--border` | `oklch(0.922 0 0)` (Abu Tipis) | `oklch(1 0 0 / 10%)` (Transparansi Putih) |
| `--muted-foreground` | `oklch(0.556 0 0)` (Abu Medium) | `oklch(0.708 0 0)` (Abu Sedikit Terang) |

### 2.2 Warna Kategori Proyek
Untuk membedakan jenis proyek secara visual, sistem badge menggunakan aksen warna HSL/OKLCH yang teredam (*muted*):
- 💻 **Website**: Latar belakang biru transparan (`bg-blue-500/10`), teks biru langit (`text-blue-400`), border biru tipis.
- 🌐 **Internet of Things (IoT)**: Latar belakang hijau emerald transparan (`bg-emerald-500/10`), teks hijau emerald (`text-emerald-400`).
- 📱 **Mobile App**: Latar belakang merah rose transparan (`bg-rose-500/10`), teks merah rose (`text-rose-400`).
- 🔒 **Security Tools**: Latar belakang kuning transparan (`bg-yellow-500/10`), teks kuning (`text-yellow-400`).

---

## 3. Tipografi & Font

Portofolio ini memanfaatkan font dari Google Fonts yang disajikan secara lokal melalui Next.js Font API.

- **Font Sans/Heading (Geist Sans)**: Digunakan untuk struktur utama halaman, judul besar, dan teks deskripsi. Memberikan kesan bersih, modern, dan profesional.
- **Font Mono (Geist Mono)**: Digunakan untuk perintah terminal, badge kategori, tag teknologi, metadata tanggal, dan teks statis lainnya untuk mempertahankan estetika *developer*.

---

## 4. Komponen UI Utama & Spesifikasinya

### 4.1 Navigation Bar (`components/layout/navbar.tsx`)
- **Visual**: Desain melayang (*sticky*) dengan efek *backdrop-blur* (glassmorphism) dan border bawah tipis.
- **Interaksi**: 
  - Menggunakan Framer Motion (`layoutId="nav-pill"`) untuk efek transisi balon/kapsul latar belakang menu navigasi yang aktif.
  - Dropdown navigasi responsif khusus mobile dengan animasi meluncur ke bawah (*slide down*).
  - Sakelar tema (*theme toggle*) yang memutar ikon Matahari/Bulan saat diklik.

### 4.2 Terminal Card (`components/home/terminal-card.tsx`)
- **Interaksi 3D Tilt**: Menerapkan rotasi 3D dinamis (`rotateX` dan `rotateY`) berdasarkan posisi relatif kursor mouse pengguna saat berada di atas kartu.
- **Efek Glare**: Efek kilatan cahaya diagonal transparan yang ikut bergeser secara dinamis mengikuti arah kursor untuk memberikan kesan kedalaman fisik.
- **Header**: Replika bar jendela terminal macOS dengan tombol merah, kuning, dan hijau di pojok kiri atas.

### 4.3 Tombol Desain Kustom (`components/ui/button.tsx`)
Tombol dirancang menggunakan `class-variance-authority` (CVA) dengan beberapa varian khusus:
1. `variant="default"`: Memiliki bayangan tebal lembut (*shadow-lg shadow-primary/10*) dan sedikit membesar (*scale-[1.03]*) saat di-hover.
2. `variant="glow"`: Tombol utama dengan efek sapuan cahaya menyala (*glow sweep*) diagonal yang meluncur melintasi permukaan tombol saat kursor mendekat.
3. `variant="terminal"`: Menggunakan gaya border tipis retro, latar belakang semi-transparan, dan pendaran bayangan hijau/putih saat kursor di atasnya.

### 4.4 Projects Showcase Carousel (`components/home/projects-highlight.tsx`)
- **Grid Responsif**: Menampilkan 3 kartu di desktop (lg), 2 kartu di tablet (md), dan 1 kartu di mobile (sm).
- **Animasi Transisi**: Carousel berpindah secara halus menggunakan animasi spring dari Framer Motion.
- **Filter Dinamis**: Pengguna dapat memfilter berdasarkan kategori ("All", "Website", "IoT", dst.) dengan efek transisi pill latar belakang aktif yang bergeser dinamis.

---

## 5. Sistem Tata Letak (Layout System)

- **Container (`components/ui/container.tsx`)**: Pembatas lebar konten dengan nilai lebar maksimum `max-w-7xl`, margin auto, dan padding horizontal responsif (`px-4 sm:px-6 lg:px-8`).
- **Pola Grid Background (`bg-grid`)**: Digunakan secara global di elemen `body` menggunakan CSS linear-gradient berpola kotak berukuran `56px x 56px` dengan transparansi sangat tipis (`opacity-2.5%` di light mode dan `opacity-4%` di dark mode), dipadukan dengan `mask-image` radial gradient untuk menyamarkan sudut-sudut grid agar menyatu ke latar belakang solid.

---

## 6. Pedoman Penulisan Kode Visual

Saat membuat komponen UI baru:
1. **Gunakan Utility CSS Semantis**: Gunakan nama variabel tema seperti `border-border`, `bg-background`, `text-foreground`, atau `bg-accent` alih-alih memberikan warna solid ad-hoc (seperti `bg-white` atau `bg-black`), agar dukungan tema gelap/terang otomatis berjalan lancar.
2. **Pola Transisi**: Selalu sertakan properti transisi (seperti `transition-all duration-300`) pada elemen interaktif seperti tombol, tautan, dan filter pill untuk menghindari transisi visual yang kaku.
3. **Optimasi Gambar**: Selalu gunakan komponen `<img />` dengan penanganan fallback error atau integrasikan dengan Next.js `<Image />` agar performa halaman utama (LCP) tetap di atas 90%.
