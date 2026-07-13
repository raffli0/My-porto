import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectDetail from "@/components/projects/project-detail";

interface PageProps {
    params: Promise<{ slug: string }>;
}

// Generate static routes for all projects
export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

// Dynamic metadata configuration
export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return {
            title: "Project Not Found | Raffly.dev",
        };
    }

    return {
        title: `${project.title} | Projects | Raffly.dev`,
        description: project.description,
    };
}

export default async function ProjectPage({ params }: PageProps) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return <ProjectDetail project={project} />;
}
