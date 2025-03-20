import React from "react";

const Spin: React.FC<{ color?: string }> = ({ color = 'currentColor' }) => {
  return (
    <div
      className="animate-spin rounded-full h-3 w-3 border-2 border-solid border-transparent"
      style={{
        borderTopColor: color,
      }}
    ></div>
  );
};

export default Spin;
