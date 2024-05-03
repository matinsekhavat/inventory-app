import { useCategory } from "../context/CategoryProvider";

function ProductView() {
  const {
    categories,
    title,
    setTitle,
    quantity,
    setQuantity,
    categoryTitle,
    setCategoryTitle,
    handleAddProductView,
  } = useCategory();

  return (
    <div className="text-slate-300 mb-8">
      <h1 className="text-2xl">Add New Product</h1>
      <div className="p-4  bg-slate-700 rounded-lg flex flex-col gap-y-4">
        <div>
          <label htmlFor="cat-title" className="block mb-2">
            title
          </label>
          <input
            className="bg-transparent border border-slate-500  px-2 py-3 rounded-xl  focus:border-[3px] focus:border-blue-700 focus:outline-none min-w-16 max-w-64 w-full "
            type="text"
            placeholder="title..."
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="product-Quantity" className="block mb-2">
            Quantity
          </label>
          <input
            type="number"
            name="quantity"
            id="product-Quantity"
            className="input-filed"
            placeholder="quantity..."
            onChange={(e) => setQuantity(+e.target.value)}
            value={quantity}
          />
        </div>
        {!!categories.length && (
          <select
            className="input-filed  max-w-full"
            onChange={(e) => setCategoryTitle(e.target.value)}
            value={categoryTitle}
          >
            <option value="">please Select Category</option>
            {categories.map((category) => (
              <option
                key={category.title}
                value={category.title}
                selected={category.title === categoryTitle}
              >
                {category.title}
              </option>
            ))}
          </select>
        )}
        {/* //button add to ProductView */}
        <div className="flex justify-center items-center ">
          <button
            className=" flex-1 max-w-48  bg-slate-500 text-slate-200 rounded-xl py-2"
            onClick={handleAddProductView}
          >
            Add to Inventory
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductView;
