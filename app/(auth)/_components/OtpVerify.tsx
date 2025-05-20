// "use client";

// import { Input } from "@/components/ui/input";
// import { IFormInput } from "@/lib/types/types";
// import { useVerifyUserMutation } from "@/redux/api/authApi";
// import { setUser } from "@/redux/slice/userSlice";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import React, { useRef, useState } from "react";
// import { SubmitHandler, useForm } from "react-hook-form";
// import { useDispatch } from "react-redux";
// import { toast } from "sonner";
// import success from "@/assets/success.png";

// const OtpVerify = () => {
//   const [code, setCode] = useState<string[]>(Array(4).fill("")); // Change to 4 digits
//   const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
//   const [verifyUser, { isLoading }] = useVerifyUserMutation();
//   const dispatch = useDispatch();
//   const router = useRouter();

//   const {
//     handleSubmit,
//     formState: { errors },
//   } = useForm<IFormInput>();

//   const onSubmit: SubmitHandler<IFormInput> = async () => {
//     const verificationCode = code.join("");
//     if (!verificationCode || verificationCode.length !== 4) {
//       // Change validation to 4 digits
//       toast("Please enter a valid 4-digit verification code.");
//       return;
//     }
//     const email = localStorage.getItem("email");
//     const filteredData = {
//       otp: parseInt(verificationCode),
//       email: email,
//     };
//     console.log("Form Data:", filteredData);
//     try {
//       const res = await verifyUser(filteredData).unwrap();
//       console.log(res);
//       if (res?.success === true) {
//         dispatch(setUser(res));
//         toast(res?.message);
//         // localStorage.removeItem("email");
//         router.push("/login");
//       }
//     } catch (error) {
//       console.error(error);
//       toast("Verification failed. Please try again.");
//     }
//   };

//   const handleChange = (index: number, value: string) => {
//     if (value.length <= 1 && /^[0-9]*$/.test(value)) {
//       const newCode = [...code];
//       newCode[index] = value;
//       setCode(newCode);

//       // Auto-focus next input
//       if (value && index < 3) {
//         // Change to focus next input for 4 digits
//         inputRefs.current[index + 1]?.focus();
//       }
//     }
//   };

//   const handleKeyDown = (
//     index: number,
//     e: React.KeyboardEvent<HTMLInputElement>
//   ) => {
//     if (e.key === "Backspace" && !code[index] && index > 0) {
//       inputRefs.current[index - 1]?.focus();
//     }
//   };

//   const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
//     e.preventDefault();
//     const pastedData = e.clipboardData.getData("text").slice(0, 4); // Limit paste to 4 digits
//     if (/^[0-9]*$/.test(pastedData)) {
//       const newCode = [...code];
//       pastedData.split("").forEach((char, index) => {
//         if (index < 4) newCode[index] = char; // Handle up to 4 digits
//       });
//       setCode(newCode);
//       // Focus last input or next empty input
//       const lastFilledIndex = newCode.findIndex((char) => !char);
//       const focusIndex = lastFilledIndex === -1 ? 3 : lastFilledIndex; // Focus last input or next empty one
//       inputRefs.current[focusIndex]?.focus();
//     }
//   };

//   return (
//     <div className="text-center grid gap-8">
//       <Image
//         className="w-20 h-20 mx-auto"
//         width={1000}
//         height={1000}
//         src={success}
//         alt="Forget Password"
//       />
//       <div className="grid gap-2">
//         <h1 className="font-outfit text-3xl lg:text-4xl font-semibold leading-[43px] text-gray800 tracking-[0.72px]">
//           Verify Email
//         </h1>
//         <p className="text-gray600 leading-[25px] capitalize text-base">
//           Please check your email for a 4-Digit Verification Code
//         </p>
//       </div>
//       <div className="flex items-center gap-6 mx-auto">
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//           <div className="text-center space-x-4 flex justify-center items-center">
//             {code.map((digit, index) => (
//               <Input
//                 key={index}
//                 type="text"
//                 inputMode="numeric"
//                 maxLength={1}
//                 value={digit}
//                 onChange={(e) => handleChange(index, e.target.value)}
//                 onKeyDown={(e) => handleKeyDown(index, e)}
//                 onPaste={handlePaste}
//                 ref={(el) => {
//                   inputRefs.current[index] = el;
//                 }}
//                 className="w-12 h-12 text-center text-lg font-semibold border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
//               />
//             ))}
//             {errors.otp && (
//               <p className="text-red-500 text-sm">{errors.otp.message}</p>
//             )}
//           </div>

//           <button
//             disabled={isLoading}
//             type="submit"
//             className="w-full bg-black text-white rounded-lg py-[13px] text-lg font-medium leading-7 mt-8"
//           >
//             {isLoading ? "Loading..." : "Submit"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default OtpVerify;
import React from 'react';

const OtpVerify = () => {
  return <div></div>;
};

export default OtpVerify;