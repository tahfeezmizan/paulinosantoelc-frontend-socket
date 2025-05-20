/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { useFormContext } from "react-hook-form";
import type { SupplierFormData } from "@/types/supplier";

export function OwnerInformationForm({ ownerInfo }: any) {
  // Get the register function and error messages from the form context
  const {
    register,
    formState: { errors },
  } = useFormContext<SupplierFormData>();

  return (
    <div className="bg-white pt-10 rounded-md mb-8">
      <h2 className="text-lg font-semibold mb-4">Company Owner Info</h2>

      <div className="font-roboto space-y-6">
        {/* Owner Name Field */}
        <div>
          <label
            htmlFor="ownerName"
            className="block text-base font-medium mb-1"
          >
            Name<span className="text-red-500">*</span>
          </label>
          <input
            id="ownerName"
            type="text"
            defaultValue={ownerInfo?.ownerName}
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Please enter your ..."
            // Register the input field with validation rule
            {...register("ownerInformation.ownerName", {
              required: "Owner name is required",
            })}
          />
          {/* Show error if name is invalid */}
          {errors.ownerInformation?.ownerName && (
            <p className="mt-1 text-sm text-red-600">
              {errors.ownerInformation.ownerName.message}
            </p>
          )}
        </div>

        {/* Owner Email Field */}
        <div>
          <label
            htmlFor="ownerEmail"
            className="block text-base font-medium mb-1"
          >
            Email<span className="text-red-500">*</span>
          </label>
          <input
            id="ownerEmail"
            type="email"
            defaultValue={ownerInfo?.ownerEmail}
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Please enter your email..."
            {...register("ownerInformation.ownerEmail", {
              required: "Owner ownerEmail is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {/* Show error if email is invalid */}
          {errors.ownerInformation?.ownerEmail && (
            <p className="mt-1 text-sm text-red-600">
              {errors.ownerInformation.ownerEmail.message}
            </p>
          )}
        </div>

        {/* Owner Phone Field */}
        <div>
          <label
            htmlFor="ownerPhone"
            className="block text-base font-medium mb-1"
          >
            Phone Number<span className="text-red-500">*</span>
          </label>
          <input
            id="ownerPhone"
            type="tel"
            defaultValue={ownerInfo?.ownerPhone}
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Please enter your owner phone number..."
            {...register("ownerInformation.ownerPhone", {
              required: "Owner phone number is required",
            })}
          />
          {/* Show error if phone number is invalid */}
          {errors.ownerInformation?.ownerPhone && (
            <p className="mt-1 text-sm text-red-600">
              {errors.ownerInformation.ownerPhone.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
