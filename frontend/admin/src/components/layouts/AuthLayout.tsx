import React from "react";

interface AuthLayoutProps {
  logo: string;
  logoName: string;
  instructions: string;
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  logo,
  logoName,
  instructions,
  children,
}) => {
  const isBootstrapIcon = logo.startsWith("bi-");

  return (
    <div className="flex items-center justify-center px-2 sm:px-6 lg:px-8">
      <div className="flex justify-center items-center flex-col gap-y-2 sm:max-w-[480px] w-full p-5 mt-8 sm:mt-[50px]">
        {/* Logo Section */}
        <div className="flex flex-col items-center p-2 gap-y-2">
          {isBootstrapIcon ? (
            <span className="flex items-center justify-center w-8 h-8 p-2 border border-secondary-100 rounded-[5px] text-primary-500">
              <i className={`bi ${logo} text-sm`} aria-hidden="true"></i>
            </span>
          ) : (
            <img src={logo} alt="Logo" className="w-8 h-8" />
          )}
          <h3 className="text-xl font-bold text-black text-center">
            {logoName}
          </h3>
        </div>

        {/* Instructions */}
        <p className="max-w-[300px] w-full text-center text-secondary-700 py-2 px-2">
          {instructions}
        </p>

        {/* Content Section */}
        <div className="max-w-[360px] w-full">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
