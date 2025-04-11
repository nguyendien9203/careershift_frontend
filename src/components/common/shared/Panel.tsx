import React from "react";

interface PanelProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  showBorder?: boolean;
}

const Panel: React.FC<PanelProps> = ({
  title,
  children,
  className,
  showBorder = false,
}) => {
  return (
    <div
      className={` bg-white ${
        showBorder ? "border border-secondary-100 rounded-[5px] shadow-md" : ""
      } ${className}`}
    >
      {title && (
        <h5
          className={`text-xs font-semibold text-black ${
            showBorder ? "p-2 border-b border-secondary-100" : "mb-2"
          }`}
        >
          {title}
        </h5>
      )}
      <div className={`${showBorder ? " p-2" : ""}`}>{children}</div>
    </div>
  );
};

export default Panel;
