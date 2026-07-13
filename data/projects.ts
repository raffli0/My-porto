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
}

export const projects: Project[] = [
    {
        slug: "humana-web",
        title: "Humana Web",
        description: "Sistem HRIS berbasis web untuk mengelola presensi, data karyawan, dan operasional perusahaan.",
        tags: ["Next.js", "Tailwind CSS", "Firebase"],
        repo: "https://github.com/raffli0/humana-web",
        image: "/images/projects/humana.webp",
        featured: true,
        status: "wip",
        categories: ["Website", "Mobile App"],
    },
    {
        slug: "humana-app",
        title: "Humana App",
        description:
            "Aplikasi mobile untuk mengelola Human Resource Information System.",
        tags: ["Flutter", "Dart", "Firebase"],
        href: "/",
        repo: "https://github.com/raffli0/humana-forui",
        image: "/images/projects/humana.webp",
        featured: true,
        status: "wip",
        categories: ["Mobile App", "Website"],
    },
    {   
        slug: "cnc-mini",
        title: "Mikrokontroler Arduino CNC Mini GRBL-28byj-48",
        description:
            "Mini CNC Menggunakan Arduino dan 3 Stepper Motor 28BYJ-48",
        tags: ["Arduino", "GRBL", "28byj-48"],
        repo: "https://github.com/raffli0/GRBL-28byj-48",
        image: "/images/projects/cnc.webp",
        featured: true,
        status: "wip",
        categories: ["Mikrokontroler"],
    },
    {
        slug: "iot-heartbeat",
        title: "Deteksi detak jantung & saturasi oksigen",
        description:
            "IoT berbasis sensor heartbeat",
        tags: ["HTML", "Bootstrap", "JavaScript", "Python", "MQTT", "ESP32"],
        href: "/",
        repo: "https://github.com/Salsabillasyazwani/Deteksi-detak-jantung_Kelompok10_SistemMikrokontroler",
        image: "/images/projects/iot.webp",
        featured: true,
        status: "wip",
        categories: ["Internet of Things", "Website"],
    },
    {
        slug: "sistem-pakar",
        title: "Sistem Pakar Diagnosa Kerusakan Hardware Software Laptop",
        description:
            "Sistem pakar untuk mendiagnosa kerusakan hardware dan software pada laptop",
        tags: ["Laravel", "MySQL", "Bootstrap"],
        repo: "https://github.com/raffli0/Sistem_Pakar_Kerusakan_Laptop",
        image: "/images/projects/pakar.webp",
        featured: true,
        status: "wip",
        categories: ["Website"],
    },
    {
        slug: "perpus-digital",
        title: "Perpus Digital",
        description:
            "Website untuk mengelola perpustakaan",
        tags: ["Laravel", "MySQL", "Tailwind CSS"],
        repo: "https://github.com/raffli0",
        image: "/images/projects/pakar.webp",
        featured: false,
        status: "wip",
        categories: ["Website"],
    },
    {
        slug: "fakie-web",
        title: "Fakie Web",
        description:
            "Website e-commerce untuk menjual produk-produk gear skate",
        tags: ["Vite", "Tailwind CSS", "TypeScript"],
        repo: "https://github.com/raffli0",
        image: "/images/projects/pakar.webp",
        featured: false,
        status: "wip",
        categories: ["Website"],
    },
];
