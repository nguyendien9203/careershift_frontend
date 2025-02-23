import React from "react";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import MainSidebar from "@/components/MainSidebar";
import Header from "@/components/Header";

const Layout = ({ children }) => {
  return (
    <SidebarProvider
      style={{
        "--sidebar-width": "250px",
      }}
    >
      <div className="flex w-full h-screen">
        <MainSidebar />
        <SidebarInset>
          <Header />
          <main className="flex flex-1 flex-col gap-4 p-4">{children}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
