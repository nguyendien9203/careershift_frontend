import React from "react";

import Breadcrumb from "../components/common/shared/Breadcrumb";
import Button from "../components/common/shared/Button";
import { SubItem } from "../types/item";

interface AppBarLayoutProps {
  title: string;
  subtitle?: string | React.ReactNode;
  breadcrumb?: SubItem[];
  actions?: React.ReactNode[];
  onBack?: () => void;
  showBorder?: boolean;
}

const AppBarLayout: React.FC<AppBarLayoutProps> = ({
  title,
  subtitle,
  breadcrumb,
  actions,
  onBack,
  showBorder = false,
}) => {
  return (
    <div className="bg-white">
      {/* Breadcrumd */}
      {breadcrumb && <Breadcrumb items={breadcrumb} />}

      <div
        className={`flex items-center justify-between ${
          showBorder
            ? "border border-secondary-100 shadow-md rounded-[5px] h-[80px] px-2"
            : "h-auto"
        } mb-3`}
      >
        {/* Left Section */}
        <div className="flex items-center h-full">
          {onBack && (
            <>
              <Button
                variant="light-link"
                icon="bi-chevron-left"
                onClick={onBack}
                className=" hover:bg-slate-100 h-full pr-2"
              />
              <div className="h-full border-l border-secondary-100 pr-2"></div>
            </>
          )}
          <div className="flex flex-col flex-grow gap-y-2">
            <h3 className="text-base font-semibold text-black">{title}</h3>
            {subtitle && (
              <div className="text-xs text-secondary-700">{subtitle}</div>
            )}
          </div>
        </div>

        {/* Right section */}
        <div className="flex space-x-2">{actions}</div>
      </div>
    </div>
  );
};

export default AppBarLayout;
