"use client";

import { SupplierFormData } from "@/types/supplier";
import type React from "react";

import { useState } from "react";
import { useForm } from "react-hook-form";

export function useSupplierForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadedImages, setUploadedImages] = useState<
    Record<string, File | null>
  >({
    "companyInformation.tradeLicense": null,
    "companyInformation.logo": null,
  });

  const formMethods = useForm<SupplierFormData>({
    defaultValues: {
      companyInformation: {
        name: "BD-Selling",
        countryName: "",
        companyEstablish: "",
        numberOfEmployees: undefined,
        companyWebsite: "",
        noWebsite: false,
        businessIdentification: "",
        tradeLicense: "",
        logo: "",
      },
      businessInformation: {
        address: "",
        district: "",
        zipCode: "",
        businessType: [],
        category: "",
        subCategory: "",
        about: "",
        mainProducts: "",
        afterSalesService: "",
        controlPolicy: "",
      },
      ownerInformation: {
        ownerName: "",
        ownerEmail: "",
        ownerPhone: "",
      },
      ceoInformation: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
      },
    },
  });

  const handleImageUpload =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
        const file = e.target.files[0];
        setUploadedImages((prev) => ({
          ...prev,
          [field]: file,
        }));

        // Set the file name in the form
        formMethods.setValue(field as any, file.name);
      }
    };

  const onSubmit = async (data: SupplierFormData) => {
    setIsSubmitting(true);

    try {
      // In a real application, you would create a FormData object
      // and append all form fields and files to it
      const formData = new FormData();

      // Append all text fields
      Object.entries(data).forEach(([key, value]) => {
        if (typeof value === "object" && value !== null) {
          Object.entries(value).forEach(([subKey, subValue]) => {
            if (Array.isArray(subValue)) {
              subValue.forEach((item) => {
                formData.append(`${key}.${subKey}[]`, item);
              });
            } else if (typeof subValue !== "object" || subValue === null) {
              formData.append(`${key}.${subKey}`, String(subValue));
            }
          });
        }
      });

      // Append files
      Object.entries(uploadedImages).forEach(([key, file]) => {
        if (file) {
          formData.append(key, file);
        }
      });

      // Here you would send the formData to your API
      // const response = await fetch('/api/supplier-profile', {
      //   method: 'POST',
      //   body: formData,
      // })

      // For demo purposes, we'll just log the data
      console.log("Form submitted with data:", data);
      console.log("Uploaded images:", uploadedImages);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while updating your profile. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formMethods,
    onSubmit,
    handleImageUpload,
    isSubmitting,
  };
}
