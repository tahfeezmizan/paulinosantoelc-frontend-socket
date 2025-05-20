"use client";

import { getErrorMessageByPropertyName } from "@/utils/schema-validator";
import React from "react";
import { useFormContext, Controller } from "react-hook-form";

interface Option {
  value: string | number;
  label: string;
}

interface FormSelectProps {
  name: string;
  value?: string | string[] | undefined;
  id?: string;
  options: Option[];
  label?: string;
  validation?: object;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}

const FormSelect = ({
  name,
  value,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  id,
  options,
  label,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  validation,
  required,
  disabled,
  className,
}: FormSelectProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <div className={`mb-4 flex flex-col`}>
      {label && (
        <label className="mb-2 font-semibold ">
          {label}
          {required && <span className="">*</span>}
        </label>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          const fieldValue = value !== undefined ? value : field.value || ""; // Ensure fieldValue is never undefined
          return (
            <select
              {...field}
              value={fieldValue}
              required={required}
              disabled={disabled}
              className={` ${className}`}
            >
              <option value="" disabled>
                Select an option
              </option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          );
        }}
      />
      <small className="text-red-500">{errorMessage}</small>
    </div>
  );
};

export default FormSelect;
