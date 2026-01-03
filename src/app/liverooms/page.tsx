import Link from 'next/link';

const LiveRooms = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-yellow-50">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-yellow-800 text-center mb-8">Live Rooms</h1>
        <div className="space-y-4">
          <Link href="/watch/room1" className="block bg-yellow-600 text-white py-3 px-4 rounded-lg hover:bg-yellow-700 transition">
            Room 1
          </Link>
          <Link href="/watch/room2" className="block bg-yellow-600 text-white py-3 px-4 rounded-lg hover:bg-yellow-700 transition">
            Room 2
          </Link>
          <Link href="/watch/room3" className="block bg-yellow-600 text-white py-3 px-4 rounded-lg hover:bg-yellow-700 transition">
            Room 3
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LiveRooms;