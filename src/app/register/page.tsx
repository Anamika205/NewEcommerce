
'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [modalOpen, setModalOpen] = useState(false)  // State for modal visibility

  const onSubmit = async (data: any) => {
    try {
      console.log(data)

      const res = await fetch('https://e-commerce-backend-zeta-seven.vercel.app/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userDetails: {
            username: data.name,
            email: data.email,
            password: data.password,
            real_password: data.password, // Assuming both passwords are the same
          },
        }),
      })

      if (res.ok) {
        // Display success modal on successful registration
        setModalOpen(true)
      } else {
        setError('Registration failed. Please try again.')
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
    }
  }

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-[url('/bg1.jpg')] bg-cover bg-center">
      <div className="bg-white bg-opacity-20 backdrop-blur-lg shadow-lg p-8 rounded-xl w-96 border border-white border-opacity-30">
        <h2 className="text-2xl font-bold text-center text-white mb-6">Create an Account</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name Input */}
          <div className="relative">
            <input
              type="text"
              {...register('name', { required: 'Name is required' })}
              className="w-full pl-10 p-2 bg-transparent border border-white rounded-md text-white placeholder-white focus:ring-2 focus:ring-blue-300"
              placeholder="Full Name"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          {/* Email Input */}
          <div className="relative">
            <input
              type="email"
              {...register('email', { required: 'Email is required' })}
              className="w-full pl-10 p-2 bg-transparent border border-white rounded-md text-white placeholder-white focus:ring-2 focus:ring-blue-300"
              placeholder="Email Address"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* Password Input */}
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              {...register('password', {
                required: 'Password is required',
                minLength: { value: 6, message: 'Password must be at least 6 characters long' }
              })}
              className="w-full pl-10 pr-10 p-2 bg-transparent border border-white rounded-md text-white placeholder-white focus:ring-2 focus:ring-blue-300"
              placeholder="Password"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-white"
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-white bg-opacity-30 text-white p-2 rounded-md hover:bg-white hover:text-blue-600 transition"
          >
            Register
          </button>

          {/* Login Link */}
          <div className="text-center text-white text-sm">
            Already have an account? <a href="/login" className="text-blue-200 hover:underline">Login</a>
          </div>
        </form>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300 opacity-100">
          <div className="bg-white p-8 rounded-xl shadow-lg w-96 max-w-md transition-transform transform scale-95 hover:scale-100">
            <h2 className="text-2xl font-bold text-center mb-4 text-green-600">Registration Successful!</h2>
            <p className="text-center mb-4">Your account has been created successfully. You can now log in.</p>
            <div className="text-center">
              <button
                onClick={closeModal}
                className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
