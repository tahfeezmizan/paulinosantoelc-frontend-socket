/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { useFormContext } from "react-hook-form";
import { SupplierFormData } from "@/types/supplier";

const businessCategories = [
  { value: "", label: "Select category" },
  { value: "textiles", label: "Textiles" },
  { value: "electronics", label: "Electronics" },
  { value: "category2", label: "Category2" },
  { value: "food", label: "Food & Beverage" },
];

const businessSubCategories = [
  {
    name: "textiles",
    subCategories: [
      { value: "apparel", label: "Apparel" },
      { value: "fabrics", label: "Fabrics" },
    ],
  },
  {
    name: "electronics",
    subCategories: [
      { value: "computers", label: "Computers" },
      { value: "phones", label: "Mobile Phones" },
    ],
  },
  {
    name: "food",
    subCategories: [
      { value: "beverages", label: "Beverages" },
      { value: "snacks", label: "Snacks" },
    ],
  },
];

export function AboutBusinessInformationForm({ companyData }: any) {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext<SupplierFormData>();
  
  const selectedCategory = watch("businessInformation.category");

  return (
    <div className="bg-white pt-10 rounded-md mb-8 space-y-6 font-roboto">
      <h2 className="text-3xl font-semibold mb-6">About Your Business</h2>

      {/* Company Address */}
      <div>
        <label
          htmlFor="companyAddress"
          className="block text-base font-medium mb-1"
        >
          Company Address<span className="text-red-500">*</span>
        </label>
        <input
          id="companyAddress"
          type="text"
          defaultValue={companyData?.companyAddress}
          className="w-full px-3 py-2 border rounded-md"
          placeholder="Enter Company Address..."
          {...register("businessInformation.address", {
            required: "Company address is required",
          })}
        />
        {errors.businessInformation?.address && (
          <p className="mt-1 text-sm text-red-600">
            {errors.businessInformation.address.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="district" className="block text-base font-medium mb-1">
          District
        </label>
        <input
          id="district"
          type="text"
          defaultValue={companyData?.district}
          className="w-full px-3 py-2 border rounded-md"
          placeholder="Enter District..."
          {...register("businessInformation.district")}
        />
      </div>

      {/* Zip Code */}
      <div>
        <label htmlFor="zipCode" className="block text-base font-medium mb-1">
          Zip / Postal Code<span className="text-red-500">*</span>
        </label>
        <input
          id="zipCode"
          type="text"
          defaultValue={companyData?.zipCode}
          className="w-full px-3 py-2 border rounded-md"
          placeholder="Zip / Postal Code"
          {...register("businessInformation.zipCode", {
            required: "Zip code is required",
          })}
        />
        {errors.businessInformation?.zipCode && (
          <p className="mt-1 text-sm text-red-600">
            {errors.businessInformation.zipCode.message}
          </p>
        )}
      </div>

      {/* Business Type (Checkboxes) */}
      <div className="mb-6">
        <label className="block text-base font-medium mb-2">
          Business Type<span className="text-red-500">*</span>
        </label>
        <div className="flex flex-wrap gap-6">
          {[
            "manufacturing",
            "supplier",
            "exporter",
            "tradingCompany",
            "wholesaler",
          ].map((type) => (
            <label key={type} className="inline-flex items-center">
              <input
                type="checkbox"
                value={type}
                defaultChecked={companyData?.businessType}
                className="h-4 w-4 text-blue-600 rounded border-gray-300"
                {...register("businessInformation.businessType", {
                  required: "Select at least one business type",
                })}
              />
              <span className="ml-2 text-sm capitalize">
                {type.replace(/([A-Z])/g, " $1")}
              </span>
            </label>
          ))}
        </div>
        {errors.businessInformation?.businessType && (
          <p className="mt-1 text-sm text-red-600">
            {errors.businessInformation.businessType.message}
          </p>
        )}
      </div>

      {/* Category and Subcategory */}
      <div className="space-y-6 ">
        {/* Business Category */}
        <div>
          <label
            htmlFor="businessCategory"
            className="block text-base font-medium mb-1"
          >
            Business Category<span className="text-red-500">*</span>
          </label>
          <select
            id="businessCategory"
            defaultValue={companyData?.businessCategory}
            className="w-full px-3 py-2 border rounded-md"
            {...register("businessInformation.category", {
              required: "Business category is required",
            })}
          >
            {businessCategories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
          {errors.businessInformation?.category && (
            <p className="mt-1 text-sm text-red-600">
              {errors.businessInformation.category.message}
            </p>
          )}
        </div>

        {/* Subcategory (dependent on selected category) */}
        <div>
          <label
            htmlFor="subCategory"
            className="block text-base font-medium mb-1"
          >
            Sub-Category
          </label>
          <select
            id="subCategory"
            className="w-full px-3 py-2 border rounded-md"
            disabled={!selectedCategory}
            defaultValue={companyData?.subCategory || ""}
            {...register("businessInformation.subCategory")}
          >
            <option value="">Select subcategory</option>
            {businessSubCategories
              .find((cat) => cat.name === selectedCategory)
              ?.subCategories.map((sub) => (
                <option key={sub.value} value={sub.value}>
                  {sub.label}
                </option>
              ))}
          </select>
        </div>
      </div>

      {/* About Company */}
      <div className="mb-6">
        <label
          htmlFor="aboutCompany"
          className="block text-base w-80 font-medium mb-1"
        >
          About Company<span className="text-red-500">*</span>
        </label>
        <textarea
          id="aboutCompany"
          rows={5}
          defaultValue={companyData?.about}
          className="w-full px-3 py-2 border rounded-md"
          placeholder="Company Details - Maximum 10,000 Character"
          {...register("businessInformation.about", {
            required: "Company description is required",
            maxLength: {
              value: 10000,
              message: "Description cannot exceed 10,000 characters",
            },
          })}
        />
        {errors.businessInformation?.about && (
          <p className="mt-1 text-sm text-red-600">
            {errors.businessInformation.about.message}
          </p>
        )}
      </div>

      {/* Main Products */}
      <div className="mb-6">
        <label
          htmlFor="mainProducts"
          className="block text-base font-medium mb-1"
        >
          Main Products<span className="text-red-500">*</span>
        </label>
        <input
          id="mainProducts"
          type="text"
          defaultValue={companyData?.mainProducts}
          className="w-full px-3 py-2 border rounded-md"
          placeholder="Main Product..."
          {...register("businessInformation.mainProducts", {
            required: "Main products are required",
          })}
        />
        {errors.businessInformation?.mainProducts && (
          <p className="mt-1 text-sm text-red-600">
            {errors.businessInformation.mainProducts.message}
          </p>
        )}
      </div>

      {/* After Sales Service */}
      {/* <div className="mb-6">
        <label className="block text-base font-medium mb-2">
          After-Sales Service & Support<span className="text-red-500">*</span>
        </label>
        <div className="flex gap-6">
          {["yes", "no"].map((option) => (
            <label key={option} className="inline-flex items-center">
              <input
                type="radio"
                value={option}
                className="h-4 w-4 text-blue-600 border-gray-300"
                {...register("businessInformation.afterSalesService", {
                  required: "Please select an option",
                })}
              />
              <span className="ml-2 text-sm capitalize">{option}</span>
            </label>
          ))}
        </div>
        {errors.businessInformation?.afterSalesService && (
          <p className="mt-1 text-sm text-red-600">
            {errors.businessInformation.afterSalesService.message}
          </p>
        )}
      </div> */}

      {/* Quality Control Policy */}
      <div>
        <label className="block text-base font-medium mb-2">
          Have a Quality Control Policy<span className="text-red-500">*</span>
        </label>
        <div className="flex gap-6">
          {["yes", "no"].map((option) => (
            <label key={option} className="inline-flex items-center">
              <input
                type="radio"
                value={option}
                className="h-4 w-4 text-blue-600 border-gray-300"
                {...register("businessInformation.controlPolicy", {
                  required: "Please select an option",
                })}
              />
              <span className="ml-2 text-sm capitalize">{option}</span>
            </label>
          ))}
        </div>
        {errors.businessInformation?.controlPolicy && (
          <p className="mt-1 text-sm text-red-600">
            {errors.businessInformation.controlPolicy.message}
          </p>
        )}
      </div>
    </div>
  );
}
