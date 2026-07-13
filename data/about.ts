export interface Experience {
    role: string;
    company: string;
    period: string;
    description: string;
    type: "Work" | "Education" | "Organization";
}

export interface SkillCategory {
    category: string;
    skills: string[];
}

export interface TechItem {
    name: string;
    iconName?: string; // name of lucide-react icon or custom name
}

export const experiences: Experience[] = [
    {
        role: "Computer and Network Engineering",
        company: "SMK MedikaCom Bandung",
        period: "2020 - 2023",
        description: "Mempelajari dasar jaringan komputer, administrasi server Linux dan Windows, konfigurasi Mikrotik, virtualisasi, serta dasar keamanan jaringan.",
        type: "Education"
    },
    {
        role: "Bachelor of Informatics Student",
        company: "Universitas Teknologi Bandung",
        period: "2023 - Present",
        description: "Mempelajari pengembangan perangkat lunak, pengembangan web dan mobile, basis data, keamanan siber, jaringan komputer, serta mengimplementasikannya melalui berbagai proyek akademik dan personal.",
        type: "Education"
    },
    {
        role: "Head of Logistic Division",
        company: "Music Society UTB",
        period: "2024 - 2025",
        description: "Mengkoordinasikan tim logistik, mengelola kebutuhan perlengkapan, serta memastikan kelancaran operasional pada berbagai kegiatan dan acara musik yang diselenggarakan organisasi.",
        type: "Organization"
    },
    {
        role: "Full Stack Developer (Freelance)",
        company: "Self-Employed",
        period: "2024 - Present",
        description: "Mengembangkan proyek freelance, personal, dan akademik untuk memperdalam pengalaman dalam pengembangan web, mobile, deployment server, dan keamanan aplikasi.",
        type: "Work"
    },

];

export const skillCategories: SkillCategory[] = [
    {
        category: "Programming Languages",
        skills: ["TypeScript", "JavaScript", "PHP", "Python", "Java", "Dart", "Kotlin"]
    },
    {
        category: "Frameworks & Libraries",
        skills: ["Next.js", "React", "Laravel", "Tailwind CSS", "Bootstrap", "Framer Motion", "Flutter"]
    },
    {
        category: "Tools & OS",
        skills: ["Git & GitHub", "Linux (Fedora / Ubuntu)", "Docker", "VS Code", "Vite", "NPM", "Android Studio"]
    },
    {
        category: "Security & Networking",
        skills: ["Web Penetration Testing", "Burp Suite", "Kali Linux"]
    }
];

export const techStack: TechItem[] = [
    { name: "Next.js" },
    { name: "React" },
    { name: "TypeScript" },
    { name: "Laravel" },
    { name: "Tailwind CSS" },
    { name: "MySQL" },
    { name: "Linux" },
    { name: "Docker" },
    { name: "Git" }
];
