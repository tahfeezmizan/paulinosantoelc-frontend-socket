// "use client";
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { useSearchParams } from 'next/navigation';
// import Link from 'next/link';
// import Loader from '@/components/shared/Loader';

// const VerifyEmailPage = () => {
//     const router = useRouter();
//     const searchParams = useSearchParams();
//     const [isLoading, setIsLoading] = useState(true);
//     const [verifyEmail, { isLoading: apiLoading, isSuccess, }] = useVerifyEmailMutation();

//     useEffect(() => {
//         const userId = searchParams.get('userId');
//         const token = searchParams.get('token');

//         if (!userId || !token) {
//             router.push('/signup');
//         } else {
//             verifyEmail({ userId, token });
//         }

//         setIsLoading(false);
//     }, [searchParams, router, verifyEmail]);

//     if (isLoading || apiLoading) {
//         return <Loader text="Verifying your email, please wait..." />
//     }

//     if (isSuccess) {
//         return (
//             <div className="flex flex-col items-center justify-center min-h-[85vh] bg-gray-50 p-5">
//                 <div className="bg-white p-8 rounded-sm border max-w-md w-full text-center">
//                     <div className="flex justify-center mb-5">
//                         <div className="bg-green-100 p-3 rounded-full">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 strokeWidth={2}
//                                 stroke="green"
//                                 className="w-8 h-8"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     d="M5 13l4 4L19 7"
//                                 />
//                             </svg>
//                         </div>
//                     </div>
//                     <h2 className="text-2xl font-semibold mb-3">Your email has been successfully verified!</h2>
//                     <p className="text-gray-600 mb-5">
//                         Your account is now verified. You can proceed to log in and start using your account.
//                     </p>
//                     <p className="text-gray-600">
//                         Go to{' '}
//                         <Link href="/signin" className="text-blue-500 underline">
//                             Log in
//                         </Link>
//                         {' '}to access your account.
//                     </p>
//                 </div>
//             </div>
//         );
//     }

//     return null;
// };

// export default VerifyEmailPage;

/* eslint-disable */
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Loader from "@/components/shared/Loader";
import { useVerifyEmailMutation } from "@/redux/api/authApi";

// Define the type for verificationStatus
interface VerificationStatus {
  success?: boolean;
  error?: boolean;
}

const VerifyEmailPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [verificationStatus, setVerificationStatus] =
    useState<VerificationStatus | null>(null);
  const [verifyEmail] = useVerifyEmailMutation();

  useEffect(() => {
    const verifyEmailAsync = async () => {
      const userId = searchParams.get("userId");
      const token = searchParams.get("token");

      if (!userId || !token) {
        router.push("/signup");
        return;
      }

      try {
        // Use await to call verifyEmail API
        const data = await verifyEmail({ userId, token });
        console.log(data.data)
        setVerificationStatus(data?.data);
      } catch (error: any) {
        // Handle the error with proper type
        setVerificationStatus({ error: true });
      } finally {
        setIsLoading(false);
      }
    };

    verifyEmailAsync();
  }, [searchParams, router]);

  if (isLoading) {
    return <Loader text="Verifying your email, please wait..." />;
  }

  if (verificationStatus?.error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[85vh] bg-gray-50 p-5">
        <div className="bg-white p-8 rounded-sm border max-w-md w-full text-center">
          <h2 className="text-2xl font-semibold mb-3">
            Email Verification Failed
          </h2>
          <p className="text-gray-600 mb-5">
            There was an issue verifying your email. Please try again later or
            contact support.
          </p>
          <p className="text-gray-600">
            Go to{" "}
            <Link href="/signin" className="text-blue-500 underline">
              Log in
            </Link>{" "}
            to access your account.
          </p>
        </div>
      </div>
    );
  }

  if (verificationStatus?.success) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[85vh] bg-gray-50 p-5">
        <div className="bg-white p-8 rounded-sm border max-w-md w-full text-center">
          <div className="flex justify-center mb-5">
            <div className="bg-green-100 p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="green"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
          <h2 className="text-2xl font-semibold mb-3">
            Your email has been successfully verified!
          </h2>
          <p className="text-gray-600 mb-5">
            Your account is now verified. You can proceed to log in and start
            using your account.
          </p>
          <p className="text-gray-600">
            Go to{" "}
            <Link href="/login" className="text-blue-500 underline">
              Log in
            </Link>{" "}
            to access your account.
          </p>
        </div>
      </div>
    );
  }

  return null;
};

export default VerifyEmailPage;
