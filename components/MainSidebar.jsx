"use client";

import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { sideBarLinks, sidebarConfig } from "@/constants";
import { usePathname } from "next/navigation";
import { NavUser } from "@/components/NavUser";
import Image from "next/image";
import Link from "next/link";
import DetailSidebar from "@/components/DetailSidebar";

const user = {
  name: "DN",
  email: "m@example.com",
  avatar: "/icons/user.svg",
};

const MainSidebar = () => {
  const pathname = usePathname();
  const { state } = useSidebar();

  const detailSidebar = Object.keys(sidebarConfig).find((route) =>
    pathname.startsWith(route)
  );

  return (
    <div className="flex flex-row">
      <Sidebar
        collapsible="none"
        className="!w-[48px] border-r flex flex-col items-center justify-center"
      >
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild className="md:h-8 md:p-0">
                <Link href="/">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-sidebar-primary text-white">
                    <Image
                      src="/icons/logo.svg"
                      height={16}
                      width={16}
                      alt="logo"
                      className="invert"
                    />
                  </div>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent className="px-1.5 md:px-0">
              <SidebarMenu>
                {sideBarLinks.map((item) => (
                  <Link href={item.route} key={item.route}>
                    <SidebarMenuItem>
                      <SidebarMenuButton
                        tooltip={{
                          children: item.title,
                          hidden: false,
                        }}
                        isActive={pathname === item.route}
                        className="px-2.5 md:px-2"
                      >
                        <Image
                          src={item.img}
                          alt={item.title}
                          height={16}
                          width={16}
                        />
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </Link>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
          <NavUser user={user} />
        </SidebarFooter>
      </Sidebar>
      {detailSidebar && state === "expanded" && (
        <DetailSidebar>{sidebarConfig[detailSidebar]}</DetailSidebar>
      )}
    </div>
  );
};

export default MainSidebar;
