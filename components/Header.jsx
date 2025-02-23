"use client";

import React from "react";

import { Separator } from "@/components/ui/separator";
import { sideBarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { SidebarTrigger } from "@/components/ui/sidebar";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 flex shrink-0 items-center gap-2 border-b bg-background p-4">
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mr-2 h-4" />
      <h1 className="text-base font-medium">
        {sideBarLinks.find((item) => item.route === pathname)?.title || ""}
      </h1>
    </header>
  );
};

export default Header;
