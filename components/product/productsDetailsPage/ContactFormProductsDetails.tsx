/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import type React from "react";
import { useForm } from "react-hook-form";
import { Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAddContactMutation } from "@/redux/api/contactApi";
import { useSelector } from "react-redux";
import { RootState } from "@/types/EditAccountType";
import { toast } from "sonner";
import { useGetAllProductsQuery } from "@/redux/api/poroductApi";
import { useParams } from "next/navigation";

interface FormData {
  subject: string;
  message: string;
}

export default function ContactFormProductsDetails() {
  const param = useParams();
  const { register, handleSubmit, reset } = useForm<FormData>();
  const user = useSelector((state: RootState) => state?.user?.user?.user);
  const { data: products } = useGetAllProductsQuery({});
  const [addContact, { isLoading }] = useAddContactMutation();
  const product = products?.find((product: any) => product?.id === param?.id);

  console.log("Login User",user.id);
  // console.log("Product Creator", product?.userId);

  const onSubmit = async (data: FormData) => {
    try {
      const newData = {
        ...data,
        receiverId: product?.userId,
      };

      const res = await addContact(newData).unwrap();
      if (res?.success) {
        toast.success(res?.message);
        // alert(res?.message);
      }
      reset();
    } catch (error) {
      toast.error("Something went wrong");
      console.log("Error:", error)
    }
  };

  return (
    <Card className="">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-semibold text-center hanken-text">
          Contact Supplier About This Product
        </CardTitle>
        <p className="text-center text-gray-600 text-sm mt-1">
          Contact Supplier for product pricing, customization or other inquiries
        </p>
      </CardHeader>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Enter Product name..."
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("subject", { required: true })}
            />
          </div>
          <div>
            <textarea
              rows={6}
              placeholder="Describe your buying requirement including specification, sizes etc..."
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("message", { required: true })}
            />
          </div>
          <div className="flex justify-center pt-2">
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-2 rounded-md flex items-center gap-2"
            >
              Sent Message
              <Mail className="w-5 h-5" />
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
