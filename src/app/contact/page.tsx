"use client";
import { useState } from "react";
import { ReactFormState } from "react-dom/client";

export default function ContactPage() {
  const [name,setName]= useState("");
  const [email,setEmail]= useState("");
  const [massage,setMassage]= useState("");

  const handleSubmit = (e: React.FormEvent) =>{
    e.preventDefault();
    console.log("From submitted:", {name,email,massage});
    alert("Massage Sent!");
    setName("");
    setEmail("");
    setMassage("");
  };

  return (
    <div className="pt-24 px-6 max-w-4x1 my-auto text-center min-h-screen">
      <main className="flex-1 px-6 max-w-xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <label className="text-left">Name</label>
          <input
            type="text"
            placeholder="Barsha Saha"
            value={name??""}
            onChange={(e)=> setName(e.target.value)}
            className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <label className="text-left">Email</label>

          <input
            type="email"
            placeholder="Barshasaha***@gmail.com"
            value={email?? ""}
            onChange={(e)=> setEmail(e.target.value)}
            className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <label className="text-left">Message</label>
          <textarea
            rows={5}
            placeholder="Hi,I am interested in working with you. Let's connect!"
            value={massage??""}
            onChange={(e)=>setMassage(e.target.value)}
            className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Send
          </button>
        </form>

        <div className="mt-8 text-center">
          <a
            href="https://github.com/barsha-saha-15"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            👉 Visit my GitHub Profile
          </a>
        </div>
      </main>
    </div>
  );
}
