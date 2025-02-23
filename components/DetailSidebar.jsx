"use client";

import React from "react";
import { Sidebar, SidebarContent } from "@/components/ui/sidebar";

const DetailSidebar = ({ children }) => {
  if (!children) return null;
  return (
    <Sidebar
      collapsible="none"
      className="hidden flex-1 border-r md:flex h-screen"
    >
      <SidebarContent>{children}</SidebarContent>
    </Sidebar>
  );
};

export default DetailSidebar;
