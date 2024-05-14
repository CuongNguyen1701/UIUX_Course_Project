import React from "react";

const InputField = ({ label, type, placeholder, value, onChange }) => {
    return (
        <div className='flex flex-col justify-start pb-7'>
            <label className="flex text-xl font-medium text-gray-700">{label}</label>
            <input type={type} placeholder={placeholder} className="mt-1 w-full bg-white px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
    );
}

export default InputField