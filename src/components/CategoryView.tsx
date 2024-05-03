import { useCategory } from "../context/CategoryProvider";

function CategoryView() {
  const {
    handleAddCategoryView,
    handleCategoryViewVisibility,
    handleChangeCategoryViewField,
    isCategoryViewOpen,
  } = useCategory();
  return (
    <div className="text-slate-300 mb-8">
      <h1
        className="text-xl my-2"
        onClick={!isCategoryViewOpen ? handleCategoryViewVisibility : undefined}
      >
        Add New Category
      </h1>
      {isCategoryViewOpen && (
        <div className="p-4  bg-slate-700 rounded-lg flex flex-col gap-y-4">
          <div>
            <label htmlFor="cat-title" className="block mb-2">
              title
            </label>
            <input
              className="bg-transparent border border-slate-500 w-full px-2 py-3 rounded-xl  focus:border-[3px] focus:border-blue-700 focus:outline-none "
              type="text"
              placeholder="title..."
              name="title"
              onChange={handleChangeCategoryViewField}
            />
          </div>
          <div>
            <label htmlFor="cat-title" className="block mb-2">
              decription
            </label>
            <input
              placeholder="description..."
              onChange={handleChangeCategoryViewField}
              name="description"
              className=" bg-transparent border border-slate-500 w-full px-2 py-3 rounded-xl  focus:border-[3px] focus:border-blue-700 focus:outline-none min-h-20 max-h-96"
            />
          </div>
          <div className="flex items-center justify-between gap-4">
            <button
              className="border grow p-2 rounded-lg"
              onClick={handleCategoryViewVisibility}
            >
              Cancel
            </button>
            <button
              className=" grow p-2 rounded-lg bg-slate-500 "
              onClick={handleAddCategoryView}
            >
              Add Category{" "}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CategoryView;
