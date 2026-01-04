"use client";

const Chat = () => {
  const handleLeaveRoom = () => {
    alert("You left the room!");
  };

  return (
    <div className="w-1/3 bg-gray-900 flex flex-col border-l border-gray-800 rounded-2xl">

      {/* Header */}
      <div className="flex justify-between items-start p-4 border-b border-gray-800 bg-gradient-to-r from-yellow-900 to-yellow-800 rounded-t-2xl">
        <div>
          <h2 className="text-lg font-semibold mb-2 text-yellow-300">Room Info</h2>
          <p className="text-yellow-200 mb-1"><strong className="text-yellow-300">Room:</strong> Movie Night</p>
          <p className="text-yellow-200 mb-1"><strong className="text-yellow-300">Host:</strong> Kishan</p>
          <p className="text-yellow-400 text-sm mb-2">Watching Inception tonight</p>
          <p className="text-yellow-100 text-xs">5 / 10 members</p>
        </div>

        <button
          onClick={handleLeaveRoom}
          className="bg-yellow-600 hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-md text-sm shadow-md transition duration-300 ease-in-out"
        >
          Leave Room
        </button>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-yellow-600 scrollbar-track-gray-800">
        <div className="mb-2 hover:bg-gray-800/50 p-1 rounded-md transition">
          <p className="text-sm text-yellow-100"><strong className="text-yellow-300">Kishan:</strong> Hey everyone!</p>
        </div>
        <div className="mb-2 hover:bg-gray-800/50 p-1 rounded-md transition">
          <p className="text-sm text-yellow-100"><strong className="text-yellow-300">Milla:</strong> Ready for the movie?</p>
        </div>
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-800">
        <input
          type="text"
          placeholder="Type a message..."
          className="w-full bg-gray-800 text-yellow-100 placeholder-yellow-400 px-3 py-2 rounded-md border border-yellow-700 shadow-inner focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
        />
      </div>
    </div>
  );
};

export default Chat;