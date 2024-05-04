import ProductItem from "./ProductItem";
import { useCategory } from "../context/CategoryProvider";

function ProductList() {
  const { productView } = useCategory();

  return (
    <ul className="space-y-2">
      {productView.map((product) => (
        <ProductItem key={product.createdAt} product={product} />
      ))}
    </ul>
  );
}

export default ProductList;
