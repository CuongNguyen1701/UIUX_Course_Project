import React, { useEffect, useState } from 'react'
import logo from '../assets/react.svg'
import regress from '../assets/regress.svg'
import { Link } from "react-router-dom";
import GoogleButton from '../components/Buttons/GoogleButton'
import FacebookButton from '../components/Buttons/FacebookButton'


const LoginPage = ({ setLoginLogout }) => {
    setLoginLogout(true)
    console.log(setLoginLogout)
    const [isRememberPassword, setRememberPassword] = useState(false);

    // Hàm xử lý sự kiện khi checkbox thay đổi trạng thái
    const handleCheckboxChange = () => {
        setRememberPassword(!isRememberPassword); // Đảo ngược trạng thái của checkbox
    };

    const handleOAuthLogin = (provider) => {
        switch (provider) {
            case "google":
                window.location.href = `https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Ftakeout.google.com%2F%3Fhl%3Dvi&followup=https%3A%2F%2Ftakeout.google.com%2F%3Fhl%3Dvi&hl=vi&ifkv=AaSxoQyTf5uHAch-LVfyGd7uqyutQsdQz-Ootw21hBHlTWD-FmQV6ie8k3H1vyS1kxQHDrLy2VTXbA&osid=1&passive=1209600&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S1443482041%3A1715625096580567&ddm=0`
                break;
            case "facebook":
                window.location.href = `https://www.facebook.com/`
                break;
            default:
                break;
        }
    }
    return (
        <div className='h-screen w-screen flex'>
            <div className="w-5/12 flex justify-center items-center">
                <img src={regress} alt="Regress Logo" className="w-35 h-35" />
            </div>
            <div className="w-7/12 flex justify-center items-center bg-white">
                <div className="flex-col rounded-lg justify-center">
                    <div className="flex justify-start items-center">
                        <h1 className="text-5xl text-gray-700 mb-20">Chào mừng quay trở lại!</h1>
                    </div>
                    <form className='flex-col justify-start'>
                        <div className='flex flex-col justify-start pb-7'>
                            <label className="flex text-xl font-medium text-gray-700">Email</label>
                            <input type="email" placeholder='Email' className="mt-1 w-full bg-white px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>
                        <div className='flex flex-col justify-start pb-3'>
                            <label className="flex text-xl font-medium text-gray-700">Mật khẩu</label>
                            <input type="password" placeholder='Mật khẩu' className="mt-1 w-full bg-white px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>
                        <div className='flex pb-7'>
                            <input type="checkbox" checked={isRememberPassword} onChange={handleCheckboxChange} className="disabled:opacity-75 checked:bg-secondary-300 transition duration-150 ease-in-out" />
                            <label className="pl-2 text-gray-700">Ghi nhớ mật khẩu</label>
                        </div>
                        <button type="submit" className="w-full bg-secondary-300 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mb-5">Đăng nhập</button>
                    </form>
                    <div className='flex justify-end text-gray-700 text-l mb-4'>
                        <Link to="./for_got_password">Bạn quên mật khẩu?</Link>
                    </div>
                    <div className='flex justify-center pb-5'>
                        <div className='text-gray-700 text-xl pr-2'>Chưa có tài khoản? </div>
                        <Link to="./signup" className=' text-gray-700 text-xl underline '> Đăng ký ngay</Link>
                    </div>

                    <div className='text-gray-700 text-xl pb-5'>--- Hoặc ---</div>
                    <div className='flex'>
                        <GoogleButton onClick={() => handleOAuthLogin("google")} />
                        <FacebookButton onClick={() => handleOAuthLogin("facebook")} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage
