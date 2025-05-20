/* eslint-disable @typescript-eslint/no-explicit-any */
/*eslint-disable*/

"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useCreateProductMutation } from "@/redux/api/poroductApi";
import { Checkbox } from "@headlessui/react";
import { ImageIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import type React from "react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

interface FormData {
  productName: string;
  category: string;
  subCategory: string;
  details: string;
  price: number;
  productCode: string;
  minOrderQuantity: string;
  usage: string;
  brandName: string;
  countryOfOrigin: string;
  productImage: File | null;
  unit: string;
  productKeywords?: string;
  businessType?: string[];
}

const unitOptions = [
  "Ampere",
  "Kilogram",
  "Nos",
  "Piece",
  "Pieces",
  "Tons",
  "Units",
  "Bag",
  "Bags",
  "Barrel",
  "Bottles",
  "Boxes",
  "Bushels",
  "Dozens",
  "Foot",
  "Gallon",
  "Grams",
  "Meter",
  "Kilometer",
  "Kilowatt",
  "Litre",
  "Litres",
  "Long Ton",
  "Metric Ton",
  "Metric Tons",
  "Ounce",
  "Packets",
  "Packs",
  "Pair",
  "Pound",
  "Reams",
  "Rolls",
  "Sets",
  "Sheets",
  "Short Ton",
  "Square Feet",
];

export default function UpdateProduct() {
  const router = useRouter();
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [createProduct] = useCreateProductMutation();

  const { control, handleSubmit, setValue } = useForm<FormData>({
    defaultValues: {
      productName: "",
      category: "",
      subCategory: "",
      details: "",
      price: 0,
      productCode: "",
      minOrderQuantity: "",
      usage: "",
      brandName: "",
      countryOfOrigin: "",
      productImage: null,
      unit: "",
      productKeywords: "",
      businessType: [],
    },
  });

  const handleCheckboxChange = (value: string) => {
    const businessType = (control._formValues.businessType || []).includes(
      value
    )
      ? (control._formValues.businessType || []).filter(
          (type: any) => type !== value
        )
      : [...(control._formValues.businessType || []), value];
    setValue("businessType", businessType);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setValue("productImage", file);

      // Create preview URL
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data: FormData) => {
    console.log(data);
    try {
      const res = await createProduct(data).unwrap();
      if (res?.success === true) {
        toast.success(res.message || "Product Added successfully");
        router.push("/profile/my-product");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div>
          <h2 className="text-lg font-medium mb-4">
            Update Product Information
          </h2>

          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="productName">
                Product Name <span className="text-red-500">*</span>
              </Label>
              <Controller
                name="productName"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="productName"
                    placeholder="Enter product name"
                    required
                  />
                )}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">
                Product Category <span className="text-red-500">*</span>
              </Label>
              <Controller
                name="category"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="category"
                    placeholder="Enter product category"
                    required
                  />
                )}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="subCategory">Product Sub Category</Label>
              <Controller
                name="subCategory"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="subCategory"
                    placeholder="Enter product sub-category"
                  />
                )}
              />
            </div>

            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="details">
                Product Details <span className="text-red-500">*</span>
              </Label>
              <Controller
                name="details"
                control={control}
                render={({ field }) => (
                  <Textarea
                    {...field}
                    id="details"
                    placeholder="Enter product details"
                    rows={4}
                    required
                  />
                )}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="price">Product Price</Label>
              <Controller
                name="price"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="price"
                    placeholder="Enter product price/quantity"
                  />
                )}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="productCode">Product Code/Hs Code</Label>
              <Controller
                name="productCode"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="productCode"
                    placeholder="Enter product code/hs code"
                  />
                )}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="minOrderQuantity">
                Minimum Order Quantity <span className="text-red-500">*</span>
              </Label>
              <Controller
                name="minOrderQuantity"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="minOrderQuantity"
                    placeholder="Enter minimum quantity"
                    required
                  />
                )}
              />
            </div>

            <div className="">
              <Label htmlFor="unit">
                Unit <span className="text-red-500">*</span>
              </Label>
              <Controller
                name="unit"
                control={control}
                render={({ field }) => (
                  <select
                    {...field}
                    id="unit"
                    className="w-full px-3 py-2 border rounded-md"
                  >
                    <option value="">Select Unit</option>
                    {unitOptions.map((unit) => (
                      <option key={unit} value={unit}>
                        {unit}
                      </option>
                    ))}
                  </select>
                )}
              />
            </div>

            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="usage">
                Product Usage <span className="text-red-500">*</span>
              </Label>
              <Controller
                name="usage"
                control={control}
                render={({ field }) => (
                  <Textarea
                    {...field}
                    id="usage"
                    placeholder="Enter product usage"
                    required
                  />
                )}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="brandName">Brand Name</Label>
              <Controller
                name="brandName"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="brandName"
                    placeholder="Enter brand name/company"
                  />
                )}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="countryOfOrigin">
                Country of Origin <span className="text-red-500">*</span>
              </Label>
              <Controller
                name="countryOfOrigin"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="countryOfOrigin"
                    placeholder="Enter product country"
                    required
                  />
                )}
              />
            </div>

            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="productKeywords">Product Keywords</Label>
              <Controller
                name="productKeywords"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="productKeywords"
                    placeholder="Enter product keywords"
                  />
                )}
              />
            </div>

            <div className="space-y-2 sm:col-span-2">
              <Label>Business Type</Label>
              <div className="flex flex-wrap gap-4 mt-2">
                {["Manufacturing", "Supplier", "Exporter", "Wholesaler"].map(
                  (type) => (
                    <div key={type} className="flex items-center space-x-2">
                      <Checkbox
                        id={type}
                        checked={control._formValues.businessType?.includes(
                          type
                        )}
                        onChange={() => handleCheckboxChange(type)}
                      />
                      <Label htmlFor={type} className="font-normal">
                        {type}
                      </Label>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="space-y-2 sm:col-span-2">
              <Label>
                Product Image <span className="text-red-500">*</span>
              </Label>
              <div className="mt-2">
                <div
                  className="border-2 border-dashed rounded-lg p-12 text-center cursor-pointer hover:bg-muted/50 transition-colors"
                  onClick={() =>
                    document.getElementById("productImage")?.click()
                  }
                >
                  {imagePreview ? (
                    <div className="flex justify-center">
                      <Image
                        src={imagePreview || "/placeholder.svg"}
                        alt="Product preview"
                        width={200}
                        height={192}
                        className="object-contain max-h-48"
                      />
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center text-muted-foreground">
                      <ImageIcon className="h-10 w-10 mb-2" />
                      <span className="text-sm">Upload Image</span>
                    </div>
                  )}
                </div>
                <input
                  id="productImage"
                  name="productImage"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center ">
          <Button
            type="submit"
            className="px-10 py-6 text-lg font-roboto font-normal bg-[#00A9EA]"
          >
            Save and Change
          </Button>
        </div>
      </form>
    </div>
  );
}
