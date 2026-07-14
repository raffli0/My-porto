export interface BlogPost {
    slug: string;
    title: string;
    description: string;
    category: string;
    tags: string[];
    date: string;
    readTime: number; // in minutes
    featured: boolean;
    image?: string; // path relative to /public
    href?: string; // external link
}

export const blogPosts: BlogPost[] = [
    {
        slug: "scalable-micro-frontends",
        title: "Architecting Scalable Micro-frontends with Web Components",
        description: "An in-depth exploration of how to build modular, framework-agnostic UI systems that scale across large engineering teams without technical debt.",
        category: "System Architecture",
        tags: ["Architecture", "Web Components"],
        date: "2024-03-12",
        readTime: 13,
        featured: true,
        image: "/images/projects/pakar.webp",
    },
    {
        slug: "cicd-pipelines-monorepos",
        title: "Optimizing CI/CD Pipelines for Monorepos",
        description: "Learning to manage dependencies and build times when your repository grows past the standard size limit.",
        category: "DevOps",
        tags: ["DevOps", "Docker"],
        date: "2024-03-23",
        readTime: 8,
        featured: false,
        image: "/images/projects/pakar.webp",
    },
    {
        slug: "monospaced-fonts-ui",
        title: "The Psychology of Monospaced Fonts in UI",
        description: "Why developers feel more comfortable in environments that mimic terminal output and code editors.",
        category: "Design",
        tags: ["Design", "CI/UX"],
        date: "2024-02-28",
        readTime: 5,
        featured: false,
        image: "/images/projects/pakar.webp",
    },
    {
        slug: "finetune-llama3",
        title: "Fine-tuning Llama-3 for Technical Content",
        description: "A practical guide to creating a local AI agent that understands your specific documentation style.",
        category: "AI",
        tags: ["AI", "LLM"],
        date: "2024-01-30",
        readTime: 11,
        featured: false,
        image: "/images/projects/pakar.webp",
    },
    {
        slug: "death-of-fullstack",
        title: "The Death of the Full-Stack Developer?",
        description: "Exploring the increasing specialization in front-end and infrastructure and why the middle ground is disappearing.",
        category: "Opinion",
        tags: ["Opinion Piece"],
        date: "2023-12-05",
        readTime: 6,
        featured: false,
    },
    {
        slug: "hardening-edge-functions",
        title: "Hardening your Edge Functions",
        description: "Securing serverless environments without compromising on latency or performance benchmarks.",
        category: "Security",
        tags: ["Security"],
        date: "2023-12-13",
        readTime: 9,
        featured: false,
        image: "/images/projects/pakar.webp",
    },
    {
        slug: "react-server-components",
        title: "React Server Components in Production",
        description: "Hard-won lessons from shipping RSC-heavy applications at scale, including gotchas that aren't in the docs.",
        category: "Web Development",
        tags: ["React", "Next.js"],
        date: "2024-04-01",
        readTime: 14,
        featured: false,
        image: "/images/projects/pakar.webp",
    },
    {
        slug: "linux-kernel-modules",
        title: "Writing Your First Linux Kernel Module",
        description: "A step-by-step practical guide to developing, loading, and debugging custom kernel modules.",
        category: "Linux",
        tags: ["Linux", "Systems"],
        date: "2024-02-10",
        readTime: 18,
        featured: false,
    },
    {
        slug: "typescript-performance",
        title: "TypeScript Performance Tips Nobody Talks About",
        description: "Compiler settings, type instantiation depth, and project references that can cut your build time in half.",
        category: "TypeScript",
        tags: ["TypeScript", "Performance"],
        date: "2024-03-05",
        readTime: 7,
        featured: false,
        image: "/images/projects/pakar.webp",
    },
];

export const blogCategories = [
    "All",
    ...Array.from(new Set(blogPosts.map((p) => p.category))),
];

export const blogTagColors: Record<string, string> = {
    "DevOps": "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
    "Docker": "bg-sky-500/10 text-sky-400 border border-sky-500/20",
    "Design": "bg-purple-500/10 text-purple-400 border border-purple-500/20",
    "CI/UX": "bg-pink-500/10 text-pink-400 border border-pink-500/20",
    "AI": "bg-violet-500/10 text-violet-400 border border-violet-500/20",
    "LLM": "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20",
    "Security": "bg-red-500/10 text-red-400 border border-red-500/20",
    "Opinion Piece": "bg-amber-500/10 text-amber-400 border border-amber-500/20",
    "Architecture": "bg-blue-500/10 text-blue-400 border border-blue-500/20",
    "Web Components": "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
    "React": "bg-sky-500/10 text-sky-400 border border-sky-500/20",
    "Next.js": "bg-white/10 text-white/70 border border-white/15",
    "Linux": "bg-orange-500/10 text-orange-400 border border-orange-500/20",
    "Systems": "bg-zinc-500/10 text-zinc-400 border border-zinc-500/20",
    "TypeScript": "bg-blue-500/10 text-blue-400 border border-blue-500/20",
    "Performance": "bg-green-500/10 text-green-400 border border-green-500/20",
};
