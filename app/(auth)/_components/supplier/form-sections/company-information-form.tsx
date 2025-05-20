import { SupplierFormData } from "@/types/supplier";
import { Upload } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useFormContext } from "react-hook-form";

// type FileObject = {
//   [key: string]: string;
// };

interface CompanyInformationProps {
  handleImageUpload: (
    field: string
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  companyData?: {
    companyName?: string;
    countryName?: string;
    companyEstablish?: string;
    numberOfEmployees?: number;
    businessIdentification?: string;
    companyWebsite?: string;
  } | null;
  companyLogoFile?: File | undefined | null;
  tradeLicenseFile?: File | undefined | null;
}

const employeeOptions = [
  { label: "1-5", value: 5 },
  { label: "6-10", value: 10 },
  { label: "11-50", value: 50 },
  { label: "51-100", value: 100 },
  { label: "101-500", value: 500 },
  { label: "501-1000", value: 1000 },
  { label: "Above 1000", value: 1001 }, // using 1001 to indicate "above 1000"
];

const countries = [
  {
    country: "Afghanistan",
  },
  {
    country: "Albania",
  },
  {
    country: "Algeria",
  },
  {
    country: "Andorra",
  },
  {
    country: "Angola",
  },
  {
    country: "Antigua and Barbuda",
  },
  {
    country: "Argentina",
  },
  {
    country: "Armenia",
  },
  {
    country: "Austria",
  },
  {
    country: "Azerbaijan",
  },
  {
    country: "Bahrain",
  },
  {
    country: "Bangladesh",
  },
  {
    country: "Barbados",
  },
  {
    country: "Belarus",
  },
  {
    country: "Belgium",
  },
  {
    country: "Belize",
  },
  {
    country: "Benin",
  },
  {
    country: "Bhutan",
  },
  {
    country: "Bolivia",
  },
  {
    country: "Bosnia and Herzegovina",
  },
  {
    country: "Botswana",
  },
  {
    country: "Brazil",
  },
  {
    country: "Brunei",
  },
  {
    country: "Bulgaria",
  },
  {
    country: "Burkina Faso",
  },
  {
    country: "Burundi",
  },
  {
    country: "Cabo Verde",
  },
  {
    country: "Cambodia",
  },
  {
    country: "Cameroon",
  },
  {
    country: "Canada",
  },
  {
    country: "Central African Republic",
  },
  {
    country: "Chad",
  },
  {
    country: "Channel Islands",
  },
  {
    country: "Chile",
  },
  {
    country: "China",
  },
  {
    country: "Colombia",
  },
  {
    country: "Comoros",
  },
  {
    country: "Congo",
  },
  {
    country: "Costa Rica",
  },
  {
    country: "C\u00f4te d'Ivoire",
  },
  {
    country: "Croatia",
  },
  {
    country: "Cuba",
  },
  {
    country: "Cyprus",
  },
  {
    country: "Czech Republic",
  },
  {
    country: "Denmark",
  },
  {
    country: "Djibouti",
  },
  {
    country: "Dominica",
  },
  {
    country: "Dominican Republic",
  },
  {
    country: "DR Congo",
  },
  {
    country: "Ecuador",
  },
  {
    country: "Egypt",
  },
  {
    country: "El Salvador",
  },
  {
    country: "Equatorial Guinea",
  },
  {
    country: "Eritrea",
  },
  {
    country: "Estonia",
  },
  {
    country: "Eswatini",
  },
  {
    country: "Ethiopia",
  },
  {
    country: "Faeroe Islands",
  },
  {
    country: "Finland",
  },
  {
    country: "France",
  },
  {
    country: "French Guiana",
  },
  {
    country: "Gabon",
  },
  {
    country: "Gambia",
  },
  {
    country: "Georgia",
  },
  {
    country: "Germany",
  },
  {
    country: "Ghana",
  },
  {
    country: "Gibraltar",
  },
  {
    country: "Greece",
  },
  {
    country: "Grenada",
  },
  {
    country: "Guatemala",
  },
  {
    country: "Guinea",
  },
  {
    country: "Guinea-Bissau",
  },
  {
    country: "Guyana",
  },
  {
    country: "Haiti",
  },
  {
    country: "Holy See",
  },
  {
    country: "Honduras",
  },
  {
    country: "Hong Kong",
  },
  {
    country: "Hungary",
  },
  {
    country: "Iceland",
  },
  {
    country: "India",
  },
  {
    country: "Indonesia",
  },
  {
    country: "Iran",
  },
  {
    country: "Iraq",
  },
  {
    country: "Ireland",
  },
  {
    country: "Isle of Man",
  },
  {
    country: "Israel",
  },
  {
    country: "Italy",
  },
  {
    country: "Jamaica",
  },
  {
    country: "Japan",
  },
  {
    country: "Jordan",
  },
  {
    country: "Kazakhstan",
  },
  {
    country: "Kenya",
  },
  {
    country: "Kuwait",
  },
  {
    country: "Kyrgyzstan",
  },
  {
    country: "Laos",
  },
  {
    country: "Latvia",
  },
  {
    country: "Lebanon",
  },
  {
    country: "Lesotho",
  },
  {
    country: "Liberia",
  },
  {
    country: "Libya",
  },
  {
    country: "Liechtenstein",
  },
  {
    country: "Lithuania",
  },
  {
    country: "Luxembourg",
  },
  {
    country: "Macao",
  },
  {
    country: "Madagascar",
  },
  {
    country: "Malawi",
  },
  {
    country: "Malaysia",
  },
  {
    country: "Maldives",
  },
  {
    country: "Mali",
  },
  {
    country: "Malta",
  },
  {
    country: "Mauritania",
  },
  {
    country: "Mauritius",
  },
  {
    country: "Mayotte",
  },
  {
    country: "Mexico",
  },
  {
    country: "Moldova",
  },
  {
    country: "Monaco",
  },
  {
    country: "Mongolia",
  },
  {
    country: "Montenegro",
  },
  {
    country: "Morocco",
  },
  {
    country: "Mozambique",
  },
  {
    country: "Myanmar",
  },
  {
    country: "Namibia",
  },
  {
    country: "Nepal",
  },
  {
    country: "Netherlands",
  },
  {
    country: "Nicaragua",
  },
  {
    country: "Niger",
  },
  {
    country: "Nigeria",
  },
  {
    country: "North Korea",
  },
  {
    country: "North Macedonia",
  },
  {
    country: "Norway",
  },
  {
    country: "Oman",
  },
  {
    country: "Pakistan",
  },
  {
    country: "Panama",
  },
  {
    country: "Paraguay",
  },
  {
    country: "Peru",
  },
  {
    country: "Philippines",
  },
  {
    country: "Poland",
  },
  {
    country: "Portugal",
  },
  {
    country: "Qatar",
  },
  {
    country: "R\u00e9union",
  },
  {
    country: "Romania",
  },
  {
    country: "Russia",
  },
  {
    country: "Rwanda",
  },
  {
    country: "Saint Helena",
  },
  {
    country: "Saint Kitts and Nevis",
  },
  {
    country: "Saint Lucia",
  },
  {
    country: "Saint Vincent and the Grenadines",
  },
  {
    country: "San Marino",
  },
  {
    country: "Sao Tome & Principe",
  },
  {
    country: "Saudi Arabia",
  },
  {
    country: "Senegal",
  },
  {
    country: "Serbia",
  },
  {
    country: "Seychelles",
  },
  {
    country: "Sierra Leone",
  },
  {
    country: "Singapore",
  },
  {
    country: "Slovakia",
  },
  {
    country: "Slovenia",
  },
  {
    country: "Somalia",
  },
  {
    country: "South Africa",
  },
  {
    country: "South Korea",
  },
  {
    country: "South Sudan",
  },
  {
    country: "Spain",
  },
  {
    country: "Sri Lanka",
  },
  {
    country: "State of Palestine",
  },
  {
    country: "Sudan",
  },
  {
    country: "Suriname",
  },
  {
    country: "Sweden",
  },
  {
    country: "Switzerland",
  },
  {
    country: "Syria",
  },
  {
    country: "Taiwan",
  },
  {
    country: "Tajikistan",
  },
  {
    country: "Tanzania",
  },
  {
    country: "Thailand",
  },
  {
    country: "The Bahamas",
  },
  {
    country: "Timor-Leste",
  },
  {
    country: "Togo",
  },
  {
    country: "Trinidad and Tobago",
  },
  {
    country: "Tunisia",
  },
  {
    country: "Turkey",
  },
  {
    country: "Turkmenistan",
  },
  {
    country: "Uganda",
  },
  {
    country: "Ukraine",
  },
  {
    country: "United Arab Emirates",
  },
  {
    country: "United Kingdom",
  },
  {
    country: "United States",
  },
  {
    country: "Uruguay",
  },
  {
    country: "Uzbekistan",
  },
  {
    country: "Venezuela",
  },
  {
    country: "Vietnam",
  },
  {
    country: "Western Sahara",
  },
  {
    country: "Yemen",
  },
  {
    country: "Zambia",
  },
  {
    country: "Zimbabwe",
  },
];

export function CompanyInformationForm({
  handleImageUpload,
  companyData,
  companyLogoFile,
  tradeLicenseFile,
}: CompanyInformationProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext<SupplierFormData>();

  // const [filePreviews, setFilePreviews] = useState<{
  //   [key: string]: string | FileObject;
  // }>({});

  // const handleFileChange =
  //   (key: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
  //     const file = event.target.files?.[0];
  //     if (file) {
  //       const fileObj: FileObject = {
  //         name: file.name,
  //         type: file.type,
  //       };

  //       if (file.type.startsWith("image/")) {
  //         fileObj.preview = URL.createObjectURL(file);
  //       }

  //       setFilePreviews((prev) => ({ ...prev, [key]: fileObj }));
  //     }
  //   };

  return (
    <div>
      <div className="space-y-6">
        <div>
          <label
            htmlFor="companyName"
            className="block text-sm font-medium mb-1"
          >
            Company Name<span className="text-red-500">*</span>
          </label>
          <input
            id="companyName"
            type="text"
            defaultValue={companyData?.companyName}
            className="w-full px-3 py-2 border rounded-md"
            placeholder="BD-Selling"
            {...register("companyInformation.name", {
              required: "Company name is required",
            })}
          />
          {errors.companyInformation?.name && (
            <p className="mt-1 text-sm text-red-600">
              {errors.companyInformation.name.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="countryName"
            className="block text-sm font-medium mb-1"
          >
            Country Name<span className="text-red-500">*</span>
          </label>
          <select
            id="countryName"
            className="w-full px-3 py-2 border rounded-md"
            defaultValue={companyData?.countryName}
            {...register("companyInformation.countryName", {
              required: "Country is required",
            })}
          >
            <option value="" disabled>
              Select country
            </option>
            {countries?.map((country) => (
              <option key={country.country} value={country.country}>
                {country.country}
              </option>
            ))}
          </select>
          {errors.companyInformation?.countryName && (
            <p className="mt-1 text-sm text-red-600">
              {errors.companyInformation.countryName.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="companyEstablish"
            className="block text-sm font-medium mb-1"
          >
            Company Established<span className="text-red-500">*</span>
          </label>
          <select
            id="companyEstablish"
            defaultValue={companyData?.companyEstablish}
            className="w-full px-3 py-2 border rounded-md"
            {...register("companyInformation.companyEstablish", {
              required: "Establishment year is required",
            })}
          >
            <option value="">Select year</option>
            {Array.from(
              { length: 50 },
              (_, i) => new Date().getFullYear() - i
            ).map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          {errors.companyInformation?.companyEstablish && (
            <p className="mt-1 text-sm text-red-600">
              {errors.companyInformation.companyEstablish.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="employees" className="block text-sm font-medium mb-1">
            Number of Employees<span className="text-red-500">*</span>
          </label>
          <select
            id="numberOfEmployees"
            defaultValue={companyData?.numberOfEmployees}
            className="w-full px-3 py-2 border rounded-md"
            {...register("companyInformation.numberOfEmployees", {
              required: "Number of employees is required",
              setValueAs: (val) => Number(val), // ensure value is treated as number
            })}
          >
            <option value="" disabled>
              Select number of employees
            </option>
            {employeeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.companyInformation?.numberOfEmployees && (
            <p className="mt-1 text-sm text-red-600">
              {errors.companyInformation.numberOfEmployees.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="companyWebsite"
            className="block text-sm font-medium mb-1"
          >
            Company Website (URL)<span className="text-red-500">*</span>
          </label>
          <input
            id="companyWebsite"
            type="url"
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Website URL"
            defaultValue={companyData?.companyWebsite}
            {...register("companyInformation.companyWebsite", {
              pattern: {
                value:
                  /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
                message: "Please enter a valid URL",
              },
            })}
          />
          {errors.companyInformation?.companyWebsite && (
            <p className="mt-1 text-sm text-red-600">
              {errors.companyInformation.companyWebsite.message}
            </p>
          )}
        </div>

        <div className="flex items-center mt-1">
          <input
            id="noWebsite"
            type="checkbox"
            className="h-4 w-4 text-blue-600 rounded border-gray-300"
            {...register("companyInformation.noWebsite")}
          />
          <label
            htmlFor="noWebsite"
            className="ml-2 block text-sm text-gray-700"
          >
            No Website
          </label>
        </div>
      </div>

      <div className="mt-6">
        <label
          htmlFor="businessIdentification"
          className="block text-sm font-medium mb-1"
        >
          Business Identification Number<span className="text-red-500">*</span>
        </label>
        <input
          id="businessIdentification"
          type="number"
          defaultValue={companyData?.businessIdentification}
          className="w-full px-3 py-2 border rounded-md"
          placeholder="Enter your identification number"
          {...register("companyInformation.businessIdentification", {
            required: "Business ID is required",
            valueAsNumber: true, // ensures the value is parsed as a number
          })}
        />
        {errors.companyInformation?.businessIdentification && (
          <p className="mt-1 text-sm text-red-600">
            {errors.companyInformation.businessIdentification.message}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-6">
        <div>
          <label className="block text-sm font-medium mb-1">
            Trade license<span className="text-red-500">*</span>
          </label>
          <div className="border rounded-md p-4 sm:p-6 flex flex-col items-center justify-center">
            <input
              type="file"
              id="tradeLicense"
              className="hidden"
              accept="image/*"
              onChange={handleImageUpload("companyInformation.tradeLicense")}
            />
            <label
              htmlFor="tradeLicense"
              className="cursor-pointer flex flex-col items-center"
            >
              <Upload className="h-6 w-6 text-gray-400 mb-2" />
              <span className="text-sm text-gray-600">Upload Image</span>
            </label>
            {/* Displaying uploaded file */}
            {tradeLicenseFile && (
              <div className="mt-2">
                <Image
                  src={
                    URL.createObjectURL(tradeLicenseFile) || "/placeholder.svg"
                  }
                  alt="Trade License Preview"
                  className="w-32 h-32 object-cover"
                  width={32}
                  height={32}
                />
              </div>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Company Logo<span className="text-red-500">*</span>
          </label>
          <div className="border rounded-md p-4 sm:p-6 flex flex-col items-center justify-center">
            <input
              type="file"
              id="companyLogo"
              className="hidden"
              accept="image/*"
              onChange={handleImageUpload("companyInformation.logo")}
            />
            <label
              htmlFor="companyLogo"
              className="cursor-pointer flex flex-col items-center"
            >
              <Upload className="h-6 w-6 text-gray-400 mb-2" />
              <span className="text-sm text-gray-600">Upload Image</span>
            </label>
            {/* Displaying uploaded file */}
            {companyLogoFile && (
              <div className="mt-2">
                <Image
                  src={
                    URL.createObjectURL(companyLogoFile) || "/placeholder.svg"
                  }
                  alt="Company Logo Preview"
                  className="w-32 h-32 object-cover"
                  width={32}
                  height={32}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
