'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center px-4 py-12">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Left Side Text */}
        <div className="space-y-4">
          <p className="text-orange-500 text-sm font-medium uppercase tracking-wide">Hi, I'm Barsha Saha</p>
          <h4 className="text-xl md:text-2xl font-semibold text-gray-800 leading-relaxed">
            A passionate <span className="text-blue-600 font-bold">Software Engineer</span> with a background in
            <span className="text-blue-600 font-bold"> Computer Science</span> and expertise in
            <span className="text-green-600 font-bold"> Software Quality Assurance (SQA)</span>.
          </h4>

          <p className="text-gray-600 text-sm leading-relaxed">
            I enjoy building clean, user-friendly, and responsive applications. I focus on both functionality and aesthetics to ensure a smooth user experience.
          </p>

          <div className="flex gap-3 pt-1">
             <Link href="/contact">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-4 py-2 rounded shadow-sm transition">
              Contact Me
            </button>
             </Link>
            
           
          </div>
        </div>

        {/* Right Side Bigger Round Image */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/image/picture.jpg"
            alt="Profile picture"
            width={280}   // ⬅️ increased from 220
            height={280}  // ⬅️ increased from 220
            className="rounded-full border-4 border-gray-200 shadow-md object-cover"
          />
        </div>
      </div>
    </div>
  );
}
