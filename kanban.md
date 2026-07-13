# Project Kanban Board: My Portfolio (Next.js, Tailwind CSS, TypeScript)

Papan Kanban ini disusun berdasarkan hasil analisis struktur repositori proyek Anda saat ini. Alur kerja ini dirancang menggunakan standar dev senior freelance untuk mengelola prioritas, membatasi pekerjaan dalam proses (*Work In Progress*), dan melacak kemajuan tugas secara granular.

---

## Alur Papan Kanban (Column Workflow)

| Kolom | Deskripsi Alur | Kriteria Masuk (Entry Criteria) | Kriteria Keluar (Definition of Done) |
| :--- | :--- | :--- | :--- |
| **TO-DO** | Daftar antrean tugas mikro yang siap dikerjakan berdasarkan analisis kebutuhan fitur baru. | Kebutuhan fitur jelas dan tugas telah didekomposisi menjadi unit terkecil. | Mulai dikerjakan aktif oleh developer. |
| **IN PROGRESS** | Tugas yang sedang dikerjakan secara aktif. Batasi maksimal 1 tugas untuk fokus tinggi. | Kode mulai ditulis di branch lokal. | Kode selesai dibuat, diuji lokal, dan bebas dari *syntax error*. |
| **POLISH** | Tugas yang fungsinya sudah jalan tapi membutuhkan perbaikan minor, visual, responsivitas, atau handling error. | Fungsionalitas dasar bekerja, namun butuh *fine-tuning* UI/UX atau optimasi logika. | Tampilan presisi pixel-perfect, responsif, dan interaksi terasa natural. |
| **DONE** | Tugas yang sudah selesai 100% dan terintegrasi ke branch utama. | Lulus integrasi sistem dan verifikasi visual secara menyeluruh. | Kode bersih dari linter error, di-commit, dan berhasil di-deploy. |

---

## PAPAN KANBAN

### 📋 TO-DO (Antrean Tugas)
- [ ] `[FE] Slicing dan Styling Experience Section (components/home/experience.tsx)`
- [ ] `[FE] Pembuatan Halaman Utama Blog Client (components/blog/blog-client.tsx)`
- [ ] `[SETUP] Pembuatan Route dan Halaman Case Studies (/app/casestudies/page.tsx)`
- [ ] `[CONTENT] Menambahkan Konten Blog Awal (.md / .mdx) ke Folder /content/blog`
- [ ] `[CONTENT] Menambahkan Studi Kasus Proyek ke Folder /content/projects`
- [ ] `[BE/API] Pembuatan Route Handler /api/contact menggunakan Resend/Nodemailer`
- [ ] `[BE/API] Mengintegrasikan Contact Form Client dengan Route Handler /api/contact`
- [ ] `[SEO/PERF] Optimasi Meta Tags menggunakan Next.js Metadata API pada Halaman Utama`
- [ ] `[SEO/PERF] Pembuatan Static/Dynamic sitemap.ts dan robots.txt`
- [ ] `[SEO/PERF] Setup Open Graph (OG) Images untuk Social Media Preview`
- [ ] `[SEO/PERF] Audit Lighthouse & Optimasi Performa (Next/Image, Preloading font)`

### ⏳ IN PROGRESS (Sedang Dikerjakan)
- [/] `[FE] Slicing Contact Form Section & Handling State Form Input (components/home/contact.tsx)`

### 💅 POLISH (Penyempurnaan & Refactor)
- [ ] `[FE] Fine-tuning Responsivitas Mobile pada Navigation Bar (components/layout/navbar.tsx)`
- [ ] `[FE] Integrasi dan Styling Component About ke Halaman Utama (app/page.tsx)`

### ✅ DONE (Selesai)
- [x] `[SETUP] Inisialisasi Next.js 16 (App Router) & TypeScript`
- [x] `[SETUP] Konfigurasi Tailwind CSS v4 & PostCSS`
- [x] `[SETUP] Install & Konfigurasi Next-Themes untuk Dark/Light Mode`
- [x] `[SETUP] Pembuatan Struktur Folder Awal & Git Repository`
- [x] `[CONTENT] Penulisan Data Profile Awal (data/profile.ts)`
- [x] `[CONTENT] Penulisan Data Projects Awal (data/projects.ts)`
- [x] `[FE] Slicing dan Implementasi Navigation Bar dengan Motion Effect`
- [x] `[FE] Slicing dan Implementasi Footer dengan Social Links`
- [x] `[FE] Slicing Hero Section dengan Terminal Card & Blinking Cursor`
- [x] `[FE] Slicing Projects Highlight Section dengan Carousel & Kategori Filter`
- [x] `[FE] Slicing Halaman Utama Projects Showcase (Projects Page)`

---

> ### 💡 Tips Senior Freelance
> "Dalam pengerjaan proyek freelance, kunci profitabilitas adalah efisiensi waktu. Jangan biarkan kode yang setengah jadi menumpuk di kolom **POLISH** atau **IN PROGRESS**. Selesaikan satu per satu (Stop Starting, Start Finishing).
> 
> Dengan menganalisis kode secara langsung, kita tahu persis bahwa component `About` sebenarnya sudah ada tetapi belum di-import ke halaman utama, dan halaman `blog` serta `contact` masih kosong. Menaruh hal-hal spesifik ini di kolom **POLISH** dan **TO-DO** secara terpisah akan menjaga alur kerja Anda tetap terukur dan menghindari kepanikan sebelum tenggat waktu pengiriman (*delivery*)."
