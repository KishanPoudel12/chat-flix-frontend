// src/components/Navbar.tsx
import Link from "next/link";
import {FaGithub} from  "react-icons/fa"// Import the GitHub icon

export default function Navbar() {
  return (
    <nav className="bg-yellow-50 text-yellow-900 p-4 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:text-yellow-800 transition">
          ChatFlix
        </Link>

        <div className="flex items-center space-x-4">
          <Link href="/home" className="">
            Home
          </Link>
          <Link href="/about" className="">
            About
          </Link>
          <Link href="/contact" className="">
            Contact
          </Link>

          <a
            href="https://github.com/kishanpoudel12"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-800 transition"
            aria-label="GitHub"
          >
            <FaGithub className="w-10 h-10" /> {/* Use the imported GitHub icon */}
          </a>
        </div>
      </div>
    </nav>
  );
}