import Hero from "@/components/sections/hero";
import ProjectsHighlight from "@/components/sections/projects-highlight";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";

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