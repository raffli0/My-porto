import { Metadata } from "next";
import ProjectsClient from "@/components/projects/projects-client";

export const metadata: Metadata = {
    title: "Projects | Raffly.dev",
    description: "Kumpulan proyek yang dikerjakan oleh saya. Mulai dari Website, Internet of Things, Mobile App, hingga Security Tools.",
};

export default function ProjectsPage() {
    return <ProjectsClient />;
}
