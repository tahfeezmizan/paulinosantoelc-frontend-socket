/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { useCreateBuyRequirementMutation } from "@/redux/api/buyRequirementApi";
import { useGetAllProductsQuery } from "@/redux/api/poroductApi";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

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

type FormData = {
  productName: string;
  productCategory: string;
  details: string;
  fileUploadRequired: string;
  image?: FileList;
  memberType: string;
  firstName?: string;
  lastName?: string;
  country?: string;
  agreeTerms: boolean;
  unit: string;
  quantity: string;
  packagingterms: string;
  shippingterms: string;
  otherField?: string; // Added otherField to the type definition
};

export default function CreateBuyRequirement() {
  const {
    register,
    handleSubmit,
    watch,

    formState: { errors },
  } = useForm<FormData>();
  const router = useRouter();
  const { data: products } = useGetAllProductsQuery({});
  const [isLoading, setIsLoading] = useState(false);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [createBuyRequirement] = useCreateBuyRequirementMutation();
  // const watchFileUpload = watch("fileUploadRequired");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newFiles = Array.from(files);
    setImageFiles(newFiles);

    // Create preview URLs
    const newPreviews = newFiles.map((file) => URL.createObjectURL(file));
    setImagePreviews(newPreviews);
  };

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    console.log("Form submitted:", data);

    try {
      const formData = new FormData();

      formData.append("productName", data.productName);
      formData.append("productCategory", data.productCategory);
      formData.append("details", data.details);

      imageFiles.forEach((file) => {
        formData.append("image", file);
      });

      // for (let [key, value] of Array.from(formData.entries())) {
      //   return console.log(key, value);
      // }

      const res = await createBuyRequirement(formData).unwrap();

      if (res?.success === true) {
        toast.success(res.message);
        router.push("/profile");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-2">
        Post Your Buy Requirement
      </h1>
      <p className="text-center text-gray-600 mb-6">
        Tell us about your buy requirement & receive quotes from top suppliers
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Product Name */}
        <div>
          <label className="block font-medium">Product Name</label>
          <input
            {...register("productName", { required: true })}
            placeholder="Enter product name"
            className="w-full border border-gray-300 p-2 rounded"
          />
          {errors.productName && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* Category */}
        <div>
          <label className="block font-medium">Product Category</label>
          <select
            {...register("productCategory", { required: true })}
            className="w-full border border-gray-300 p-2 rounded"
          >
            <option value="">Select Category</option>
            {products?.map((product: any) => (
              <option key={product?.id} value={product?.category}>
                {product?.category}
              </option>
            ))}
          </select>
          {errors.productCategory && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium">Description</label>
          <textarea
            {...register("details", { required: true })}
            placeholder="Describe your buying requirement"
            rows={5}
            className="w-full border border-gray-300 p-2 rounded"
          />
          {errors.details && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        <div>
          <label className="block font-medium">Quantity</label>
          <input
            {...register("quantity", { required: true })}
            placeholder="Buy Quantity"
            className="w-full border border-gray-300 p-2 rounded"
          />
          {errors.quantity && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="unit"
            className="block mb-1 font-medium text-gray-700"
          >
            Unit <span className="text-red-500">*</span>
          </label>
          <select
            id="unit"
            {...register("unit", { required: "Unit is required" })}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Unit</option>
            {unitOptions.map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>
          {errors.unit && (
            <p className="text-red-500 text-sm mt-1">{errors.unit.message}</p>
          )}
        </div>

        <div>
          <label className="block font-medium">Packaging Terms</label>
          <input
            {...register("packagingterms", { required: true })}
            placeholder="Packaging Terms"
            className="w-full border border-gray-300 p-2 rounded"
          />
          {errors.packagingterms && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>
        <div>
          <label className="block font-medium">Shipping Terms</label>
          <input
            {...register("shippingterms", { required: true })}
            placeholder="Shipping Terms"
            className="w-full border border-gray-300 p-2 rounded"
          />
          {errors.shippingterms && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* Product Image Upload */}
        <div className="space-y-4">
          <label className="block font-medium mb-2">Have Product Image?</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                value="yes"
                {...register("fileUploadRequired")}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="no"
                {...register("fileUploadRequired")}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
              />
              <span className="ml-2">No</span>
            </label>
          </div>

          {watch("fileUploadRequired") === "yes" && (
            <div className="mt-4">
              <div
                className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => document.getElementById("image-upload")?.click()}
              >
                <div className="flex flex-col items-center justify-center text-gray-400">
                  <svg
                    className="w-10 h-10 mb-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-sm">
                    Click to upload or drag and drop
                  </span>
                  <span className="text-xs mt-1">PNG, JPG, GIF (Max. 5MB)</span>
                </div>
                <input
                  id="image-upload"
                  type="file"
                  onChange={handleImageChange}
                  className="hidden"
                  accept="image/png, image/jpeg, image/gif"
                  multiple
                />
              </div>

              {/* Image Previews */}
              {imagePreviews.length > 0 && (
                <div className="grid grid-cols-3 gap-4 mt-4">
                  {imagePreviews.map((preview, index) => (
                    <div key={index} className="relative">
                      <Image
                        src={preview}
                        alt={`Preview ${index}`}
                        className="w-full h-32 object-cover rounded"
                        width={320}
                        height={213}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full py-2 rounded text-white bg-blue-600 hover:bg-blue-700 ${
            isLoading ? "opacity-75 cursor-not-allowed" : ""
          }`}
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "Submit Your Requirement"}
        </button>
      </form>
    </div>
  );
}
