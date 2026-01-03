// src/components/Footer.tsx

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center">

        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-xl font-bold text-white">ChatFlix</h2>
          <p className="text-sm mt-1">© 2026 All rights reserved.</p>
        </div>

        <div className="flex gap-6 mb-4 md:mb-0">
          <a href="#" className="hover:text-white transition font-medium">About</a>
          <a href="#" className="hover:text-white transition font-medium">Contact</a>
          <a href="#" className="hover:text-white transition font-medium">Privacy</a>
        </div>

        <div className="flex gap-4">
          {/*<a href="#" className="hover:text-white transition"><FaFacebook size={20} /></a>*/}
          {/*<a href="#" className="hover:text-white transition"><FaTwitter size={20} /></a>*/}
          {/*<a href="#" className="hover:text-white transition"><FaInstagram size={20} /></a>*/}
        </div>

      </div>
    </footer>
  )
}
