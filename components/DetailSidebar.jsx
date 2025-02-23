"use client";

import React from "react";
import { Sidebar } from "@components/ui/sidebar";
import { SidebarContent, SidebarHeader } from "./ui/sidebar";

const DetailSidebar = ({ title, content }) => {
  return (
    <Sidebar collapsible="none" className="hidden flex-1 md:flex">
      <SidebarHeader className="gap-3.5 border-b p-4">
        <div className="text-base font-medium text-foreground">{title}</div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup className="px-0">
          <SidebarGroupContent>{content}</SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default DetailSidebar;
