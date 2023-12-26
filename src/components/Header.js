import React from 'react';

import LoginForm from './LoginForm'; 

const Header = ({ children, user }) => {
    return (
        <div className="bg-gray-900 flex items-center py-10">
            <div className="max-w-md mx-auto w-full">
                <h1 className="text-white text-center text-2xl font-bold mb-5">Image Gallery</h1>
               
                {user ? (
                    <>
                    </>
                ) : (
                    <LoginForm />
                )}
                <div>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Header;
