"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { EyeIcon, EyeSlashIcon, UserIcon, EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";

interface RegisterForm {
  name: string;
  email: string;
  password: string;
}

export default function RegisterPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [error] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>();

  const onSubmit: SubmitHandler<RegisterForm> = async (data) => {
    console.log("Registering:", data);
    alert("Registration successful!");
    router.push("/login");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[url('/bg1.jpg')] bg-cover bg-center">
      <div className="bg-white bg-opacity-20 backdrop-blur-lg shadow-lg p-8 rounded-xl w-96 border border-white border-opacity-30">
        <h2 className="text-2xl font-bold text-center text-white mb-6">Create an Account</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name Input */}
          <div className="relative">
            <UserIcon className="absolute left-3 top-3 h-5 w-5 text-white" />
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-full pl-10 p-2 bg-transparent border border-white rounded-md text-white placeholder-white focus:ring-2 focus:ring-blue-300"
              placeholder="Full Name"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          {/* Email Input */}
          <div className="relative">
            <EnvelopeIcon className="absolute left-3 top-3 h-5 w-5 text-white" />
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full pl-10 p-2 bg-transparent border border-white rounded-md text-white placeholder-white focus:ring-2 focus:ring-blue-300"
              placeholder="Email Address"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* Password Input */}
          <div className="relative">
            <LockClosedIcon className="absolute left-3 top-3 h-5 w-5 text-white" />
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", { required: "Password is required", minLength: { value: 6, message: "At least 6 characters" } })}
              className="w-full pl-10 pr-10 p-2 bg-transparent border border-white rounded-md text-white placeholder-white focus:ring-2 focus:ring-blue-300"
              placeholder="Password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-white"
            >
              {showPassword ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
            </button>
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
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
    </div>
  );
}
