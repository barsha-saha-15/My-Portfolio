import Header from "@/components/Header"
import Footer from "@/components/Footer"
export default function AboutPage(){
    return(
        <>
          <Header />
          <main className="pt-24 px-6 max-w-3x1 mx-auto">
            <h2 className="text-3x1 font-bold mb-4">About Me</h2>
            <p className="text-gray-700 leading-relaxed">I am a frontent developer with experience in building fast,responsive and beautiful websites using Next.js and TailwindCSS.</p>
    
          </main>
          <Footer/>
        </>
    )
}