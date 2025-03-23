import React, { useState } from "react";
import { Link } from "react-router-dom";

import { MENU_ITEMS } from "../../../constants/menuItems";
import { PROFILE_LINKS } from "../../../constants/profileLinks";
import SubMenu from "./SubMenu";

interface MobileMenuProps {
  activeItem: string;
  handleItemClick: (id: string) => void;
  handleLogout: (event: React.MouseEvent) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  activeItem,
  handleItemClick,
  handleLogout,
}) => {
  const [openItemId, setOpenItemId] = useState<string | null>(null);

  const toggleSubItems = (id: string) => {
    setOpenItemId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="fixed top-[50px] right-0 w-full sm:w-[40%] bg-white shadow-md py-2 px-2 sm:mx-6 lg:hidden z-50">
      {/* Mobile Menu Items */}
      <div className="flex flex-col items-center my-2 space-y-4">
        {[...MENU_ITEMS, ...PROFILE_LINKS].map((item) => (
          <div key={item.id} className="w-full">
            <Link
              to={item.path || ""}
              className={`px-2 py-1 w-full flex items-center gap-x-2 ${
                activeItem === item.id
                  ? "bg-slate-100 text-primary-500"
                  : "text-black bg-white hover:bg-slate-100"
              }`}
              onClick={(e) => {
                if (item.subItems.length) {
                  e.preventDefault();
                  toggleSubItems(item.id);
                } else if (item.id === "logout") {
                  e.preventDefault();
                  handleLogout && handleLogout(e);
                } else {
                  handleItemClick && handleItemClick(item.id);
                }
              }}
            >
              {/* Icon */}
              <i className={`bi ${item.icon} text-primary-500`}></i>

              {/* Label */}
              <span>{item.label}</span>

              {/* Submenu toggle icon */}
              {item.subItems.length > 0 && (
                <i
                  className={`bi bi-chevron-down transition-transform duration-300 text-xs ml-auto ${
                    openItemId === item.id ? "rotate-180" : ""
                  }`}
                ></i>
              )}
            </Link>

            {/* Dropdown for subMenu */}
            {item.subItems.length > 0 && openItemId === item.id && (
              <SubMenu
                items={item.subItems}
                handleItemClick={handleItemClick}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
