import React, { createContext, useContext, useEffect, useState } from "react";

type categoriesType = {
  title: string;
  description: string;
};
export type ProductViewType = {
  createdAt: number;
  title: string;
  quantity: number;
  categoryTitle: string;
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
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  categoryTitle: string;
  setCategoryTitle: React.Dispatch<React.SetStateAction<string>>;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  productView: ProductViewType[];
  setProductView: React.Dispatch<React.SetStateAction<ProductViewType[]>>;
  handleAddProductView: () => void;
};

export const CategoryContext = createContext<CategoryContextType>({
  categories: [],
  categoryViewFields: { title: "", description: "" },
  isCategoryViewOpen: true,
  handleCategoryViewVisibility: () => {},
  handleChangeCategoryViewField: () => {},
  handleAddCategoryView: () => {},
  title: "",
  setTitle: () => {},
  categoryTitle: "",
  setCategoryTitle: () => {},
  quantity: 1,
  setQuantity: () => {},
  productView: [],
  setProductView: () => [],
  handleAddProductView: () => {},
});

export const CategoryProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [categories, setCategories] = useState<categoriesType[]>(
    JSON.parse(localStorage.getItem("categories") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);
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
    if (!categoryViewFields.description || !categoryViewFields.title)
      return null;
    setCategories((prev) => [...prev, categoryViewFields]);
    setCategoryViewFields({
      title: "",
      description: "",
    });
  }

  // ? PRODUCT VIEW
  const [productView, setProductView] = useState<ProductViewType[]>(
    JSON.parse(localStorage.getItem("productView") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("productView", JSON.stringify(productView));
  }, [productView]);

  const [title, setTitle] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [categoryTitle, setCategoryTitle] = useState<string>("");

  function handleAddProductView() {
    if (!title || !categoryTitle) return null;
    const newProduct = {
      createdAt: new Date().getTime(),
      title,
      quantity,
      categoryTitle,
    };
    setProductView((prev) => [...prev, newProduct]);
    setTitle("");
    setQuantity(1);
    setCategoryTitle("");
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
        title,
        setTitle,
        categoryTitle,
        setCategoryTitle,
        quantity,
        setQuantity,
        productView,
        setProductView,
        handleAddProductView,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export function useCategory(): CategoryContextType {
  const context = useContext(CategoryContext);

  if (!context) {
    throw new Error("useCategory must be used within an CategoryProvider");
  }
  return context;
}
