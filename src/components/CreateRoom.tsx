"use client";

import {useState} from "react";
import useFetch from "@/src/apis/apis";
import {CreateRoomPayload} from "@/src/types/room";
export default function CreateRoom({ handleModalClose }: { handleModalClose: () => void }) {
  const { error, isLoading, fetchData} = useFetch()
  const URL: string = String(process.env.NEXT_PUBLIC_API_URL)

  const [createRoom, setCreateRoom]=useState<CreateRoomPayload>({
    room_name:"",
    room_description:"",
    video_url:"",
    video_provider:"Youtube",
    is_private:false,
    max_members:0
  })

  const handleCreateRoom=(e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement| HTMLSelectElement>)=>
      setCreateRoom({...createRoom,[e.target.name]:e.target.value})

  const handleCreateRoomSubmit=async (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()

    const formdata= new FormData()
    formdata.append("room_name",createRoom.room_name)
    formdata.append("room_description",createRoom.room_description)
    formdata.append("video_url",createRoom.video_url)
    formdata.append("video_provider",createRoom.video_provider)
    formdata.append("is_private", createRoom.is_private? "true" :"false")
    formdata.append("max_members", createRoom.max_members.toString())

    try{
      const token:string|null= localStorage.getItem("access_token")||""
      console.log(token)
      const response =await  fetchData(URL+"/rooms/create",{
        method: "POST",
        body:formdata,
         headers: {
          Authorization: `Bearer ${token}`
          }
      })
      console.log("URL HITTING HERE +>>"+URL+"/rooms/create")

      if (response){
        console.log("Response ",response)
      }

    }catch (err){
      console.log("Error",err)
    }

  }

  return (
    <div className="fixed  min-h-screen min-w-screen inset-0 bg-yellow-450 bg-opacity-900 flex items-center justify-center z-50 backdrop-filter backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg w-full max-w-md p-6">
        <h2 className="text-xl font-semibold text-yellow-600 mb-4">Create Room</h2>
        <form className="flex flex-col gap-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Room Name *
            </label>
            <input
              type="text"
              name="room_name"
              onChange={handleCreateRoom}
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
              min={1}
              max={100}
              onChange={handleCreateRoom}

              className="w-full px-3 py-2 border rounded-md focus:outline-yellow-500 focus:ring-1 focus:ring-yellow-500"
              required
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="is_private"
              onChange={handleCreateRoom}
              className="w-4 h-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500"
            />
            <label className="text-sm text-gray-700 dark:text-gray-200">
              Private Room
            </label>
          </div>

          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition"
              onClick={handleModalClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={handleCreateRoomSubmit}
              className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}