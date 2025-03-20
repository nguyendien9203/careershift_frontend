import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/common/header/Header";

const MainLayout: React.FC = () => {
  return (
    <div className="w-full flex flex-col justify-center">
      <Header />
      <main className="px-2 sm:px-6 lg:px-8 xl:px-[200px] my-5">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
