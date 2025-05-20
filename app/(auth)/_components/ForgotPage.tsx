"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as z from "zod";

// Form validation schema
const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type FormValues = z.infer<typeof formSchema>;

export default function ForgotPasswordForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    // console.log("Submitted Data:", data);
    try {
      alert(`Reset code sent to ${data.email}`);
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send reset code. Please try again.");
    }
  };

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 py-10">
      <div className="mx-auto w-full max-w-md sm:max-w-lg lg:max-w-3xl rounded-lg bg-[#F1FAFE] px-6 sm:px-10 py-10 sm:py-14">
        <div className="mb-6 text-center">
          <h1 className="mb-2 text-2xl sm:text-3xl hanken-text font-semibold text-gray-900">
            Forgot Account & Password?
          </h1>
          <p className="text-sm text-gray-600">
            Please enter your registered email in Go4worldbusiness.com below
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">E-mail</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Please enter your e-mail..."
                      className="h-12 border-gray-200 bg-white"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="text-sm">
              <span className="text-gray-600">Remember the password? </span>
              <Link href="/login" className="text-blue-500 hover:underline">
                Sign in
              </Link>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#00a2e8] py-6 text-white hover:bg-[#0090d1]"
              // disabled={isLoading}
            >
              {/* {isLoading ? "Sending..." : "Send Code"} */}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
