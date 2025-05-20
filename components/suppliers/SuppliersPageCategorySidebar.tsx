import BuyRequirementForm from "./BuyRequirementForm";
import NewSuppliersList from "./NewSuppliersList";
import SuppliersByCategory from "./SuppliersByCategory";

export function SuppliersPageCategorySidebar() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg flex flex-col gap-8"> 
        <SuppliersByCategory />
        <NewSuppliersList />
      </div>
      <BuyRequirementForm />
    </div>
  );
}
