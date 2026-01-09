"use client";

import {useEffect, useState} from "react";
import useFetch from "@/src/apis/apis";
import {CreateRoomPayload} from "@/src/types/room";
export default function CreateRoom({  isGuest,handleModalClose ,handleRoomEditClose , roomEdit ,isRoomEdit,refreshRooms}: { isGuest:boolean ,handleModalClose: () => void,roomEdit:any,isRoomEdit:boolean,handleRoomEditClose:()=>void ,refreshRooms:()=>void}) {
  const { error, isLoading, fetchData} = useFetch()
  const URL: string = String(process.env.NEXT_PUBLIC_API_URL)

  const [createRoom, setCreateRoom]=useState<CreateRoomPayload>({
    room_name:"",
    room_description:"",
    video_url:"",
    video_provider:"Youtube",
    is_private:false,
    max_members:""
  })


  const endpoint = isRoomEdit ? `/rooms/${roomEdit?.id}` : "/rooms/create";
  const method = isRoomEdit ? "PUT" : "POST";

    const handleCreateRoom = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    setCreateRoom((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : name === "max_members"
          ? Number(value)
          : value,
    }));
  };


  const handleCreateRoomSubmit=async (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
     const body = isRoomEdit
    ? JSON.stringify({
        room_name: createRoom.room_name,
        room_description: createRoom.room_description,
        video_url: createRoom.video_url,
        video_provider: createRoom.video_provider,
        is_private: createRoom.is_private,
        max_members: createRoom.max_members,
      })
    : (() => {
        const fd = new FormData();
        fd.append("room_name", createRoom.room_name);
        fd.append("room_description", createRoom.room_description || "");
        fd.append("video_url", createRoom.video_url);
        fd.append("video_provider", createRoom.video_provider);
        fd.append("is_private", String(createRoom.is_private));
        fd.append("max_members", String(createRoom.max_members));
        console.log("FormData",fd)
        return fd;
      })();


      try{
        const token:string|null= localStorage.getItem("access_token")||""
        console.log(token)
        const response =await fetchData(URL + endpoint, {
              method,
              headers: isRoomEdit
                ? {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                  }
                : {
                    Authorization: `Bearer ${token}`,
                  },
              body,
            });

        console.log("URL HITTING HERE +>>"+URL+"/rooms/create")

        if (response){
          console.log("Response ",response)
          refreshRooms();
        }

      }catch (err){
        console.log("Error",err)
      }
      handleModalClose()
      handleRoomEditClose()
    }


    useEffect(() => {
    if (isRoomEdit && roomEdit) {
      setCreateRoom({
        room_name: roomEdit.room_name,
        room_description: roomEdit.room_description,
        video_url: roomEdit.video_url,
        video_provider: roomEdit.video_provider || "Youtube",
        is_private: roomEdit.is_private,
        max_members: roomEdit.max_members,
      });
    } else if (!isRoomEdit) {
      setCreateRoom({
        room_name: "",
        room_description: "",
        video_url: "",
        video_provider: "Youtube",
        is_private: false,
        max_members: "",
      });
    }
  }, [isRoomEdit, roomEdit]);
  return (
      isGuest ?
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
  <div className="w-[90%] max-w-md rounded-xl bg-white dark:bg-gray-900 shadow-xl p-8 text-center">

    <div className="flex justify-center mb-5">
      <div className="h-14 w-14 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-600 text-2xl">
        🚫
      </div>
    </div>

    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
      Action Restricted
    </h2>

    <p className="mt-3  text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
      Guests are not allowed to create rooms. <br/>
      Please sign up or log in as a non-guest user to unlock this feature.
    </p>

    <div className=" flex justify-center gap-4">
      <button
        onClick={handleModalClose}
        className="px-4 py-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
      >
        Close
      </button>

      <button
        onClick={() => (window.location.href = "/signup")}
        className="px-4 py-2 rounded-md bg-yellow-500 text-white hover:bg-yellow-600 transition"
      >
        Sign Up
      </button>
    </div>
  </div>
</div>

          :
    <div className="fixed  min-h-screen min-w-screen inset-0 bg-yellow-450 bg-opacity-900 flex items-center justify-center z-50 backdrop-filter backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg w-full max-w-md p-6">
        <h2 className="text-xl font-semibold text-yellow-600 mb-4">Create Room</h2>
        <form className="flex flex-col gap-3" onSubmit={handleCreateRoomSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Room Name *
            </label>
            <input
              type="text"
              name="room_name"
              onChange={handleCreateRoom}
              value={createRoom.room_name}
              className="w-full px-3 py-2 border rounded-md focus:outline-yellow-500 focus:ring-1 focus:ring-yellow-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Description
            </label>
            <textarea
              name="room_description"
              onChange={handleCreateRoom}
              value={createRoom.room_description}

              className="w-full px-3 py-2 border rounded-md focus:outline-yellow-500 focus:ring-1 focus:ring-yellow-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Video URL *
            </label>
            <input
              type="text"
              name="video_url"
              value={createRoom.video_url}
              onChange={handleCreateRoom}
              className="w-full px-3 py-2 border rounded-md focus:outline-yellow-500 focus:ring-1 focus:ring-yellow-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Video Provider
            </label>

            <input
              type="text"
              name="video_provider"
              value={"Youtube"}
              onChange={handleCreateRoom}
              disabled={true}
              className="w-full px-3 py-2 border rounded-md focus:outline-yellow-500 focus:ring-1 focus:ring-yellow-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Max Members *
            </label>
            <input
              type="number"
              name="max_members"
              min={0}
              max={100}
              onChange={handleCreateRoom}
              value={createRoom.max_members}
              className="w-full px-3 py-2 border rounded-md focus:outline-yellow-500 focus:ring-1 focus:ring-yellow-500"
              required
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="is_private"
              checked={createRoom.is_private}
              onChange={handleCreateRoom}
              className="w-4 h-4 text-yellow-500 border-gray-300 rounded"
            />
            <label className="text-sm text-gray-700 dark:text-gray-200">
              Private Room
            </label>
          </div>
            {error && (
              <p className="mt-2 text-sm text-red-600 font-medium">
                Error: {error}
              </p>
            )}
          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition"
              onClick={ ()=>{
                handleModalClose()
                handleRoomEditClose()
            }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition"
            >
              { !isRoomEdit &&isLoading ? "Creating" : isRoomEdit  ? "Update"  : isRoomEdit &&isLoading ? "Updating" :  "Create" }
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}