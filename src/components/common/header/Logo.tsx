import React from "react";
import { Link } from "react-router-dom";

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center gap-x-2 mr-2 h-full">
      <img src="/assets/logo.png" alt="Logo" className="w-8 h-8" />
      <h1 className="text-xl font-bold text-black text-center">CareerShift</h1>
    </Link>
  );
};

export default Logo;
