/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { SupplierFormData } from "@/types/supplier";
import { Pencil } from "lucide-react";
import { useFormContext } from "react-hook-form";

// This component renders a form section for entering CEO information
export function CeoInformationForm({ ceoInfo }: any) {
  const {
    register,
    formState: { errors },
  } = useFormContext<SupplierFormData>();

  return (
    <div className="bg-white pt-10 rounded-md">
      <h2 className="text-lg font-semibold mb-4">Company CEO Info</h2>

      <div className="font-roboto space-y-6">
        {/* CEO First Name */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <label
              htmlFor="ceoFirstName"
              className="block text-sm font-medium mb-1"
            >
              First Name<span className="text-red-500">*</span>
            </label>
            <input
              id="firstName"
              type="text"
              defaultValue={ceoInfo?.firstName}
              className="w-full px-3 py-2 border rounded-md"
              // Register the input with validation rules
              {...register("ceoInformation.firstName", {
                required: "CEO full name is required",
              })}
            />
            {/* Display error message if first name is invalid */}
            {errors.ceoInformation?.firstName && (
              <p className="mt-1 text-sm text-red-600">
                {errors.ceoInformation.firstName.message}
              </p>
            )}
          </div>
          <div className="w-full">
            <label
              htmlFor="ceoFirstName"
              className="block text-sm font-medium mb-1"
            >
              Last Name<span className="text-red-500">*</span>
            </label>
            <input
              id="lastName"
              type="text"
              defaultValue={ceoInfo?.lastName}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Sabbir"
              // Register the input with validation rules
              {...register("ceoInformation.lastName", {
                required: "CEO full name is required",
              })}
            />
            {/* Display error message if first name is invalid */}
            {errors.ceoInformation?.lastName && (
              <p className="mt-1 text-sm text-red-600">
                {errors.ceoInformation.lastName.message}
              </p>
            )}
          </div>
        </div>

        {/* CEO Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email<span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            defaultValue={ceoInfo?.email}
            className="w-full px-3 py-2 border rounded-md"
            placeholder="info@gmail.com"
            {...register("ceoInformation.email", {
              required: "CEO email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.ceoInformation?.email && (
            <p className="mt-1 text-sm text-red-600">
              {errors.ceoInformation.email.message}
            </p>
          )}
        </div>

        {/* CEO Phone Number */}
        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium mb-1"
          >
            Phone Number<span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              id="phoneNumber"
              type="tel"
              defaultValue={ceoInfo?.phoneNumber}
              className="w-full px-3 py-2 border rounded-md pr-10"
              placeholder="01312345678***"
              {...register("ceoInformation.phoneNumber", {
                required: "CEO phone number is required",
              })}
            />
            {/* Edit icon (visual only, no function here) */}
            <button
              type="button"
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
            >
              <Pencil className="h-4 w-4 text-gray-400" />
            </button>
          </div>
          {errors.ceoInformation?.phoneNumber && (
            <p className="mt-1 text-sm text-red-600">
              {errors.ceoInformation.phoneNumber.message}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="whatsappNumber"
            className="block text-sm font-medium mb-1"
          >
            Whatsapp Number<span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              id="whatsappNumber"
              type="tel"
              defaultValue={ceoInfo?.whatsappNumber}
              className="w-full px-3 py-2 border rounded-md pr-10"
              placeholder="01312345678***"
              {...register("ceoInformation.whatsappNumber", {
                required: "CEO phone number is required",
              })}
            />
            {/* Edit icon (visual only, no function here) */}
            <button
              type="button"
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
            >
              <Pencil className="h-4 w-4 text-gray-400" />
            </button>
          </div>
          {errors.ceoInformation?.whatsappNumber && (
            <p className="mt-1 text-sm text-red-600">
              {errors.ceoInformation.whatsappNumber.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
