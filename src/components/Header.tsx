import React from "react";

const Header: React.FC = () => {
  return (
    <>
      <header className="bg-slate-700 py-4 ">
        <div className="container flex justify-center items-center text-slate-300">
          <h1 className="text-lg font-bold">
            InventoryApp-React & TailwindCSS - {"   "}
          </h1>
          <span className="flex items-center justify-center size-7 rounded-full bg-slate-500 border-[3px] border-slate-300 font-bold text-slate-300">
            {" "}
            2
          </span>
        </div>
      </header>
    </>
  );
};

export default Header;
