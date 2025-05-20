// src/types.ts

export interface AccountFormData {
  companyInformation: {
    tradeLicense: string | null;
    logo: string | null;
  };
  businessInformation: {
    address: string;
    district: string;
    zipCode: string;
    businessType: string[];
    category: string;
    subCategory: string;
    about: string;
    mainProducts: string;
    afterSalesService: string;
    controlPolicy: string;
  };
  ownerInformation: {
    name: string;
    email: string;
    phone: string;
  };
  ceoInformation: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
}
