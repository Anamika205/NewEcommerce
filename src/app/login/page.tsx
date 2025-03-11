"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { EyeIcon, EyeSlashIcon, EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";

interface LoginForm {
  email: string;
  password: string;
}

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const onSubmit: SubmitHandler<LoginForm> = async (data) => {
    console.log("Logging in:", data);
    // Simulated login logic (Replace with actual API call)
    if (data.email === "admin@example.com" && data.password === "password") {
      router.push("/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[url('/bg.jpg')] bg-cover bg-center">
      <div className="bg-white bg-opacity-20 backdrop-blur-lg shadow-lg p-8 rounded-xl w-96 border border-white border-opacity-30">
        <h2 className="text-2xl font-bold text-center text-white mb-6">Welcome Back</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
              {...register("password", { required: "Password is required" })}
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
            Login
          </button>

          {/* Forgot Password & Signup Links */}
          <div className="text-center text-white text-sm">
            <a href="#" className="hover:underline">Forgot password?</a> | 
            <a href="/register" className="text-blue-200 hover:underline"> Sign up</a>
          </div>
        </form>
      </div>
    </div>
  );
}
