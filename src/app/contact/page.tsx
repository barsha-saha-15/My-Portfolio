import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ContactPage(){
    return(
        <>
        <Header/>
        <main className="pt-24 px-6 max-w-xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
            <form className="flex flex-col gap-4">
                <input type="text" placeholder="Barsha Saha" className="p-2 bord rounded"/>
                <input type="email" placeholder="Barshasaha***@gmail.com"/>
                <textarea rows={5} placeholder="Hi,I am interested in working with you. Let's connect!" className="p-2 border rounded"></textarea>
                <button type="submit" className="bg-blue-600 text-white py-2 rounded hover: bg-blue-700">Send

                </button>


            </form>

        </main>
        <Footer/>
          
        </>
    )

}