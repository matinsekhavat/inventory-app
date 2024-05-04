import ProductList from "./ProductList";

function ProductOverView() {
  return (
    <div>
      <h3 className="text-2xl text-stone-200">Product List</h3>
      {/* Search Field  */}
      <div className=" flex items-center justify-between">
        <label
          htmlFor="product-List"
          className=" text-lg text-slate-500 cursor-pointer"
        >
          Search
        </label>
        <input
          id="product-List"
          type="text"
          className="bg-transparent border border-slate-500  px-2 py-3 rounded-xl  focus:border-[3px] focus:border-blue-700 focus:outline-none min-w-16 max-w-64 w-full"
        />
      </div>
      {/* Sort Field */}
      <div className="flex items-center justify-between mt-4">
        <label htmlFor="sort">Sort</label>
        <select className="input-filed text-white">
          <option
            value="test"
            className=" h-8 text-red bg-slate-500 rounded-md"
          >
            Select Category
          </option>
        </select>
      </div>
      {/* Product List */}
      <div>
        <h1 className="border-b my-4 pb-2 text-slate-400">Products Overview</h1>
        <ProductList />
      </div>
    </div>
  );
}

export default ProductOverView;
