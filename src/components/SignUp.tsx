"use client"
import Link from 'next/link';
import {useState} from "react";
import useFetch from "./../apis/apis"
import {useRouter} from "next/navigation"
export const SignUp = () => {
  const router =useRouter()
  const URL: string = String(process.env.NEXT_PUBLIC_API_URL)
  const { error, isLoading, fetchData} = useFetch()

  const [signUp, setSignUpData] = useState({
    username: "",
    email: "",
    password: "",
    image: null as File | null
  })

  const handleSignUp = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value, files} = e.target;
    if (name === "image" && files) {
      setSignUpData({...signUp, image: files[0]})
    } else {
      setSignUpData({
        ...signUp,
        [name]: value
      })
    }
  }

    const handleSignUpSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      console.log(signUp)
      try {
        const formdata = new FormData()
        formdata.append("username", signUp.username)
        formdata.append("email", signUp.email)
        formdata.append("password", signUp.password)
        if (signUp.image) {
          formdata.append("image", signUp.image)
        }


        const response = await fetchData(URL + "/users/create", {
          method: "POST",
          body: formdata,
        })
        console.log(URL + "/users/create")

        if (response) {
          console.log("Signup successful:", response);
          localStorage.setItem("access_token", response.access_token)
          router.push("/home")
        }
      } catch (err) {
        console.log("Signup ", err)
      }
    }
    const printerr=(error:any)=> console.log(error)


    return (
        <div className="flex items-center justify-center min-h-screen bg-yellow-50">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-yellow-800">Create Account</h1>
              <p className="text-gray-500 mt-2">Join us and start your journey </p>
            </div>
            {error && <p className="text-red-500 text-sm mb-4 text-center">{error }</p>}

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                <input
                    type="text"
                    placeholder="john_doe"
                    name="username"
                    onChange={handleSignUp}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition"
                    required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
                <input
                    type="email"
                    placeholder="you@example.com"
                    name="email"
                    onChange={handleSignUp}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition"
                    required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                    type="password"
                    placeholder="••••••••"
                    name="password"
                    onChange={handleSignUp}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition"
                    required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Profile Picture</label>
                <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleSignUp}
                    className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-yellow-100 file:text-yellow-700 hover:file:bg-yellow-200 transition"
                    required
                />
              </div>

              <button
                  type="submit"
                  className="w-full bg-yellow-600 text-white py-3 rounded-lg font-semibold hover:bg-yellow-700 focus:ring-2 focus:ring-yellow-400 transition"
                  onClick={handleSignUpSubmit}
              >
                {isLoading ? "Loading" : "Create Account"}
              </button>

              <button
                  type="submit"
                  className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-950 focus:ring-2 focus:ring-yellow-400 transition"
              >
                Create Guest Account
              </button>
            </form>

            <div className="my-8 flex items-center">
              <div className="flex-1 h-px bg-gray-200"/>
              <span className="px-3 text-sm text-gray-400">or</span>
              <div className="flex-1 h-px bg-gray-200"/>
            </div>

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