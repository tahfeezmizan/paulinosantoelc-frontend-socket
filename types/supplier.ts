export interface SupplierFormData {
  companyInformation: {
    name: string;
    countryName: string;
    companyEstablish: string;
    numberOfEmployees?: number;
    companyWebsite: string;
    noWebsite: boolean;
    businessIdentification: string;
    tradeLicense: string;
    logo: string;
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
    ownerName: string;
    ownerEmail: string;
    ownerPhone: string;
  };
  ceoInformation: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    whatsappNumber: string;
  };
}
