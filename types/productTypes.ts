import { StaticImageData } from "next/image";

export interface ProductTypes {
  brandName: string;
  category: string;
  countryOfOrigin: string;
  createdAt: string;
  details: string;
  id: string;
  images: string[];
  minOrderQuantity: string;
  price: number;
  productCode: string;
  productName: string;
  sampleAvailability: string | null;
  sellService: string | null;
  subCategory: string;
  unit: string;
  updatedAt: string;
  usage: string;
  userId: string;
  businessType: string[];
  businessCategory: string;
  businessSubCategory: string;
  companyDescription: string;
  mainProducts: string[];
  afterSalesService: boolean;
  controlPolicy: string;
  companyAddress: string;
  zipCode: string;
  district: string;
  fullName: string;
  image?: string | StaticImageData;
  companyInfo?: {
    logo?: string;
    countryName?: string;
  };
}
