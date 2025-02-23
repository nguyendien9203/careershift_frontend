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
} from "@/components/ui/sidebar";
import { sideBarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { NavUser } from "@/components/NavUser";
import Image from "next/image";
import Link from "next/link";

const user = {
  name: "DN",
  email: "m@example.com",
  avatar: "/icons/user.svg",
};

const MainSidebar = () => {
  const pathname = usePathname();
  return (
    <Sidebar collapsible="icon" className="border-r flex flex-col h-screen">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild className="md:h-8 md:p-0">
              <Link href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-white">
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
                <Link href={item.route}>
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
                        alt={item.text}
                        height={16}
                        width={16}
                      />
                      <span>{item.title}</span>
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
  );
};

export default MainSidebar;
