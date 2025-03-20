import React from 'react';

interface PageContentLayoutProps {
    coloumLayout?: "full" | "3-7" | "6-4";
    aside?: React.ReactNode;
    content?: React.ReactNode;
    className?: string;
}

const PageContentLayout: React.FC<PageContentLayoutProps> = ({
    coloumLayout = "full",
    aside, 
    content,
    className = "",
}) => {
  return (
    <div className={className}>
        {coloumLayout === "full" ? (
            <div>{content}</div>
        ) : coloumLayout === "3-7" ? (
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-3">{aside}</div>
                <div className="col-span-9">{content}</div>
            </div>
        ) : coloumLayout === "6-4" ? (
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-8">{content}</div>
              <div className="col-span-4">{aside}</div>
            </div>
        ) : null}
    </div>
  )
}

export default PageContentLayout