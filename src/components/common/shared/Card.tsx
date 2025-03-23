import React from "react";

interface CardProps {
  header: React.ReactNode;
  content?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ header, content, footer, className }) => {
  return (
    <div
      className={`card border border-secondary-100 rounded-[5px] p-2 bg-white ${className}`}
    >
      <div className="card-header mb-3">{header}</div>
      <div className="card-body">{content}</div>
      {footer && <div className="card-footer mt-3">{footer}</div>}
    </div>
  );
};

export default Card;
