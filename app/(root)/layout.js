import React from "react";

import "@/styles/index.css";
import Sidebar from "@/components/Sidebar";

const Layout = async ({ children }) => {
  return (
    <main className="flex min-h-screen w-full flex-row">
      <Sidebar />
      <div className="container">
        <p>Header</p>
        {children}
      </div>
    </main>
  );
};

export default Layout;
