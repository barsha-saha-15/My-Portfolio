import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectPage(){
    return (
        <>
        <Header/>
        <main className="pt-24 px-6 max-w-5x1 mx-auto">
            <h2 className="text-3x1 font-bold mb-6">My Profile</h2>
            <div className="grid md:grid-cols-2 gap-6">
                <ProjectCard title="Porthfolio Website"
                             description="My personal portfolio built with Next.js and TailwindCSS"
                             />
                             <ProjectCard title="UIU Gaming Room"
                                          description="My team work at University"
                             
                             />




            </div>

        </main>
        <Footer/>
        </>
    )
}