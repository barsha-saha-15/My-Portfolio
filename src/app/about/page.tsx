import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className=" flex-1 pt-24 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          I am a passionate frontend developer with experience in building fast, responsive and beautiful websites using modern technologies like Next.js and TailwindCSS.
        </p>
      </main>
      <Footer />
    </div>
  )
}