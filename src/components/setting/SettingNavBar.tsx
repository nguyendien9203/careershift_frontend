import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MENU_SETTINGS } from "../../constants/menuItems";

const SettingNavBar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>("");
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    let foundItemId = "";

    MENU_SETTINGS.forEach((section) => {
      if (section.subItems.some((sub) => sub.path === currentPath)) {
        foundItemId =
          section.subItems.find((sub) => sub.path === currentPath)?.id || "";
      }
    });

    if (foundItemId) {
      setActiveItem(foundItemId);
    }
  }, [location.pathname]);

  const handleItemClick = (id: string) => {
    setActiveItem(id);
  };

  return (
    <nav className="w-64 bg-white border-r border-gray-200 p-4">
      {MENU_SETTINGS.map((section) => (
        <div key={section.id} className="mb-4">
          {/* Section title */}
          <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2">
            {section.label}
          </h3>

          {/* Section items */}
          {section.subItems.map((item) => (
            <div key={item.id} className="relative">
              <Link
                to={item.path || "#"}
                onClick={() => handleItemClick(item.id)}
                className={`flex items-center gap-x-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                  activeItem === item.id
                    ? "bg-slate-100 text-blue-600"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <i className={`bi ${item.icon} text-blue-500`}></i>
                <span>{item.label}</span>
              </Link>
            </div>
          ))}
        </div>
      ))}
    </nav>
  );
};

export default SettingNavBar;
