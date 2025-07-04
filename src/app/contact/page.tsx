'use client'

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 bg-gradient-to-r from-white to-blue-100">
      <h1 className="text-4xl font-bold text-blue-800 mb-10 text-center">Get in Touch</h1>

      <div className="flex flex-col sm:flex-row gap-10 text-gray-700 text-lg">
        <a
          href="https://mail.google.com/mail/u/0/#inbox"
          className="flex items-center gap-2 hover:text-blue-600 transition"
          aria-label="Email"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z" />
          </svg>
          Email@gmail.com
        </a>

        <a
          href="https://github.com/barsha-saha-15"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2  hover:text-blue-600 transition"
          aria-label="GitHub"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0C5.37 0 0 5.373 0 12a12 12 0 008.207 11.386c.6.113.793-.258.793-.577v-2.165c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-.89-.609.067-.597.067-.597 1.003.07 1.53 1.048 1.53 1.048.875 1.496 2.295 1.063 2.857.813.088-.634.342-1.063.62-1.308-2.665-.3-5.466-1.332-5.466-5.932 0-1.31.467-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.524 11.524 0 016 0c2.293-1.552 3.3-1.23 3.3-1.23.653 1.653.243 2.873.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.803 5.628-5.475 5.922.43.37.813 1.096.813 2.21v3.282c0 .322.192.694.801.576A12.004 12.004 0 0024 12c0-6.627-5.373-12-12-12z" />
          </svg>
          GitHub
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/barsha-saha-1a81932a2/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-blue-700 transition"
          aria-label="LinkedIn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19 0h-14C2.2 0 0 2.2 0 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zM7 20H4V9h3v11zm-1.5-12.3c-1 0-1.8-.8-1.8-1.8S4.5 4.1 5.5 4.1s1.8.8 1.8 1.8S6.5 7.7 5.5 7.7zM20 20h-3v-5.5c0-1.4-.5-2.3-1.8-2.3s-2.1 1-2.1 2.3V20h-3V9h3v1.5c.6-.9 1.7-1.5 3-1.5 2.2 0 3.9 1.4 3.9 4.4V20z" />
          </svg>
          LinkedIn
        </a>
      </div>
    </div>
  )
}
