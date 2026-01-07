"use client";
import { useEffect, useState, useRef } from "react";

interface ChatProps {
  socket: WebSocket | null;
  isHost: boolean;
}

interface Message {
  sender: string;
  text: string;
  system?: boolean;
  join?: boolean;
  leave?: boolean;
}

const Chat = ({ socket, isHost }: ChatProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!socket) return;

    const handleMessage = (e: MessageEvent) => {
      const data = JSON.parse(e.data);

      if (data.type === "chat") {
        setMessages((prev) => [...prev, { sender: data.sender , text: data.message }]);
      }

      if (data.type === "system") {
        setMessages((prev) => [...prev, { sender: "System", text: data.message, system: true }]);
      }

      if (data.type === "video_action" && data.chat_msg) {
        setMessages((prev) => [...prev, {sender:"HOST",text: data.chat_msg, system: true}])
      }

      if (data.type === "leave") {
        setMessages((prev) => [...prev, { sender: data.user, text: "left the room", leave: true }]);
      }
    };

    socket.addEventListener("message", handleMessage);
    return () => socket.removeEventListener("message", handleMessage);
  }, [socket]);

  // ---------------- Send message ----------------
  const handleSend = () => {
    if (!socket || !inputRef.current) return;
    const text = inputRef.current.value.trim();
    if (!text) return;

    socket.send(JSON.stringify({ type: "chat", message: text }));
    // setMessages((prev) => [...prev, { sender: "You", text }]);
    inputRef.current.value = "";
  };

  const handleLeaveRoom = () => {
    alert("You left the room!");
    socket?.close();
  };

  return (
    <div className="w-1/3 bg-gray-900 flex flex-col border-l border-gray-800 rounded-2xl">
      <div className="flex justify-between items-start p-4 border-b border-gray-800 bg-gradient-to-r from-yellow-900 to-yellow-800 rounded-t-2xl">
        <div>
          <h2 className="text-lg font-semibold mb-2 text-yellow-300">Room Info</h2>
          <p className="text-yellow-200 mb-1"><strong className="text-yellow-300">Room:</strong> Movie Night</p>
          <p className="text-yellow-200 mb-1"><strong className="text-yellow-300">Host:</strong> Kishan</p>
          <p className="text-yellow-400 text-sm mb-2">Watching Inception tonight</p>
        </div>
        <button
          onClick={handleLeaveRoom}
          className="bg-yellow-600 hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-md text-sm shadow-md transition duration-300 ease-in-out"
        >
          Leave Room
        </button>
      </div>
    <div className="flex-1 p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-yellow-600 scrollbar-track-gray-800">
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`mb-2 p-1 rounded-md transition ${
            msg.system ? "text-yellow-300 font-bold" : msg.join ? "text-green-400" : msg.leave ? "text-red-400" : ""
          }`}
        >
          <p className={`text-sm ${msg.system ? "font-bold" : "font-light"}`}>
            {msg.sender && (
              <strong className="text-yellow-300 font-bold mr-1">{msg.sender}:</strong>
            )}
            <span className={`${msg.system ? "text-yellow-300 font-bold" : "text-yellow-100 font-light"}`}>
              {msg.text}
            </span>
          </p>
        </div>
      ))}
    </div>

      <div className="p-4 border-t border-gray-800 flex gap-2">
        <input
          ref={inputRef}
          type="text"
          placeholder="Type a message..."
          className="flex-1 bg-gray-800 text-yellow-100 placeholder-yellow-400 px-3 py-2 rounded-md border border-yellow-700 shadow-inner focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-yellow-600 hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-md shadow-md transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
