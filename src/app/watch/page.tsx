"use-client";

const Watch = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-yellow-50">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-yellow-800 text-center mb-8">Watch Room</h1>
        <div className="flex">
          <div className="w-2/3 pr-4">
            <iframe
              width="100%"
              height="360"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="w-1/3 pl-4">
            <h2 className="text-2xl font-bold text-yellow-800 mb-4">Chat</h2>
            <div className="h-96 overflow-y-auto border border-gray-300 rounded-lg p-4">
              {/* Chat messages will go here */}
              <p className="text-gray-500">No messages yet...</p>
            </div>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Type a message..."
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition"
              />
              <button
                className="w-full bg-yellow-600 text-white py-2 rounded-lg font-semibold hover:bg-yellow-700 focus:ring-2 focus:ring-yellow-400 transition mt-2"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watch;