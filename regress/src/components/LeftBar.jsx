import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/react.svg";
import avatar from "../assets/avatar.png";

const LeftBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-fit bg-primary">
      <aside className="flex flex-col justify-between w-32 text-white bg-gray-800 left-bar">
        <div className="align-centered">
            <img  src={logo} alt="Regress Logo" className="flex w-4/5 h-4/5 justify-items-center" />
        </div>
        <nav>
          <div className="relative inset-y-0 left-0">
            <ul className="text-left">
              <li>
                <Link to="/">Trang chủ</Link>
              </li>
              <li>
                <Link to="/projects">Dự án</Link>
              </li>
              <li>
                <Link to="/schedule">Thời gian biểu</Link>
              </li>
              <li>
                <Link to="/predictions">Dự đoán</Link>
              </li>
            </ul>
          </div>
          <ul>
            <li>
              <Link to="/personal"></Link>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-violet-200">
                <img src={avatar} className="size-10"></img>
              </div>
            </li>
            <li>
              <Link to="/settings"></Link>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default LeftBar;
