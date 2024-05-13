import React from 'react'
import logo from '../assets/react.svg'
import regress from '../assets/regress.svg'


const LoginPage = ({ setLoginLogout }) => {
    setLoginLogout(true)
    console.log(setLoginLogout)
    return (
        <div className='h-screen w-screen flex'>
            <div className="w-5/12 bg-secondary">Logo here
                <img src={regress} alt="Regress Logo" className="w-50 h-50" /></div>
            <div className="w-7/12 flex justify-center items-center bg-white">
                <div className="w-96 rounded-lg">
                    <div className="flex justify-center items-center">
                        <img src={regress} alt="Regress Logo" className="w-12 h-12" />
                        <h2 className="text-2xl font-semibold ml-2">Regress</h2>
                    </div>
                    <form className="mt-4">
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>
                        <div className="mb-4">
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
