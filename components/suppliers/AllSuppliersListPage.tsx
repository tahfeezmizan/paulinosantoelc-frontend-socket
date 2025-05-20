
import AllSuppliersList from "./AllSuppliersList";
import { SuppliersPageCategorySidebar } from "./SuppliersPageCategorySidebar";



export default function AllSuppliersListPage() {
  return (
    <div className="min-h-screen ">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-[350px_1fr] gap-8">
          <div className="md:sticky md:top-8 h-fit">
            <SuppliersPageCategorySidebar />
          </div>

          <div>
            <AllSuppliersList />
          </div>
        </div>
      </div>
    </div>
  );
}
