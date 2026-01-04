"use client";

export default function Contacts() {
  const contacts = [
    { emoji: "🐙", title: "GitHub", link: "https://github.com/kishanpoudel12", description: "Check out my projects and repos." },
    { emoji: "💼", title: "LinkedIn", link: "https://www.linkedin.com/in/kishan-poudel-92aa78305/", description: "Connect professionally and see my experience." },
    { emoji: "📧", title: "Email", link: "mailto:kishanpoudel563@gmail.com", description: "Send me a message directly." },
    { emoji: "📞", title: "Phone", link: "+917477479770", description: "Call or text me anytime." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-200 px-6 py-12">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-600 mb-4 animate-pulse">
            Connect with Me 📬
          </h1>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">
            Feel free to reach out to me on my social media profiles or via email and phone. I'm always happy to connect!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="flex flex-row justify-center  align-center  gap-4">
          {contacts.map((contact, idx) => (
            <a
              key={idx}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-3xl p-6 shadow-lg flex flex-col items-center text-center hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
            >
              <div className="text-5xl mb-4">{contact.emoji}</div>
              <h3 className="text-xl font-bold text-yellow-600 mb-2">{contact.title}</h3>
              {contact.title=="Phone" ? <p>+977 7477479770</p>: null}
              {contact.title=="Email" ? <p>kishanpoudel563@gmail.com</p>: null}
              <p className="text-gray-700 text-sm">{contact.description}</p>
            </a>
          ))}
        </div>

      </div>
    </div>
  );
}
