import React, { useEffect, useState } from 'react'
import logo from '../assets/react.svg'
import regress from '../assets/regress.svg'



const LoginPage = ({ setLoginLogout }) => {
    setLoginLogout(true)
    console.log(setLoginLogout)
    return (
        <div className='h-screen w-screen flex justify-start items-center '>
            <div className="w-5/12 h-screen flex justify-start items-center ">
                <img src={regress} alt="Regress Logo" className="w-35 h-35" />
            </div>
            <div className="w-7/12 h-screen flex justify-center items-center bg-white">
                <div className="rounded-lg">
                    <div className="flex justify-start items-center">
                        <h1 className="text-2xl font-semibold ml-2">Chào mừng quay trở lại!</h1>
                    </div>
                    <form>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Mật khẩu</label>
                            <input type="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>
                        <button type="submit" className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Đăng nhập</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginPage
