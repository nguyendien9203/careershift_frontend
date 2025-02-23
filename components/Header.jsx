"use client";

import React from "react";

import { Separator } from "@/components/ui/separator";
import { sideBarLinks, sidebarConfig } from "@/constants";
import { usePathname } from "next/navigation";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";

const Header = () => {
  const pathname = usePathname();
  const { toggleSidebar } = useSidebar();

  const hasDetailSidebar = Object.keys(sidebarConfig).find((route) =>
    pathname.startsWith(route)
  );
  return (
    <header className="sticky top-0 flex shrink-0 items-center gap-2 border-b bg-background p-4">
      {hasDetailSidebar && (
        <SidebarTrigger className="-ml-1" onClick={toggleSidebar} />
      )}
      {hasDetailSidebar && (
        <Separator orientation="vertical" className="mr-2 h-4" />
      )}
      <h1 className="text-base font-medium">
        {sideBarLinks.find((item) => item.route === pathname)?.title || ""}
      </h1>
    </header>
  );
};

export default Header;
