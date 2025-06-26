import Header from "@/components/Header"
import Footer from "@/components/Footer"
export default function ContactPage(){
    return(
        <div className="min-h-screen flex flex-col">
       <Header/>
        <main className="flex-1 pt-24 px-6 max-w-xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
            <form className="flex flex-col gap-4">
                <input type="text" placeholder="Barsha Saha" className="p-2 bord rounded"/>
                <input type="email" placeholder="Barshasaha***@gmail.com"/>
                <textarea rows={5} placeholder="Hi,I am interested in working with you. Let's connect!" className="p-2 border rounded"></textarea>
                <button type="submit" className="bg-blue-600 text-white py-2 rounded hover: bg-blue-700">Send

                </button>

            </form>
    
            <div className="mt-8 text-center">
            <a href="https://github.com/barsha-saha-15"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >👉 Visit my GitHub Profile
          </a>
        </div>
        </main>
        <Footer/>
        </div>
    )

}