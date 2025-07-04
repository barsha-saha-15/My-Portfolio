'use client'

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 space-y-6">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>

      <p className="text-lg">
        I'm a <strong>Computer Science graduate</strong>, a passionate <span className="text-blue-600 font-semibold">Full Stack Developer</span>, and a skilled <span className="text-green-600 font-semibold">Software Quality Assurance Engineer</span>.
      </p>

      <p className="text-lg">
        I specialize in building dynamic, scalable, and responsive web applications. My expertise includes:
      </p>

      <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-2">💻 Full Stack Development Skills</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Frontend: <strong>Next.js, React, Tailwind CSS</strong></li>
          <li>Backend: <strong>Express.js, Node.js</strong></li>
          <li>Database: <strong>PostgreSQL, MongoDB</strong></li>
          <li>ORM: <strong>Prisma</strong></li>
          <li>Authentication & APIs: <strong>REST APIs, JWT, Postman</strong></li>
        </ul>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-2">🧪 Software QA & Testing Skills</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Manual & Automated Testing</li>
          <li>API Testing with <strong>Postman & Newman</strong></li>
          <li>Load Testing with <strong>Apache JMeter</strong></li>
          <li>Functional & Non-Functional Testing</li>
          <li>Bug Reporting & Test Case Design</li>
        </ul>
      </div>

      <p className="text-lg">
        I believe in clean code, test-driven development, and building systems that are not only functional but also maintainable and performant. I’m always open to learning new technologies and collaborating on real-world projects.
      </p>
    </div>
  );
}
