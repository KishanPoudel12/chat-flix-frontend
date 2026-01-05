import  {RoomsResponse} from "./../types/room"




export default function RoomsTab({rooms}:{rooms:RoomsResponse}) {
  const roomsData=rooms

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {roomsData.map((room) => (
        <div
          key={room.room_name}
          className="flex flex-col justify-between p-4 bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer"
        >
          {/* Room Info */}
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
            onClick={() => console.log(`Joining room: ${room.room_name}`)}
          >
            {room.is_live ? "Join Room" : "Not Live"}
          </button>
        </div>
      ))}
    </div>
  );
}

