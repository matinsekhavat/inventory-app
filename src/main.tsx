import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/HomePage";
import "./index.css";
import { CategoryProvider } from "./context/CategoryProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CategoryProvider>
      <HomePage />
    </CategoryProvider>
  </React.StrictMode>
);
