import React, { useState } from "react";
import { useFormContext, Controller } from "react-hook-form";
import Image from "next/image";
import { ImagePlus } from "lucide-react";
interface IImageUpload {
  name: string;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}

const FormImageUpload = ({
  name,
  label,
  required,
  disabled,
  className,
}: IImageUpload) => {
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext();
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string); // Optimistically set the image preview
      };
      reader.readAsDataURL(file);

      // Store the file in the form state if needed
      setValue(name, file);
    }
  };

  // Get error message for the field from formState
  const errorMessage = errors[name]?.message as string; // Cast to string if it's not undefined

  return (
    <div className={`mb-4 flex flex-col ${className}`}>
      {label && (
        <label className="mb-2 font-semibold ">
          {label} {required && <span>*</span>}
        </label>
      )}

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <div
            className="relative flex h-80 w-full cursor-pointer items-center justify-center rounded-md border  border-gray-300 "
            onClick={() =>
              document.getElementById(`file-input-${name}`)?.click()
            }
          >
            <input
              id={`file-input-${name}`}
              type="file"
              accept="image/*"
              disabled={disabled}
              onChange={handleFileChange}
              className="hidden" // Hide the actual file input
            />

            {/* Display placeholder or uploaded image */}
            <div className="flex h-full w-full items-center justify-center">
              {imagePreview || field.value ? (
                <Image
                  src={imagePreview || field.value}
                  alt="Uploaded Preview"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              ) : (
                <div className="flex flex-col items-center">
                  <ImagePlus className="mb-2" size={34} />
                  <p className="text-sm text-gray-500">Upload Image</p>
                </div>
              )}
            </div>

            {/* Display error message if any */}
            {errorMessage && (
              <small className="absolute bottom-2 right-2 text-xs text-red-600">
                {errorMessage}
              </small>
            )}
          </div>
        )}
      />
    </div>
  );
};

export default FormImageUpload;

// import React, { useState } from "react";
// import { useFormContext, Controller } from "react-hook-form";
// import Image from "next/image";
// import { ImagePlus } from "lucide-react";

// interface IImageUpload {
//   name: string;
//   label?: string;
//   required?: boolean;
//   disabled?: boolean;
//   className?: string;
// }

// const FormImageUpload = ({
//   name,
//   label,
//   required,
//   disabled,
//   className,
// }: IImageUpload) => {
//   const {
//     control,
//     setValue,
//     formState: { errors },
//   } = useFormContext();
//   const [imagePreviews, setImagePreviews] = useState<string[]>([]);

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const files = e.target.files;
//     if (files) {
//       const newFiles: string[] = [];
//       for (let i = 0; i < files.length; i++) {
//         const reader = new FileReader();
//         reader.onloadend = () => {
//           newFiles.push(reader.result as string);
//           if (newFiles.length === files.length) {
//             setImagePreviews((prevPreviews) => [...prevPreviews, ...newFiles]); // Append new previews without resetting previous ones
//           }
//         };
//         reader.readAsDataURL(files[i]);
//       }

//       // Store the files in the form state
//       setValue(name, Array.from(files)); // Save files as an array in form state
//     }
//   };

//   // Get error message for the field from formState
//   const errorMessage = errors[name]?.message as string; // Cast to string if it's not undefined

//   return (
//     <div className={`mb-4 flex flex-col ${className}`}>
//       {label && (
//         <label className="mb-2 font-semibold ">
//           {label} {required && <span>*</span>}
//         </label>
//       )}

//       <Controller
//         name={name}
//         control={control}
//         render={({ field }) => (
//           <div
//             className="relative flex flex-col  items-center justify-center w-full cursor-pointer rounded-md border h-60 p-3 border-[#B6B6B6] shadow-sm outline-none focus:outline-none"
//             onClick={() =>
//               document.getElementById(`file-input-${name}`)?.click()
//             }
//           >
//             <input
//               id={`file-input-${name}`}
//               type="file"
//               accept="image/*"
//               multiple
//               disabled={disabled}
//               onChange={handleFileChange}
//               className="hidden" // Hide the actual file input
//             />

//             {/* Display uploaded image previews */}
//             <div className="flex gap-4 flex-wrap justify-center w-full">
//               {imagePreviews.length > 0 ? (
//                 imagePreviews.map((image, index) => (
//                   <div
//                     key={index}
//                     className="relative h-24 w-24 overflow-hidden rounded-md border border-gray-300"
//                   >
//                     <Image
//                       src={image}
//                       alt={`Uploaded Preview ${index}`}
//                       layout="fill"
//                       objectFit="cover"
//                       className="rounded-md"
//                     />
//                   </div>
//                 ))
//               ) : field.value?.length > 0 ? (
//                 [...(field.value || [])].map((image, index) => (
//                   <div
//                     key={index}
//                     className="relative h-24 w-24 overflow-hidden rounded-md border border-gray-300"
//                   >
//                     <Image
//                       src={image}
//                       alt={`Uploaded Preview ${index}`}
//                       layout="fill"
//                       objectFit="cover"
//                       className="rounded-md"
//                     />
//                   </div>
//                 ))
//               ) : (
//                 <div className="flex flex-col items-center">
//                   <ImagePlus className="mb-2" size={34} />
//                   <p className="text-sm text-gray-500">Upload Image(s)</p>
//                 </div>
//               )}
//             </div>

//             {/* Display error message if any */}
//             {errorMessage && (
//               <small className="absolute bottom-2 right-2 text-xs text-red-600">
//                 {errorMessage}
//               </small>
//             )}
//           </div>
//         )}
//       />
//     </div>
//   );
// };

// export default FormImageUpload;
