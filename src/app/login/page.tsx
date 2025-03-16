'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'  // Use next/navigation for useRouter in Next.js 13

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [error, setError] = useState<string | null>(null) // Error state for login errors
  const [modalOpen, setModalOpen] = useState(false) // State for showing the success modal
  const router = useRouter()  // Initialize useRouter for navigation

  const onSubmit = async (data: any) => {
    try {
      console.log(data)

      // Sending a POST request to the external login API
      const res = await fetch('https://e-commerce-backend-zeta-seven.vercel.app/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      })

      if (res.ok) {
      
        const responseData = await res.json()

 
        localStorage.setItem('token', responseData.token)  // Or use cookies

        setModalOpen(true)
        setTimeout(() => {
          router.push('/')  
        }, 2000) 
      } else {
   
        const errorData = await res.json()
        setError(errorData.message || 'Invalid email or password. Please try again.')
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
      console.log(err)
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-[url('/bg1.jpg')] bg-cover bg-center">
      <div className="bg-white bg-opacity-20 backdrop-blur-lg shadow-lg p-8 rounded-xl w-96 border border-white border-opacity-30">
        <h2 className="text-2xl font-bold text-center text-white mb-6">Login</h2>

        {/* {error && <p className="text-red-500 text-center mb-4">{error}</p>} */}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email Input */}
          <div className="relative">
            <input
              type="email"
              {...register('email', { required: 'Email is required' })}
              className="w-full pl-10 p-2 bg-transparent border border-white rounded-md text-white placeholder-white focus:ring-2 focus:ring-blue-300"
              placeholder="Email Address"
            />
            {/* {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>} */}
          </div>

          {/* Password Input */}
          <div className="relative">
            <input
              type="password"
              {...register('password', {
                required: 'Password is required',
              })}
              className="w-full pl-10 p-2 bg-transparent border border-white rounded-md text-white placeholder-white focus:ring-2 focus:ring-blue-300"
              placeholder="Password"
            />
            {/* {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>} */}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-white bg-opacity-30 text-white p-2 rounded-md hover:bg-white hover:text-blue-600 transition"
          >
            Login
          </button>

          {/* Register Link */}
          <div className="text-center text-white text-sm">
            Don't have an account? <a href="/register" className="text-blue-200 hover:underline">Register</a>
          </div>
        </form>

        {/* Success Modal */}
        {modalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-xl shadow-lg w-80">
              <h2 className="text-2xl font-bold text-center mb-4 text-green-600">Login Successful!</h2>
              <p className="text-center text-gray-700">You will be redirected to the homepage shortly.</p>
              <div className="mt-4 text-center">
                <button
                  onClick={() => setModalOpen(false)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
