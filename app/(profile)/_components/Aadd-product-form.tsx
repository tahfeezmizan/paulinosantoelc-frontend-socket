"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useCreateProductMutation } from "@/redux/api/poroductApi";
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
  businessType: string[];
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

const businessTypeOptions = [
  "Manufacturing",
  "Supplier",
  "Exporter",
  "Trading Company",
  "Wholesaler",
];

export default function AddProductForm() {
  const router = useRouter();
  const [createProduct] = useCreateProductMutation();
  const [selectedBusinessTypes, setSelectedBusinessTypes] = useState<string[]>(
    []
  );

  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [imageFiles, setImageFiles] = useState<File[]>([]);

  const { control, handleSubmit, setValue } = useForm<FormData>({
    defaultValues: {
      businessType: [],
    },
  });
  // const formData = useWatch({ control });

  const handleBusinessTypeChange = (type: string) => {
    setSelectedBusinessTypes((prev) => {
      const updatedTypes = prev.includes(type)
        ? prev.filter((t) => t !== type)
        : [...prev, type];
      setValue("businessType", updatedTypes);
      return updatedTypes;
    });
  };
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newFiles = Array.from(files);
    setImageFiles((prev) => [...prev, ...newFiles]);

    // Create preview URLs
    const newPreviews = newFiles.map((file) => URL.createObjectURL(file));
    setImagePreviews((prev) => [...prev, ...newPreviews]);
  };

  const removeImage = (index: number) => {
    setImageFiles((prev) => prev.filter((_, i) => i !== index));
    setImagePreviews((prev) => prev.filter((_, i) => i !== index));
    URL.revokeObjectURL(imagePreviews[index]);
  };

  const onSubmit = async (data: FormData) => {
    try {
      const formData = new FormData();
      const { ...productData } = data;

      // Append all image files
      imageFiles.forEach((file) => {
        formData.append("images", file);
      });

      formData.append("bodyData", JSON.stringify(productData));

      // Rest of your submission logic remains the same
      const res = await createProduct(formData).unwrap();

      if (res?.success) {
        toast.success(res.message || "Product Added successfully");
        router.push("/profile/my-product");
      }
    } catch (error) {
      console.error("❌ Error submitting form:", error);
      toast.error("Failed to add product. Please try again.");
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div>
          <div className="mb-10">
            <h2 className="text-3xl font-hanken font-medium leading-10">
              Add New Product
            </h2>
            <p className="text-base font-roboto leading-10 text-gray-600">
              Please provide detailed information about your product. It helps
              you to reach potential buyer&apos;s easily.
            </p>
          </div>

          <h2 className="text-3xl font-medium mb-4">Product Information</h2>
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="productName" className="text-base font-roboto">
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
              <Label htmlFor="category" className="text-base font-roboto">
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
              <Label htmlFor="subCategory" className="text-base font-roboto">
                Product Sub Category
              </Label>
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
              <Label htmlFor="details" className="text-base font-roboto">
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
              <Label htmlFor="price" className="text-base font-roboto">
                Product Price
              </Label>
              <Controller
                name="price"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="price"
                    placeholder="Enter product price/quantity"
                    type="number"
                    onChange={(e) => {
                      const value = parseFloat(e.target.value);
                      field.onChange(isNaN(value) ? 0 : value);
                      console.log(isNaN(value) ? 0 : value);
                    }}
                  />
                )}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="productCode" className="text-base font-roboto">
                Product Code/Hs Code
              </Label>
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
              <Label
                htmlFor="minOrderQuantity"
                className="text-base font-roboto"
              >
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
              <Label htmlFor="unit" className="text-base font-roboto">
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
              <Label htmlFor="usage" className="text-base font-roboto">
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
              <Label htmlFor="brandName" className="text-base font-roboto">
                Brand Name
              </Label>
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
              <Label
                htmlFor="countryOfOrigin"
                className="text-base font-roboto"
              >
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
              <Label
                htmlFor="productKeywords"
                className="text-base font-roboto"
              >
                Product Keywords
              </Label>
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

            <div className="mb-6">
              <p className="block text-gray-800 font-medium mb-2">
                Business Type<span className="text-red-500">*</span>
              </p>
              <div className="flex flex-wrap gap-6">
                {businessTypeOptions.map((type) => (
                  <label key={type} className="flex items-center">
                    <input
                      type="checkbox"
                      name="businessTypes" // Add name attribute
                      value={type} // Add value attribute
                      checked={selectedBusinessTypes.includes(type)}
                      onChange={() => handleBusinessTypeChange(type)}
                      className="w-5 h-5 mr-2 border-gray-300 rounded"
                    />
                    {type}
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2 sm:col-span-2">
              <Label>
                Product Images <span className="text-red-500">*</span>
              </Label>
              <div className="mt-2">
                <div
                  className="border-2 border-dashed rounded-lg p-12 text-center cursor-pointer hover:bg-muted/50 transition-colors"
                  onClick={() =>
                    document.getElementById("productImages")?.click()
                  }
                >
                  {imagePreviews.length > 0 ? (
                    <div className="grid grid-cols-3 gap-4">
                      {imagePreviews.map((preview, index) => (
                        <div key={index} className="relative">
                          <Image
                            src={preview}
                            alt={`Product preview ${index + 1}`}
                            width={200}
                            height={192}
                            className="object-contain max-h-48"
                          />
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              removeImage(index);
                            }}
                            className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center text-muted-foreground">
                      <ImageIcon className="h-10 w-10 mb-2" />
                      <span className="text-sm">Upload Images</span>
                    </div>
                  )}
                </div>
                <input
                  id="productImages"
                  name="productImages"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                  multiple
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
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
