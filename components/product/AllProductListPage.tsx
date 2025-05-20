
import AllProductList from "./AllProductList";
import { ProductPageCategorySidebar } from "./ProductPageCategorySidebar";

export default function AllProductListPage() {
  return (
    <div className="min-h-screen ">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-[350px_1fr] gap-8">
          <div className="md:sticky md:top-8 h-fit">
            <ProductPageCategorySidebar />
          </div>

          <div>
            <AllProductList />
          </div>
        </div>
      </div>
    </div>
  );
}
