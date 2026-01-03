import Link from 'next/link';

export const SignUp = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-yellow-50">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-yellow-800">Create Account</h1>
          <p className="text-gray-500 mt-2">Join us and start your journey 🚀</p>
        </div>

        {/* Form */}
        <form className="space-y-6">
          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <input
              type="text"
              placeholder="john_doe"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-yellow-600 text-white py-3 rounded-lg font-semibold hover:bg-yellow-700 focus:ring-2 focus:ring-yellow-400 transition"
          >
            Create Account
          </button>
        </form>

        {/* Divider */}
        <div className="my-8 flex items-center">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="px-3 text-sm text-gray-400">or</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link href="/login" className="font-medium text-yellow-800 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};