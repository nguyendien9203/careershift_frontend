import React from 'react';

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
    children
}) => {
    const isBootstrapIcon = logo.startsWith('bi-');

  return (
    <div className='flex items-center justify-center px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-center items-center flex-col gap-y-2.5 sm:max-w-[480px] w-full p-5 mt-8 sm:mt-[100px]'>

            {/* Logo Section */}
            <div className='flex flex-col items-center p-2.5 gap-y-2.5'>
                {isBootstrapIcon ? (
                    <span className='flex items-center justify-center w-10 h-10 p-2.5 border border-secondary-100 rounded-[5px] text-primary-500'>
                        <i className={`bi ${logo} text-xl`} aria-hidden="true"></i>
                    </span>
                ) : (
                    <img src={logo} alt='Logo' className='w-10 h-10' />
                )}
                <h3 className='text-2xl font-bold text-black text-center'>{logoName}</h3>
            </div>

            {/* Instructions */}
            <p className='max-w-[300px] w-full text-center text-secondary-700 text-base font-normal pt-2.5 px-2.5 pb-5'>{instructions}</p>

            {/* Content Section */}
            <div className='max-w-[440px] w-full'>{children}</div>
        </div>
    </div>
  )
}

export default AuthLayout