import React from "react";

const Notification: React.FC = () => {
  return (
    <button className="relative hover:bg-slate-100 px-2 py-1">
      <i className="bi bi-bell text-secondary-700"></i>
      {/* Notification badge */}
      <span className="absolute top-1 right-2 bg-red-500 text-white rounded-full w-2 h-2 text-[8px] flex items-center justify-center">
        5
      </span>
    </button>
  );
};

export default Notification;
