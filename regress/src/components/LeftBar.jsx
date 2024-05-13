import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/react.svg';

const LeftBar = () => {
  return (
    <aside className="left-bar bg-gray-800 w-64 flex flex-col">
      <div className="w-24 h-24 bg-violet-200 rounded-full flex">
        <img src={logo} alt="Regress Logo" className="justify-center items-center" />
      </div>
      <ul className="flex flex-col">
        <li><Link to="/" className='text-black'>Trang chủ</Link></li>
        <li><Link to="/projects" className='text-black'>Dự án</Link></li>
        <li><Link to="/schedule" className='text-black'>Thời gian biểu</Link></li>
        <li><Link to="/predictions" className='text-black'>Dự đoán</Link></li>
      </ul>
    </aside>
  );
}

export default LeftBar;

