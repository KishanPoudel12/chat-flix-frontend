"use client";
import { useState, useEffect } from "react";
import Watch from "./Watch";
import { Room } from "@/src/types/room";
import {useParams} from "next/navigation";
import {useRouter} from "next/navigation";
interface Props {
  params: { room_id: string };
}

export default function WatchPageClient() {
  const router = useRouter()
  const params = useParams();
  const roomId = Number(params?.roomId);
  console.log("RoomID", roomId)
  const [room, setRoom] = useState<Room | null>(null);
  const [isHost, setIsHost] = useState<boolean>(false);


  useEffect(() => {

    if (!roomId || isNaN(roomId)) {
      console.error("Invalid RoomID:", params?.roomId);
      router.replace("/");
    }
    const token = localStorage.getItem("access_token");


    const fetchData = async () => {
      const [roomRes, roleRes] = await Promise.all([
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/rooms/${roomId}`, {
          headers: {Authorization: `Bearer ${token}`},
        }),
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/rooms/${roomId}/role`, {
          headers: {Authorization: `Bearer ${token}`},
        }),
      ]);

      const roomData = await roomRes.json();
      const roleData = await roleRes.json();
      console.log("Role Data ", roleData)
      setRoom(roomData);
      setIsHost(roleData.is_host);
    };
    fetchData();
  }, [roomId, params?.roomId, router]);

  if (!room) return <div>Loading...</div>;

  return (

      <div className="h-screen w-screen ">
        <Watch room={room} isHost={isHost}/>
      </div>

  )
}