"use client";

import {useEffect, useState} from "react";
import RoomsTab from "./../../components/RoomTabs";
import LiveRoomsTab from "./../../components/LiveRoomTabs";
import CreateRoom from "@/src/components/CreateRoom";
import useFetch from "@/src/apis/apis";
import {Room, RoomsResponse} from "@/src/types/room";

import {jwtDecode} from "jwt-decode";
import {useRouter} from "next/navigation";


interface JwtPayload {
  user_id: number;
  exp:number;
}

/*
room structure
{
    "room_name": "string",
    "host_id": 0,
    "room_description": "string",
    "video_url": "string",
    "video_provider": "string",
    "is_live": true,
    "is_private": true,
    "max_members": 0,
    "scheduled_start": "2026-01-04T05:19:46.633Z",
    "id": 0,
    "members": [
      {
        "id": 0,
        "user_id": 0,
        "joined_at": "2026-01-04T05:19:46.633Z"
      }
    ]
  }
 */



type Tab = "rooms" | "live" |"myRooms";

export default function Home() {

  const [userId, setUserId] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<Tab>("rooms");
  const [createRoom, setCreateRoom]=useState<boolean>(false)
    //Edit
  const [isRoomEdit,setIsRoomEdit]=useState<boolean>(false)
  const [roomEdit,setRoomEdit]=useState<number|null>(null)

  const handleRoomEdit=()=>setIsRoomEdit(true)
  const handleRoomEditClose=()=>setIsRoomEdit(false)

  const { data, error, isLoading, fetchData } = useFetch()
  const URL: string = String(process.env.NEXT_PUBLIC_API_URL)


  const handleCreateRoom=()=> setCreateRoom(true)
  const handleCreateRoomClose=()=> setCreateRoom(false)

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      const decoded = jwtDecode<JwtPayload>(token);
      setUserId(decoded.user_id)
    }

  }, []);

  useEffect( ()=>{
    const fetchRooms =async ()=>{
    try{

      const token = localStorage.getItem("access_token");
      const response =await  fetchData(URL+"/rooms/",{
        method: "GET",
         headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          }
      })

      if (response){
        console.log("Response ",response)
      }

      }catch(err){
        console.log(err)
      }
    }
  fetchRooms()
  },[URL])

  const rooms = data?.filter((room:Room)=>!room.is_private) ?? []
  console.log(rooms)
  const live_rooms= data?.filter((room:Room)=> room.is_live && !room.is_private)
  console.log(live_rooms)



    console.log("ROOM TO EDIT", roomEdit)
  const my_rooms= data?.filter((room:Room)=>{
      console.log("room.host_id",room.host_id)
      console.log("userId",userId)
      console.log("== or not ", room.host_id==userId)
      return room.host_id==userId
  })

  const printErr=(er:string|null)=>console.log(er)
  printErr(error)

  return (
      <div className=" bg-yellow-50 px-6  py-4 w-full" >
     <div className="relative mb-6 h-14 flex items-center justify-center">
              {error && <p className="text-red-500 text-sm mb-4 text-center">{ error  }</p>}

              {isLoading && <p className="text-red-500 text-sm mb-4 text-center">{isLoading }</p>}
<div className="flex gap-3  p-1 rounded-full  animate-none">
    <TabButton
      label="Rooms"
      active={activeTab === "rooms"}
      onClick={() => setActiveTab("rooms")}
    />
    <TabButton
      label="Live Rooms"
      active={activeTab === "live"}
      onClick={() => setActiveTab("live")}
    />
    <TabButton
      label="My Rooms"
      active={activeTab === "myRooms"}
      onClick={() => setActiveTab("myRooms")}
    />
  </div>

  <div className="absolute right-0">
    <button
      className="px-4 py-2 bg-yellow-500 text-gray-800 rounded-md font-medium hover:bg-yellow-600 transition "
      onClick={ handleCreateRoom}
    >
      + Create Room
    </button>
  </div>
</div>
      {(createRoom || isRoomEdit) && <CreateRoom handleModalClose={handleCreateRoomClose}  roomEdit={roomEdit ? my_rooms?.find(r => r.id === roomEdit) : undefined} isRoomEdit={isRoomEdit} handleRoomEditClose={handleRoomEditClose}   />}
      {activeTab === "rooms" && <RoomsTab  rooms={rooms}  userId={userId} setRoomEdit={setRoomEdit} handleRoomEdit={handleRoomEdit} />}
      {activeTab === "live" && <RoomsTab rooms={live_rooms}  userId={userId} setRoomEdit={setRoomEdit} handleRoomEdit={handleRoomEdit}/>}
      {activeTab === "myRooms" && <RoomsTab rooms={my_rooms}  userId={userId} setRoomEdit={setRoomEdit} handleRoomEdit={handleRoomEdit} />}
    </div>
  );
}

function TabButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 font-medium border-b-2  rounded-2xl transition  ${
        active
          ? " text-yellow-600"
          : "border-transparent text-gray-500 "
      }`}
    >
      {label}
    </button>
  );
}
