import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/react.svg';
import avatar from '../assets/avatar.png';

const LeftBar = () => {
  return (
    <div className='relative absolute inset-y-0 left-0'>
      <aside className="left-bar bg-gray-800 text-white w-32 flex flex-col justify-between">
        <div className="w-12 h-12 bg-violet-200 rounded-full justify-center items-center flex">
          <div className='w-4/5 h-4/5 justify-items-center flex'>
            <img src={logo} alt="Regress Logo" className="w-full" />
          </div>
        </div>
        <nav>
          <div className='relative absolute inset-y-0 left-0'>
            <ul className='text-left'>
              <li><Link to="/">Trang chủ</Link></li>
              <li><Link to="/projects">Dự án</Link></li>
              <li><Link to="/schedule">Thời gian biểu</Link></li>
              <li><Link to="/predictions">Dự đoán</Link></li>
            </ul>
          </div>
          <ul>
            <li>
              <Link to="/personal"></Link>
              <div className="w-12 h-12 bg-violet-200 rounded-full justify-center items-center flex">
                <img src={avatar} className="size-10"></img>
              </div>
            </li>
            <li><Link to="/settings"></Link></li>
          </ul>
        </nav>
      </aside>
    </div>
  );
}

export default LeftBar;

