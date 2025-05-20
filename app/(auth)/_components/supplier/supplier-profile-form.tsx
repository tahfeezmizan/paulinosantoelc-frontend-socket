"use client";

import type React from "react";

import type { SupplierFormData } from "@/types/supplier";
import { FormProvider, type UseFormReturn } from "react-hook-form";
import { FiEdit } from "react-icons/fi";
import { CompanyInformationForm } from "./form-sections/company-information-form";
import { AboutBusinessInformationForm } from "./form-sections/about-business-information-form";
import { OwnerInformationForm } from "./form-sections/owner-information-form";
import { CeoInformationForm } from "./form-sections/ceo-information-form";

interface SupplierProfileFormProps {
  formMethods: UseFormReturn<SupplierFormData>;
  onSubmit: (data: SupplierFormData) => void;
  handleImageUpload: (
    field: string
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSubmitting: boolean;
}

export function SupplierProfileForm({
  formMethods,
  onSubmit,
  handleImageUpload,
  isSubmitting,
}: SupplierProfileFormProps) {
  return (
    <FormProvider {...formMethods}>
      <form
        onSubmit={formMethods.handleSubmit(onSubmit)}
        className="w-full  mx-auto"
      >
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <div>
              <h1 className="text-2xl md:text-5xl hanken-text font-bold">
                Welcome Mr. Sabbir Hossain !
              </h1>
              <p className="text-base md:text-2xl font-roboto font-normal leading-loose text-[#626262]">
                Please Update Your Supplier Account
              </p>
            </div>
            <button
              type="button"
              className="flex items-start md:items-center font-roboto text-sm text-gray-600 gap-1 pt-2 md:pt-0"
            >
              <FiEdit className="h-4 w-4" />
              Edit Account
            </button>
          </div>

          <CompanyInformationForm handleImageUpload={handleImageUpload} />
          <AboutBusinessInformationForm />
          <OwnerInformationForm />
          <CeoInformationForm />

          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {isSubmitting ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
