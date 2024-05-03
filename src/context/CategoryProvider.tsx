import React, { createContext, useContext, useState } from "react";

type categoriesType = {
  title: string;
  description: string;
};

type CategoryContextType = {
  categories: categoriesType[];
  categoryViewFields: categoriesType;
  isCategoryViewOpen: boolean;
  handleCategoryViewVisibility: () => void;
  handleChangeCategoryViewField: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleAddCategoryView: () => void;
};

export const CategoryContext = createContext<CategoryContextType>({
  categories: [],
  categoryViewFields: { title: "", description: "" },
  isCategoryViewOpen: true,
  handleCategoryViewVisibility: () => {},
  handleChangeCategoryViewField: () => {},
  handleAddCategoryView: () => {},
});

export const CategoryProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [categories, setCategories] = useState<categoriesType[] | []>([]);

  const [categoryViewFields, setCategoryViewFields] = useState<categoriesType>({
    title: "",
    description: "",
  });
  const [isCategoryViewOpen, setIsCategoryViewOpen] = useState<boolean>(true);

  function handleCategoryViewVisibility() {
    setIsCategoryViewOpen((prev) => !prev);
  }

  function handleChangeCategoryViewField(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const { name, value } = e.target;
    setCategoryViewFields((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleAddCategoryView() {
    setCategories((prev) => [...prev, categoryViewFields]);
  }

  return (
    <CategoryContext.Provider
      value={{
        categories,
        categoryViewFields,
        isCategoryViewOpen,
        handleCategoryViewVisibility,
        handleChangeCategoryViewField,
        handleAddCategoryView,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export function useCategory() {
  const context = useContext(CategoryContext);

  if (!context) {
    throw new Error("useCategory must be used within an CategoryProvider");
  }
  return context;
}
