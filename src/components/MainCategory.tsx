import React, { PropsWithChildren } from "react";

const MainCategory: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="bg-slate-800 py-10">
      <div className="container max-w-screen-sm  ">{children}</div>
    </main>
  );
};

export default MainCategory;
