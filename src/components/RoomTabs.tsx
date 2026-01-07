"use client"
import {Room, RoomsResponse} from "./../types/room"
import { useRouter } from "next/navigation";




export default function RoomsTab({rooms, user}:{rooms:RoomsResponse,user:string}) {
  const router= useRouter()
  const roomsData=rooms

  const handleRoomOpen=(room_id:number)=>{
      console.log("room_id loggin in RoomTabs",room_id)
      router.push(  `/watch/${room_id}`)
  }

    const handleDeleteRoom = async (room_id: number) => {
    const token = localStorage.getItem("access_token");
    console.log("token=",token)
    if (!token) return;

    console.log("You Deleting room_id" , room_id)
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/rooms/${room_id}`, {
        method: "DELETE",
        credentials:"include",
        headers: { Authorization: `Bearer ${token}`},
      });

      if (res.ok) {
        alert("Room deleted!");
      } else {
        alert("Failed to delete room");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {roomsData.map((room:Room) => (
        <div
          key={room.id}
          className="flex flex-col justify-between p-4 bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer"
        >
            {room.host_id== Number(user) ?<button onClick={()=>handleDeleteRoom(room.id)} >
                Delete
            </button> :null}<button/>

          <div>
            <h3 className="font-semibold text-lg text-gray-800 mb-1">
              {room.room_name}
            </h3>
            <p className="text-sm text-gray-500 mb-2">
              {room.room_description}
            </p>
            <p className="text-xs text-gray-400 mb-1">
              Host: Kishan
            </p>
            <p className={`text-xs font-medium mb-3 ${
              room.is_live ? "text-red-500" : "text-gray-500"
            }`}>
              {room.is_live ? "🔴 Live" : "⏳ Not Live"} • {room.current_members} / {room.max_members} members
            </p>
          </div>

          <button
            className={`mt-auto px-4 py-2 rounded-md font-medium transition ${
              room.is_live
                ? "bg-red-600 text-yellow-300 hover:bg-red-600"
                : "bg-gray-00 text-gray-900 cursor-not-allowed"
            }`}
            disabled={!room.is_live}
            onClick={() => handleRoomOpen(room.id)}
          >
            {room.is_live ? "Join Room" : "Not Live"}
          </button>
        </div>
      ))}
    </div>
  );
}

