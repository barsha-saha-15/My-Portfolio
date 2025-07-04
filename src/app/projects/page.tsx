'use client'

export default function ProjectsPage() {
  const projects = [
    {
      title: 'My Calculator',
      tech: ['Next.js', 'Tailwind CSS'],
      description: 'A simple calculator app built with Next.js and Tailwind CSS, supporting responsive design and clean UI.',
      github: 'https://github.com/yourusername/my-calculator',
    },
    {
      title: 'Todo App',
      tech: ['Next.js', 'Tailwind CSS', 'React Hooks'], // ✅ add tech
      description: 'A fully functional CRUD Todo app using Next.js, Tailwind CSS and React hooks.',
      github: 'https://github.com/barsha-saha-15/My-TodoAPP',
    },
    {
      title: 'Border Security Management System',
      tech: ['Computer Vision', 'Django', 'React', 'Flask'],
      description: 'A real-time surveillance system that uses computer vision to monitor and detect movements near borders.',
      github: 'https://github.com/yourusername/border-security-system',
    },
    {
      title: 'Online Learning App',
      tech: ['React', 'Express.js', 'Tailwind CSS'],
      description: 'An educational platform with a responsive React UI and Express backend. Tailwind used for clean layout.',
      github: 'https://github.com/yourusername/online-learning-app',
    },
    {
      title: 'UIU Social App',
      tech: ['React', 'Express.js', 'Tailwind CSS'],
      description: 'A modern and responsive social media interface built for students, with messaging, posting and notification UI.',
      github: 'https://github.com/yourusername/uiu-social-app',
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 mt-10">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-gray-200 p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>

            {/* ✅ Tech check before join */}
            {project.tech && (
              <p className="text-sm text-gray-500 mb-2">
                {project.tech.join(' • ')}
              </p>
            )}

            <p className="mb-4 text-gray-700">{project.description}</p>
            <div className="flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 underline"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
