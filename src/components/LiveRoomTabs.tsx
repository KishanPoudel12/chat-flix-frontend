import Room from "./../types/room"

const roomsData: Room[] = [
  {
    room_name: "Movie Night",
    host_id: 1,
    host_name: "kishan",
    room_description: "Watching Inception tonight",
    video_url: "https://youtu.be/Yo123abc",
    video_provider: "youtube",
    is_live: true,
    is_private: false,
    max_members: 10,
    active_members: 5,
    scheduled_start: "2026-01-04T05:19:46.633Z",
  },
  {
    room_name: "Chill Vibes",
    host_id: 2,
    host_name: "milla",
    room_description: "Relaxing music session",
    video_url: "https://youtu.be/Mu789lmn",
    video_provider: "youtube",
    is_live: false,
    is_private: false,
    max_members: 20,
    active_members: 0,
    scheduled_start: "2026-01-06T20:00:00.000Z",
  },
];


export default function RoomsTab() {
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
              Host: {room.host_name}
            </p>
            <p className={`text-xs font-medium mb-3 ${
              room.is_live ? "text-red-500" : "text-gray-500"
            }`}>
              {room.is_live ? "🔴 Live" : "⏳ Scheduled"} • {room.active_members} / {room.max_members} members
            </p>
          </div>

          {/* Join Button */}
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

