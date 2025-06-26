import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">My Profile</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <ProjectCard
            title="Portfolio Website"
            description="My personal portfolio built with Next.js and TailwindCSS"
          />
          <ProjectCard
            title="UIU Gaming Room"
            description="My team work at University"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}