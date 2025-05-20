import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SIGNUP_BENEFITS } from "@/app/(auth)/_components/constants";

export function SignupPromo() {
  return (
    <>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
        Not a Member Yet? Sign Up for Free
      </h2>

      <ul className="space-y-4 mb-8">
        {SIGNUP_BENEFITS?.map((benefit, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
            <span className="ml-2 text-gray-700">{benefit}</span>
          </li>
        ))}
      </ul>

      <div className="flex justify-center">
        <Button
          asChild
          variant="outline"
          className="border rounded-md p-6 border-[#00A9EA] text-[#00A9EA] hover:bg-[#00A9EA] hover:text-white"
        >
          <Link href="/join-free" className="px-7">
            Join Free Now
          </Link>
        </Button>
      </div>
    </>
  );
}
