import React, { useEffect } from 'react';

const SuccessPopUp = ({ message }) => {
    useEffect(() => {
        // Auto hide after 3 seconds
        const timer = setTimeout(() => {
            hideMessage();
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    const hideMessage = () => {
        // Implement hide logic here
    };

    return (
        <div className="fixed w-1/3 h-44 bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-2 border-primary-200 flex items-center justify-center rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="80" viewBox="0 0 48 48">
                <path fill="#c8e6c9" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path>
                <path fill="#4caf50" d="M34.586,14.586l-13.57,13.586l-5.602-5.586l-2.828,2.828l8.434,8.414l16.395-16.414L34.586,14.586z"></path>
            </svg>
            <div className='text-gray-700 pl-5'>{message}</div>
        </div>
    );
};

export default SuccessPopUp;
