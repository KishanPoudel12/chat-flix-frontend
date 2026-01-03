import Link from 'next/link';

export const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-yellow-50">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-yellow-800">Log In</h1>
          <p className="text-gray-500 mt-2">Welcome back! Please log in to your account.</p>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="john_doe"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="••••••••"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-600 text-white py-3 rounded-lg font-semibold hover:bg-yellow-700 focus:ring-2 focus:ring-yellow-400 transition"
          >
            Log In
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account?{' '}
          <Link href="/signup" className="font-medium text-yellow-800 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};