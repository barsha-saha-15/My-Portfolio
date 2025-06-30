import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <main className="pt-24 px-6 max-w-4x1 my-auto text-center min-h-screen">
        <Image
          src="/image/picture.jpg"
          alt="picture"
          width={150}
          height={150}
          className="mx-auto rounded-full mb-4"
        />
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-gray-600">
          Hi, I am Barsha- a frontend developer building beautiful web
          experiences with Next.js & Tailwild CSS.
        </p>
      </main>
    </>
  );
}
