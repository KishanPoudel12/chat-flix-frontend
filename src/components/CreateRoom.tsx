"use client";

export default function CreateRoom({ handleModalClose }: { handleModalClose: () => void }) {
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
              className="w-full px-3 py-2 border rounded-md focus:outline-yellow-500 focus:ring-1 focus:ring-yellow-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Video Provider
            </label>
            <select
              name="video_provider"
              className="w-full px-3 py-2 border rounded-md focus:outline-yellow-500 focus:ring-1 focus:ring-yellow-500"
            >
              <option value="youtube">YouTube</option>
              <option value="vimeo">Vimeo</option>
              <option value="custom">Custom</option>
            </select>
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
              className="w-full px-3 py-2 border rounded-md focus:outline-yellow-500 focus:ring-1 focus:ring-yellow-500"
              required
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="is_private"
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