import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Item } from "../../../types/item";
import SubMenu from "./SubMenu";

interface NavItemProps {
  item: Item;
  activeItem: string;
  handleItemClick: (id: string) => void;
  handleLogout: (event: React.MouseEvent) => void;
}

const NavItem: React.FC<NavItemProps> = ({
  item,
  activeItem,
  handleItemClick,
  handleLogout,
}) => {
  const [isNavItemOpen, setIsNavItemOpen] = useState<boolean>(false);

  const handleMouseEnter = () => setIsNavItemOpen(true);
  const handleMouseLeave = () => setIsNavItemOpen(false);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        to={item.path || ""}
        onClick={() => handleItemClick(item.id)}
        className={`flex items-center gap-x-2 px-2 py-1 h-ful text-sm ${
          activeItem === item.id
            ? "bg-slate-100 text-primary-500"
            : "text-black bg-white hover:bg-slate-100"
        }`}
      >
        {/* Icon */}
        <i className={`bi ${item.icon} text-primary-500`}></i>

        {/* Label */}
        <span>{item.label}</span>

        {/* Submenu toggle icon */}
        {item.subItems.length > 0 && (
          <i
            className={`bi bi-chevron-down transition-transform duration-300 text-xs ${
              isNavItemOpen ? "rotate-180" : ""
            }`}
          ></i>
        )}
      </Link>

      {/* Dropdown for subMenu */}
      {item.subItems.length > 0 && isNavItemOpen && (
        <SubMenu items={item.subItems} handleItemClick={handleItemClick} />
      )}
    </div>
  );
};

export default NavItem;
