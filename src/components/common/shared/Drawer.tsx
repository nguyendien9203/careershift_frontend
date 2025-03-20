import React, { ReactNode } from "react";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
  position?: "left" | "right" | "top" | "bottom";
  className?: string;
  width?: string;
}

const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  children,
  position = "left",
  className = "",
  width = "w-[960px]",
}) => {
  const drawerStyles = {
    left: "left-0 top-0 h-full",
    right: "right-0 top-0 h-full",
    top: "top-0 left-0 w-full",
    bottom: "bottom-0 left-0 w-full",
  };

  const transitionStyles = {
    left: isOpen ? "translate-x-0" : "-translate-x-full",
    right: isOpen ? "translate-x-0" : "translate-x-full",
    top: isOpen ? "translate-y-0" : "-translate-y-full",
    bottom: isOpen ? "translate-y-0" : "translate-y-full",
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-40 ${
          isOpen ? "opacity-50 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* Drawer Content */}
      <div
        className={`${
          position === "left" || position === "right" ? width : "w-full"
        } fixed z-50 bg-white shadow-md transform transition-transform duration-300 ease-in-out ${
          drawerStyles[position]
        } ${transitionStyles[position]}`}
      >
        <button
          className={`absolute top-0 ${
            position === "right"
              ? "-left-[32px] border-r"
              : "-right-[32px] border-l"
          } bg-white text-primary-500 px-2 py-1 border-secondary-100 hover:bg-slate-100 h-8 w-8`}
          onClick={onClose}
        >
          <i className="bi bi-x-lg"></i>
        </button>
        <div className={className}>{children}</div>
      </div>
    </>
  );
};

export default Drawer;
