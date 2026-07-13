import Hero from "@/components/home/hero";
import ProjectsHighlight from "@/components/home/projects-highlight";
import About from "@/components/home/about";
import Contact from "@/components/home/contact";

export default function Home() {
    return (
        <>
            <Hero />
            <ProjectsHighlight />
            <About />
            <Contact />
        </>
    );
}