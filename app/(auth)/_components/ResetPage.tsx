// "use client";

// import React from "react";
// import { SubmitHandler, useForm } from "react-hook-form";
// import SharedButton from "../shared/SharedButton";
// import Link from "next/link";
// import { LuEye, LuEyeOff } from "react-icons/lu";
// import { useRouter, useSearchParams } from "next/navigation";
// import { useResetPasswordMutation } from "@/redux/api/authApi";
// import { toast } from "sonner";

// type Inputs = {
//   password: string;
//   confirmPassword: string;
// };

// const ResetPage = () => {
//   const [showPassword, setShowPassword] = React.useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
//   const [resetPassword] = useResetPasswordMutation();

//   const searchParams = useSearchParams();
//   const token = searchParams.get("token");
//   const router = useRouter();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     getValues,
//   } = useForm<Inputs>();

//   const onSubmit: SubmitHandler<Inputs> = async ({
//     confirmPassword,
//     ...data
//   }) => {
//     console.log(confirmPassword);

//     if (!token) {
//       console.error("Token not found in URL");
//       return;
//     }
//     try {
//       const res = await resetPassword({
//         data,
//         headers: {
//           Authorization: token,
//         },
//       }).unwrap();
//       //   console.log(res);
//       if (res?.success) {
//         toast.success(res?.message);
//         router.push("/login");
//       }
//     } catch (error) {
//       console.error("Error during password reset:", error);
//     }
//   };

//   return (
//     <div className="mx-auto max-w-[555px]">
//       <div className="text-center grid gap-4 mb-6">
//         <h1 className="font-bold text-[40px] leading-[48px] text-black">
//           Reset Password
//         </h1>
//         <p className="text-base font-medium capitalize leading-5 text-carbon">
//           Join Our 100% Free Creatieve Network
//         </p>
//       </div>
//       <form onSubmit={handleSubmit(onSubmit)} className="grid gap-10">
//         <div className="grid gap-4">
//           <div className="grid gap-3">
//             <label
//               htmlFor="password"
//               className="text-carbon text-base font-medium leading-[25px]"
//             >
//               Password*
//             </label>
//             <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 id="password"
//                 placeholder="Enter your password"
//                 className="w-full px-4 py-[13px] bg-whiteSmoke rounded-lg text-gray text-sm h-12"
//                 {...register("password", {
//                   required: "Password is required",
//                   minLength: {
//                     value: 8,
//                     message: "Password must be at least 8 characters long",
//                   },
//                   pattern: {
//                     value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[@$!%*?&])/,
//                     message:
//                       "Password must include at least one uppercase letter, one lowercase letter, and one special character (@$!%*?&)",
//                   },
//                 })}
//               />
//               <button
//                 type="button"
//                 className="absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 transform"
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? (
//                   <LuEye className="h-4 w-4" />
//                 ) : (
//                   <LuEyeOff className="h-4 w-4" />
//                 )}
//                 <span className="sr-only">
//                   {showPassword ? "Hide password" : "Show password"}
//                 </span>
//               </button>
//             </div>
//             {errors.password && (
//               <p className="text-red-500 text-sm">{errors.password.message}</p>
//             )}
//           </div>

//           <div className="grid gap-3">
//             <label
//               htmlFor="confirmPassword"
//               className="text-carbon text-base font-medium leading-[25px]"
//             >
//               Confirm Password*
//             </label>
//             <div className="relative">
//               <input
//                 type={showConfirmPassword ? "text" : "password"}
//                 id="confirmPassword"
//                 placeholder="Confirm your password"
//                 className="w-full px-4 py-[13px] bg-whiteSmoke rounded-lg text-gray text-sm h-12"
//                 {...register("confirmPassword", {
//                   required: "Confirm password is required",
//                   validate: (value) =>
//                     value === getValues("password") || "Passwords do not match",
//                 })}
//               />
//               <button
//                 type="button"
//                 className="absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 transform"
//                 onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//               >
//                 {showConfirmPassword ? (
//                   <LuEye className="h-4 w-4" />
//                 ) : (
//                   <LuEyeOff className="h-4 w-4" />
//                 )}
//                 <span className="sr-only">
//                   {showConfirmPassword ? "Hide password" : "Show password"}
//                 </span>
//               </button>
//             </div>
//             {errors.confirmPassword && (
//               <p className="text-red-500 text-sm">
//                 {errors.confirmPassword.message}
//               </p>
//             )}
//           </div>
//         </div>
//         <SharedButton type="submit" classes="w-full" text="sign up" />
//         <p className="font-medium leading-5 text-base text-center">
//           Already have an account?{" "}
//           <Link href="/login" className="text-primary font-bold underline">
//             log in
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default ResetPage;
import React from 'react';

const ResetPage = () => {
  return <div></div>;
};

export default ResetPage;