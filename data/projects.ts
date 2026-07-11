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
        slug: "perpus-digital",
        title: "Perpus Digital",
        description:
            "Website untuk mengelola perpustakaan",
        tags: ["Laravel", "MySQL", "Tailwind Css"],
        repo: "https://github.com/raffli0",
        image: "/images/projects/pakar.webp",
        featured: true,
        status: "live",
        categories: ["Website"],
    },
    {
        slug: "porto",
        title: "Raffly.dev",
        description:
            "Website portofolio pribadi yang dibangun dengan Next.js 16, TypeScript, dan Framer Motion.",
        tags: ["Next.js", "TypeScript", "Framer Motion"],
        href: "/",
        repo: "https://github.com/raffli0",
        image: "/images/projects/porto.webp",
        featured: true,
        status: "live",
        categories: ["Website"],
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
        status: "live",
        categories: ["Website"],
    },
    {
        slug: "IoT",
        title: "Deteksi detak jantung & saturasi oksigen",
        description:
            "IoT berbasis sensor heartbeat",
        tags: ["HTML", "CSS", "JavaScript", "Python", "MQTT", "ESP32"],
        href: "/",
        repo: "https://github.com/raffli0",
        image: "/images/projects/porto.webp",
        featured: true,
        status: "live",
        categories: ["Internet of Things", "Website"],
    },
];
