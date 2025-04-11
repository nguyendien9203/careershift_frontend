import React from "react";
import { Link } from "react-router-dom";

import { SubItem } from "../../../types/item";

interface SubMenuProps {
  items: SubItem[];
  handleItemClick?: (id: string) => void;
  handleLogout?: (event: React.MouseEvent) => void;
}

const SubMenu: React.FC<SubMenuProps> = ({ items, handleItemClick, handleLogout }) => {
  return (
    <div className="absolute w-full left-0 bg-white lg:shadow-md rounded-[5px] py-2 px-2 sm:px-6 lg:px-0 z-50">
      {items.map((item) => (
        <Link
          key={item.id}
          to={item.path || "/"}
          className="block px-2 py-1 text-black text-sm hover:bg-slate-100"
          onClick={(e) => {
            if (item.id === "logout") {
              e.preventDefault();
              handleLogout && handleLogout(e);
            } else {
              handleItemClick && handleItemClick(item.id);
            }
          }}
        >
            {item.icon && <i className={`${item.icon} text-primary-500 mr-2`}></i>}
            {item.label}
        </Link>
      ))}
    </div>
  );
};

export default SubMenu;
