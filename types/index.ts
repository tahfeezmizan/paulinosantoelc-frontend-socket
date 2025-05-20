export interface IProduct {
  id?: string | number;
  userId: string;
  productName: string;
  category: string;
  subCategory: string;
  details: string;
  usage: string;
  productCode: string;
  brandName: string;
  countryOfOrigin: string;
  minOrderQuantity: string;
  unit: string;
  price: number;
  sampleAvailability: boolean | null;
  sellService: boolean | null;
  images: string[];
  createdAt: string;
  updatedAt: string;
}
