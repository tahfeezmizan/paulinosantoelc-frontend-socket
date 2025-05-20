// User related interfaces
export interface User {
    id: string;
    name: string;
    email: string;
    firstName: string;
    lastName: string;
    isVerified: boolean;
    role: string;
  }
  
  export interface RootState {
    user: {
      user: {
        user: User;
      };
    };
  }
  
  // Form data interfaces
  export interface CompanyInformation {
    companyName: string;
    countryName: string
    tradeLicense: string;
    companyLogo: string;
    companyEstablish: string;
    numberOfEmployees: number;
    companyWebsite: string;
    businessIdentification: number;
  }
  
  export interface BusinessInformation {
    companyAddress: string;
    district: string;
    zipCode: string;
    businessType: string[];
    category: string;
    subCategory: string;
    companyDescription: string;
    mainProducts: string[];
    afterSalesService: boolean;
    controlPolicy: string;
    about: string;
    address: string
  }
  
  export interface OwnerInformation {
    ownerName: string;
    ownerEmail: string;
    ownerPhone: string;
  }
  
  export interface CeoInformation {
    firstName: string;
    lastName: string;
    ceoEmail: string;
    phoneNumber: string;
    whatsappNumber: string
  }
  
  export interface FormData {
    companyInformation: CompanyInformation;
    businessInformation: BusinessInformation;
    ownerInformation: OwnerInformation;
    ceoInformation: CeoInformation;
    
  }
  
  // Company data type
  export interface CompanyDataType {
    companyName?: string;
    tradeLicense?: string;
    companyLogo?: string;
    companyAddress?: string;
    district?: string;
    zipCode?: string;
    businessType?: string[];
    businessCategory?: string;
    businessSubCategory?: string;
    companyDescription?: string;
    mainProducts?: string[];
    afterSalesService?: boolean;
    controlPolicy?: string;
    ownerName?: string;
    ownerEmail?: string;
    ownerPhone?: string;
    firstName?: string;
    lastName?: string;
    ceoEmail?: string;
    ceoPhone?: string;
  }