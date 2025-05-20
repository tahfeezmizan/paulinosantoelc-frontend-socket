"use client";

import { useSupplierForm } from "@/hooks/use-supplier-form";
import { SupplierProfileForm } from "./supplier-profile-form";

export default function SupplierProfilePage() {
  const { formMethods, onSubmit, handleImageUpload, isSubmitting } =
    useSupplierForm();

  return (
    <div className="">
      <SupplierProfileForm
        formMethods={formMethods}
        onSubmit={onSubmit}
        handleImageUpload={handleImageUpload}
        isSubmitting={isSubmitting}
      />
    </div>
  );
}
