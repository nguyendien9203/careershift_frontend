import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useAuth } from "../../../contexts/AuthContext";
import { MENU_ITEMS } from "../../../constants/menuItems";
import { PROFILE_LINKS } from "../../../constants/profileLinks";
import Logo from "./Logo";
import NavBar from "./NavBar";
import Notification from "./Notification";
import ProfileMenu from "./ProfileMenu";
import MobileMenu from "./MobileMenu";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<string>("");
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();

  useEffect(() => {
    const currentPath = location.pathname;
    const activeMenuItem = [...MENU_ITEMS, ...PROFILE_LINKS].find(
      (item) => item.path === currentPath
    );
    if (activeMenuItem) {
      setActiveItem(activeMenuItem.id);
    }
  }, [location.pathname]);

  const handleItemClick = (id: string) => {
    setActiveItem(id);
  };

  const handleLogout = (event: React.MouseEvent) => {
    event.preventDefault();
    logout();
    navigate("/login");
  };

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full h-[50px] bg-white flex items-center justify-between px-2 sm:px-6 lg:px-8 xl:px-[200px] border-b border-secondary-100 shadow-md">
      {/* Left Content */}
      <div className="flex items-center space-x-2 h-full">
        {/* Logo */}
        <Logo />

        {/* Divide */}
        <div className="h-full border-l border-secondary-100 hidden lg:block"></div>

        {/* Navbar (desktop view) */}
        <div className="hidden lg:block">
          <NavBar
            activeItem={activeItem}
            handleItemClick={handleItemClick}
            handleLogout={handleLogout}
          />
        </div>
      </div>

      {/* Right Content */}
      <div className="flex items-center space-x-2 h-full">
        {/* Divide */}
        <div className="h-full border-l border-secondary-100"></div>

        {/* Notification */}
        <Notification />

        {/* Divide */}
        <div className="h-full border-l border-secondary-100"></div>

        {/* Profile Menu */}
        <div className="hidden lg:block">
          <ProfileMenu handleLogout={handleLogout} />
        </div>

        {/* Menu Icon (for mobile view) */}
        <div className="lg:hidden">
          <button
            onClick={handleMenuToggle}
            className="bg-white hover:bg-slate-100 px-2 py-1"
          >
            <i className={`bi ${isMobileMenuOpen ? "bi-x" : "bi-list"}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <MobileMenu
          activeItem={activeItem}
          handleItemClick={handleItemClick}
          handleLogout={handleLogout}
        />
      )}
    </header>
  );
};

export default Header;
