export default function ProfileTab() {
  return (
    <div className="max-w-md bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">My Profile</h2>

      <div className="space-y-2 text-sm">
        <p>
          <span className="font-medium">Username:</span> kishan
        </p>
        <p>
          <span className="font-medium">Email:</span> kishan@example.com
        </p>
        <p>
          <span className="font-medium">Joined:</span> Jan 2026
        </p>
      </div>

      <button className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
        Edit Profile
      </button>
    </div>
  );
}
