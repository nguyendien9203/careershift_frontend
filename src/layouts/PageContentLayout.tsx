import React from "react";

interface PageContentLayoutProps {
  columnLayout?: "full" | "3-7" | "6-4";
  aside?: React.ReactNode;
  content?: React.ReactNode;
  className?: string;
}

const PageContentLayout: React.FC<PageContentLayoutProps> = ({
  columnLayout = "full",
  aside,
  content,
  className = "",
}) => {
  return (
    <div className={className}>
      {columnLayout === "full" ? (
        <div>{content}</div>
      ) : columnLayout === "3-7" ? (
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-3">{aside}</div>
          <div className="col-span-9">{content}</div>
        </div>
      ) : columnLayout === "6-4" ? (
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-8">{content}</div>
          <div className="col-span-4">{aside}</div>
        </div>
      ) : null}
    </div>
  );
};

export default PageContentLayout;
