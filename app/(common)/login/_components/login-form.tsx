"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Divider } from "@/components/ui/divider";
import { Input } from "@/components/ui/input";
import { SocialLoginButtons } from "./social-login-buttons";

import { useLoginUserMutation } from "@/redux/api/authApi";
import { setUser } from "@/redux/slice/userSlice";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { toast } from "sonner";

type Inputs = {
  email: string;
  password: string;
};

type RTKQueryError = {
  data?: { message?: string };
};

type LoginResponse = {
  success: boolean;
  message?: string;
  token?: string;
  user?: { id: string; name: string; email: string }; // Replace with the actual structure of the user object
};

export function LoginForm() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [loginUser, { isLoading }] = useLoginUserMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = async (data: Inputs) => {
    try {
      const res = (await loginUser(data).unwrap()) as LoginResponse;

      if (res?.success) {
        // dispatch(setUser(res));
        dispatch(
          setUser({
            data: {
              accessToken: res.data?.data?.accessToken,
              role: res.data?.data?.role,
            },
          })
        );
        toast.success(res?.message || "Login successful");
        router?.push("/");
      } else {
        toast.error("Login failed");
      }
    } catch (error) {
      const err = error as RTKQueryError;
      console.error("Login error:", err);
      toast.error(err.data?.message || "An error occurred during login");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 mb-2">
          E-mail
        </label>
        <Input
          type="email"
          id="email"
          placeholder="Please enter your e-mail..."
          className="w-full p-4 outline-none"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div className="mb-4 relative">
        <label htmlFor="password" className="block text-gray-700 mb-2">
          Password
        </label>
        <Input
          type={showPassword ? "text" : "password"}
          id="password"
          placeholder="Please enter your password..."
          className="w-full p-4 outline-none"
          {...register("password", { required: "Password is required" })}
        />
        <button
          type="button"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <GoEyeClosed className="w-5 h-5" />
          ) : (
            <GoEye className="w-5 h-5" />
          )}
        </button>
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Checkbox
            id="remember"
            checked={rememberMe}
            onCheckedChange={(checked) => setRememberMe(checked as boolean)}
          />
          <label htmlFor="remember" className="ml-2 block text-gray-700">
            Remember Me
          </label>
        </div>
        <Link
          href="/forgot-password"
          className="text-blue-500 hover:text-blue-700"
        >
          Forgot Password?
        </Link>
      </div>

      <Button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600"
        disabled={isLoading}
      >
        {isLoading ? "Signing in..." : "Sign In"}
      </Button>

      <Divider text="Or" className="my-6" />

      <SocialLoginButtons />

      <div className="mt-8 text-center text-gray-600">
        New User?{" "}
        <Link href="/join-free" className="text-blue-500 hover:text-blue-700">
          Join Free Now
        </Link>
      </div>
    </form>
  );
}
