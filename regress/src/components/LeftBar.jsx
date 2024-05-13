import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/react.svg';

const LeftBar = () => {
  return (
    <aside className="left-bar">
      <div className="logo">
        <img src={logo} alt="Regress Logo" />
      </div>
      <nav>
        <ul>
          <li><Link to="/">Trang chủ</Link></li>
          <li><Link to="/projects">Dự án</Link></li>
          <li><Link to="/schedule">Thời gian biểu</Link></li>
          <li><Link to="/predictions">Dự đoán</Link></li>
        </ul>
      </nav>
    </aside>
  );
}

export default LeftBar;

