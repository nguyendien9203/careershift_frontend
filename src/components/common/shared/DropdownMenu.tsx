import React, { useState, useRef, useEffect } from "react";
import Button from "./Button";
import { SubItem } from "../../../types/item";
import { Link } from "react-router-dom";
import Checkbox from "./Checkbox";

interface DropdownMenuProps {
  items: SubItem[];
  buttonText?: string;
  buttonVariant?:
    | "primary"
    | "primary-link"
    | "secondary"
    | "secondary-link"
    | "light"
    | "light-link";
  icon?: string;
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  iconClassName?: string;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  items,
  buttonText,
  buttonVariant = "primary",
  icon,
  size = "medium",
  disabled = false,
  className = "",
  iconClassName = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close the dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item: SubItem) => {
    if (item.onClick) {
      item.onClick();
    }
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        variant={buttonVariant}
        size={size}
        icon={icon}
        onClick={handleButtonClick}
        disabled={disabled}
        className={className}
        iconClassName={iconClassName}
      >
        {buttonText}
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 bg-white shadow-md rounded-[5px] border border-secondary-100 z-10 min-w-[150px] max-w-[300px] w-auto">
          <ul>
            {items.map((item) => (
              <li key={item.id} className="px-2 py-1 text-black text-sm hover:bg-slate-100">
                {item.isCheckbox ? (
                  <Checkbox
                    label={item.label}
                    checked={item.checked || false}
                    onChange={(checked) => item.onChange && item.onChange(checked)}
                  />
                ) : item.path ? (
                  <Link
                    to={item.path}
                    className="flex items-center text-left w-full px-2 py-1 text-black text-sm hover:bg-slate-100"
                  >
                    {item.icon && (
                      <i className={`${item.icon} text-primary-500 mr-2`}></i>
                    )}
                    {item.label}
                  </Link>
                ) : (
                  <button
                    className="flex items-center text-left w-full px-2 py-1 text-black text-sm hover:bg-slate-100"
                    onClick={() => handleItemClick(item)}
                  >
                    {item.icon && (
                      <i className={`${item.icon} text-primary-500 mr-2`}></i>
                    )}
                    {item.label}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
