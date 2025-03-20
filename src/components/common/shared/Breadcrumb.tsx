import React from "react";
import { Link } from "react-router-dom";

import { SubItem } from "../../../types/item";
import { MENU_ITEMS } from "../../../constants/menuItems";

interface BreadcrumbProps {
  items: SubItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="breadcrumb" className="mb-3">
      <ol className="flex items-center text-xs text-secondary-700">
        {items.map((item, index) => (
          <li key={item.id} className="flex items-center">
            {item.path ? (
              <Link
                to={item.path}
                className="text-primary-500 hover:bg-slate-100"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-secondary-700">{item.label}</span>
            )}
            {index < items.length - 1 && (
              <span className="mx-2 text-secondary-700">
                <i className="bi bi-chevron-right"></i>
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export const generateBreadcrumb = (path: string) => {
  const breadcrumbItems: SubItem[] = [];

  MENU_ITEMS.forEach((menuItem) => {
    if (menuItem.path === path) {
      breadcrumbItems.push({
        id: menuItem.id,
        label: menuItem.label,
        path: menuItem.path,
      });
    } else {
      menuItem.subItems.forEach((subItem) => {
        if (subItem.path === path) {
          breadcrumbItems.push({
            id: menuItem.id,
            label: menuItem.label,
            path: menuItem.path,
          });
          breadcrumbItems.push({
            id: subItem.id,
            label: subItem.label,
            path: undefined,
          });
        }
      });
    }
  });

  return breadcrumbItems;
};

export default Breadcrumb;
