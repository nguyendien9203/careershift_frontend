"use client";

import { sideBarLinks } from "@/constants";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Sidebar = ({ session }) => {
  const pathname = usePathname();
  return (
    <div className="sidebar">
      <div>
        <div className="logo flex justify-center">
          <Image src="/icons/logo.svg" height={36} width={36} alt="logo" />
        </div>

        <div className="flex-1">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center flex-1 gap-5 h-dvh">
            {sideBarLinks.map((link) => {
              const isSelected = pathname === link.route;

              return (
                <Link href={link.route} key={link.route}>
                  <div
                    className={cn(
                      "link flex justify-center items-center p-2 rounded-lg transition-all",
                      isSelected && "bg-black shadow-sm"
                    )}
                  >
                    <div className="relative size-5">
                      <Image
                        src={link.img}
                        alt={link.text}
                        fill
                        className={`${
                          isSelected ? "brightness-0 invert" : ""
                        }  object-contain`}
                      />
                    </div>
                  </div>
                </Link>
              );
            })}

            {/* <div className="p-2">
              <Image
                src={"/icons/user.svg"}
                width={20}
                height={20}
                alt="User Avatar"
                className="rounded-full"
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
