'use client'

export default function PublicationsPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 space-y-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-black mt-4">
        Research & Publications
      </h1>

      <div className="bg-white border border-gray-300 rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">
          Bangla Sign Language Detection using Deep Learning
        </h2>

        <p className="text-gray-700 mb-2 italic">
          Published in: <strong>Springer Proceedings of ICTIS 2025</strong> <br />
          Expected Publication: <span className="text-blue-600">October 2025</span>
        </p>

        <p className="text-gray-700 mb-4">
          This research focuses on developing an intelligent system capable of recognizing Bangla Sign Language using deep learning and computer vision techniques.
          Our aim was to bridge the communication gap for the hearing-impaired community in Bangladesh.
        </p>

        <p className="text-gray-700 mb-4">
          The project was completed as a part of a collaborative team effort, where we worked together on data collection, model training, and real-time implementation. 
          Our model achieved high accuracy in detecting and classifying hand gestures based on Bangla sign language.
        </p>

        <div className="bg-gray-50 p-4 rounded-md border border-gray-100">
          <p className="text-sm text-gray-700">
            🔍 <strong>Keywords:</strong> Deep Learning, Computer Vision, Accessibility, Sign Language, Bangla, Team Project
          </p>
        </div>

        {/* Optional DOI link */}
        {/* <a href="https://springer.com/publication-link" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-blue-600 underline">
          View Publication
        </a> */}
      </div>
    </div>
  );
}
