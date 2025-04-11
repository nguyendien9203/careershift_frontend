import React from "react";

import { MENU_ITEMS } from "../../../constants/menuItems";
import NavItem from "./NavItem";

interface NavBarProps {
  activeItem: string;
  handleItemClick: (id: string) => void;
  handleLogout: (event: React.MouseEvent) => void;
}

const NavBar: React.FC<NavBarProps> = ({ activeItem, handleItemClick, handleLogout }) => {
  return (
    <nav className="flex space-x-2">
      {MENU_ITEMS.map((item) => (
        <NavItem
          key={item.id}
          item={item}
          activeItem={activeItem}
          handleItemClick={handleItemClick}
          handleLogout={handleLogout}
        />
      ))}
    </nav>
  );
};

export default NavBar;
