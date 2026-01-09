"use client";
import VideoPlayer from "@/src/components/Video";
import Chat from "@/src/components/Chat";
import MembersList from "@/src/components/members";
import { Room } from "@/src/types/room";
import { useEffect, useRef, useState } from "react";

const Watch = ({ room, isHost }: { room: Room | null; isHost: boolean }) => {
  const socketRef = useRef<WebSocket | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    if (!room) return;
    const token = localStorage.getItem("access_token");
    console.log("TOKEN IN LOCALSTORAGE",token)
    if (!token) {
      console.warn("No access token found, cannot connect WS");
    return;
    }


    const ws = new WebSocket(`wss://chat-flix-kishan.onrender.com/ws/rooms/${room.id}?token=${token}`);
    socketRef.current = ws;

    ws.onopen = () => {
      console.log("WS Connected");
      setIsConnected(true);
    };

    ws.onclose = () => {
      console.log("WS Disconnected");
      setIsConnected(false);
    };

    // ws.onerror = (e) => console.error("WS Error", e);

    return () => {
      ws.close();
      socketRef.current = null;
    };
  }, [room]);

  return (
      <div className="flex  h-screen w-full p-2  gap-4 bg-yellow-900">
    { isConnected && room ? (
      <>
        <div className="w-2/3 h-full flex flex-col justify-between gap-4">

            <div className="flex-shrink-0 min-h-[60%] flex-2">
              <VideoPlayer
                videoUrl={room.video_url ?? null}
                isHost={isHost}
                socket={socketRef.current}
              />
            </div>

            <div className="flex-shrink-0 min-h-[20%] flex1">
              <MembersList
                members={
                  Array.from(new Map((room.members ?? []).map(m => [m.id, m])).values())
                }
              />
            </div>
          </div>

        <Chat socket={socketRef.current} isHost={isHost} room={room} />
      </>
    ) : (
      <div className="text-white p-4">Connecting to room...</div>
    )}
  </div>
  );
};

export default Watch;
