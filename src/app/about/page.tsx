"use client";

export default function AboutPage() {
  const features = [
    { emoji: "🎥", title: "Synchronized Video Playback", desc: "Watch videos in perfect sync with friends and family." },
    { emoji: "💬", title: "Real-time Chat", desc: "Live chat while watching videos together." },
    { emoji: "⚡", title: "Fast & Modern UI", desc: "Smooth performance powered by Next.js & Tailwind." },
    { emoji: "👥", title: "Public & Private Rooms", desc: "Create rooms for friends or join public watch parties." },
    { emoji: "🕒", title: "Live & Scheduled Rooms", desc: "Host live sessions or schedule them in advance." },
  ];

  const techStack = ["Next.js", "Tailwind CSS", "FastAPI", "WebSockets", "Redis", "PostgreSQL"];

  return (
    <div className="h-screen bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-200 px-6 py-12">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-600 mb-4">
            About ChatFlix 🎬
          </h1>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">
            ChatFlix is a real-time watch-party platform that lets people watch videos together, chat live, and feel connected — no matter where they are.
          </p>
        </div>

        {/* Features */}
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8 mb-16">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transform transition-all duration-300"
            >
              <div className="text-5xl mb-4">{feature.emoji}</div>
              <h3 className="text-xl font-semibold text-yellow-600 mb-2">{feature.title}</h3>
              <p className="text-gray-700 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-yellow-600 mb-6">🛠 Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, idx) => (
              <span
                key={idx}
                className="bg-yellow-100 px-5 py-2 rounded-full font-medium text-gray-700 shadow-sm hover:shadow-md transition transform hover:-translate-y-1"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Vision */}
        {/*<div className="bg-yellow-100 rounded-3xl p-12 shadow-lg text-center hover:shadow-2xl transition transform hover:scale-105">*/}
        {/*  <h2 className="text-3xl font-bold text-yellow-600 mb-6">🚀 Our Vision</h2>*/}
        {/*  <p className="text-gray-700 text-lg max-w-3xl mx-auto">*/}
        {/*    ChatFlix aims to bring people closer through shared experiences. Watching together should feel natural — like sitting in the same room, even when you’re miles apart.*/}
        {/*  </p>*/}
        {/*</div>*/}

      </div>
    </div>
  );
}