import React, { useState } from "react";

import SubMenu from "./SubMenu";
import { PROFILE_LINKS } from "../../../constants/profileLinks";
import { useAuth } from "../../../contexts/AuthContext";

interface ProfileMenuProps {
  handleLogout: (event: React.MouseEvent) => void;
}

const ProfileMenu: React.FC<ProfileMenuProps> = ({ handleLogout }) => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState<boolean>(false);

  const { user } = useAuth();

  const handleMouseEnter = () => setIsProfileMenuOpen(true);
  const handleMouseLeave = () => setIsProfileMenuOpen(false);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="flex items-center gap-x-2 px-2 py-1 text-black text-sm bg-white hover:bg-slate-100">
        <i className="bi bi-person-circle text-secondary-700 text-xl"></i>
        <span className="text-black">{user?.name}</span>
        <i
          className={`bi bi-chevron-down transition-transform duration-300 text-xs ${
            isProfileMenuOpen ? "rotate-180" : ""
          }`}
        ></i>
      </button>

      {/* Profile Dropdown */}
      {isProfileMenuOpen && (
        <SubMenu items={PROFILE_LINKS} handleLogout={handleLogout} />
      )}
    </div>
  );
};

export default ProfileMenu;
