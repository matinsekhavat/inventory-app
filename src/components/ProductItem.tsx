import { ProductViewType, useCategory } from "../context/CategoryProvider";
import displayPersianDate from "../utils/displayPersianDate";

type ProductItemType = {
  product: ProductViewType;
};
function ProductItem({ product }: ProductItemType) {
  const { setProductView } = useCategory();
  function handleDeleteProductItem(id: number) {
    setProductView((prev) =>
      prev.filter((product) => product.createdAt !== id)
    );
  }
  return (
    <div className="flex items-center justify-between text-slate-400">
      {/* Left Side */}
      <div>
        <p>{product?.title}</p>
      </div>
      {/* Right Side */}
      <div className="flex gap-2 text-slate-300 items-center">
        <p>{displayPersianDate(product?.createdAt)}</p>
        <div>{product?.categoryTitle}</div>
        <div className="size-4 rounded-full flex items-center justify-center border border-slate-400 p-3 select-none">
          {product.quantity}
        </div>
        <button
          onClick={() => handleDeleteProductItem(product.createdAt)}
          className="text-red-600 border border-red-600 py-2 px-4 rounded-lg hover:border-slate-300 hover:text-slate-300 hover:bg-red-600 transition-all"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
