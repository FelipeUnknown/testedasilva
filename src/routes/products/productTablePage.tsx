import { createFileRoute } from "@tanstack/react-router";
import ProductTable from "../../assets/components/ProductTable";

export const Route = createFileRoute("/products/productTablePage")({
  component: ProductTablePage,
});

function ProductTablePage() {
  return (
    <div>
      <ProductTable />
    </div>
  );
}
