function CategoryView() {
  return (
    <div className="text-slate-300 mb-8">
      <h1 className="text-2xl">Add New Category :</h1>
      <form className="p-4  bg-slate-700 rounded-lg flex flex-col gap-y-4">
        <div>
          <label htmlFor="cat-title" className="block mb-2">
            title
          </label>
          <input
            className="bg-transparent border border-slate-500 w-full px-2 py-3 rounded-xl  focus:border-[3px] focus:border-blue-700 focus:outline-none "
            type="text"
            placeholder="title..."
          />
        </div>
        <div>
          <label htmlFor="cat-title" className="block mb-2">
            decription
          </label>
          <textarea
            placeholder="description..."
            className=" bg-transparent border border-slate-500 w-full px-2 py-3 rounded-xl  focus:border-[3px] focus:border-blue-700 focus:outline-none min-h-20 max-h-96"
          />
        </div>
      </form>
    </div>
  );
}

export default CategoryView;
