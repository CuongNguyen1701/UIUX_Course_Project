import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import avatar from "../assets/avatar.png";
const NavButton = ({ name, dest }) => {
  return (
    <li>
      <Link to={dest}>
        <div className="py-2 pl-2 pr-10 font-bold rounded-lg text-black-100 hover:bg-primary-200">
          {name}
        </div>
      </Link>
    </li>
  );
};
const LeftBar = () => {
  return (
    <aside className="fixed top-0 left-0 flex flex-col h-screen px-10 py-5 bg-white w-fit left-bar">
      <Link to="/" className="flex self-center w-20 h-20">
        <img src={logo} alt="Regress Logo" />
      </Link>
      <nav className="flex flex-col justify-between h-full pt-10">
        <div className="relative left-0">
          <ul className="flex flex-col gap-1 text-left">
            <NavButton name="Trang chủ" dest="/" />
            <NavButton name="Dự án" dest="/projects" />
            <NavButton name="Thời gian biểu" dest="/schedule" />
            <NavButton name="Dự đoán" dest="/predictions" />
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
  );
};

export default LeftBar;
