// src/app/page.tsx
import Link from "next/link";
import Navbar from "@/src/components/Navbar";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-yellow-50 font-sans">
      <Navbar />

      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 md:px-20">
        <h1 className="text-6xl md:text-7xl font-extrabold text-yellow-800 mb-6">
          Welcome to ChatFlix
        </h1>
        <p className="text-gray-700 text-lg md:text-xl mb-8 max-w-2xl">
          Stream YouTube videos live with friends, create private rooms, and watch together in real-time.
        </p>
         <div className="flex justify-center space-x-4">
            <Link
              href="/signup"
              className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-lg transition"
            >
              Sign Up
            </Link>
            <Link
              href="/login"
              className="bg-transparent hover:bg-yellow-200 text-yellow-800 font-bold py-3 px-6 rounded-lg transition"
            >
              Log In
            </Link>
          </div>
      </main>

      <section className="bg-yellow-100 py-10">
        <div className="container mx-auto px-4 md:px-20">
          <h2 className="text-4xl font-bold text-center text-yellow-800 mb-6">
            Why Choose ChatFlix?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Live Streaming</h3>
              <p className="text-gray-700">
                Enjoy seamless live streaming with your friends without any interruptions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Private Rooms</h3>
              <p className="text-gray-700">
                Create private rooms to watch your favorite content with selected friends.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Real-Time Interaction</h3>
              <p className="text-gray-700">
                Engage in real-time chat and reactions while watching videos together.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-yellow-50 py-10">
        <div className="container mx-auto px-4 md:px-20">
          <h2 className="text-4xl font-bold text-center text-yellow-800 mb-6">
            Join the Community
          </h2>
          <p className="text-gray-700 text-center mb-8">
            Be part of a growing community of video enthusiasts who love to watch and chat together.
          </p>
          <div className="flex justify-center space-x-4">
            <p className="text-center text-gray-500 mt-8">
              Made with <span className="text-red-500 inline-block amimate-ping">❤️</span> by Kishan Poudel
            </p>
          </div>
        </div>
      </section>

      {/*<Footer />*/}
    </div>
  );
}