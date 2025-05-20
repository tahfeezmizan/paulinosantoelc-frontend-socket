/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useCreateBuyRequirementMutation } from "@/redux/api/buyRequirementApi";
import { useGetAllProductsQuery } from "@/redux/api/poroductApi";
import { ProductTypes } from "@/types/productTypes";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

export default function BuyerPageBanner() {
  const { register, handleSubmit, control } = useForm<FormData>();
  const { data: products } = useGetAllProductsQuery({});
  const [createBuyRequirement] = useCreateBuyRequirementMutation();

  interface FormData {
    productName: string;
    productCategory: string;
    details: string;
  }

  const onSubmit = async (data: FormData) => {
    console.log(data);
    try {
      const res = await createBuyRequirement(data).unwrap();
      if (res?.success === true) {
        toast.success("Requirement submitted successfully");
      }
    } catch (err: string | any) {
      toast.error(err.message || "Error submitting form");
    }
  };

  return (
    <div className=" bg-white py-8">
      <main className="container">
        {/* Header */}
        <h1 className="text-center text-2xl hanken-text mb-6 md:text-3xl">
          Save Time! Receive Rapid Responses
        </h1>

        <div className="grid gap-8 md:grid-cols-[300px,1fr] items-start">
          {/* Left Sidebar */}
          <div className="bg-bannerBackground text-white p-6 rounded-lg h-fit">
            <h2 className="font-medium mb-6">Request Quotes Instantly</h2>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-[#006181]">1</span>
                </div>
                <span>Submit RFQ</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-[#006181]">2</span>
                </div>
                <span>Compare Quotes</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-[#006181]">3</span>
                </div>
                <span>Contact Supplier</span>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Input
              placeholder="Enter Product name..."
              className="bg-white text-textGray"
              {...register("productName")}
            />

            {/* Controlled Select Field */}
            <Controller
              name="productCategory"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {products?.map((product: ProductTypes) => (
                      <SelectItem
                        key={product.category}
                        value={product.category.toLowerCase()}
                      >
                        {product.category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />

            <Textarea
              placeholder="Describe your buying requirement including specifications, sizes etc."
              className="min-h-[200px] bg-white text-textGray"
              {...register("details")}
            />

            <div className="text-center">
              <Button type="submit" className="bg-[#00A3E0] hover:bg-[#0089BD]">
                Post Your Buy Requirement
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
