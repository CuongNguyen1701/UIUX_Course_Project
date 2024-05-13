import { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import avatar from "../assets/avatar.png";
import { useLocation } from "react-router-dom";
const NavButton = ({ name, dest, current_loc }) => {
  return (
    <li>
      <Link to={dest}>
        <div
          className={`py-3 pl-2 pr-10 text-3xl rounded-xl text-black-100 hover:bg-primary-100 ${
            current_loc.pathname == dest
              ? "bg-primary-200 hover:bg-primary-200"
              : ""
          }`}
        >
          {name}
        </div>
      </Link>
    </li>
  );
};
const LeftBar = () => {
  const location = useLocation();
  useEffect(() => {
    console.log(location);
  }, [location]);
  return (
    <aside className="fixed top-0 left-0 flex flex-col h-screen px-10 py-5 bg-white w-fit left-bar">
      <Link to="/" className="flex self-center w-24 h-24">
        <img src={logo} alt="Regress Logo" />
      </Link>
      <nav className="flex flex-col justify-between h-full pt-10">
        <div className="relative left-0">
          <ul className="flex flex-col gap-1 text-left">
            {}
            <NavButton name="Trang chủ" dest="/" current_loc={location} />
            <NavButton
              name="Thời gian biểu"
              dest="/schedule"
              current_loc={location}
            />
            <NavButton name="Dự án" dest="/projects" current_loc={location} />
            <NavButton
              name="Dự đoán"
              dest="/predictions"
              current_loc={location}
            />
          </ul>
        </div>
        <Link
          to="/personal"
          className="flex flex-row items-center self-center pr-5 text-black rounded-full w-fit h-fit bg-secondary-100"
        >
          <img src={avatar} className="size-20"></img>
          Kuan Min LEE
        </Link>
        {/* <li>
            <Link to="/settings"></Link>
          </li> */}
      </nav>
    </aside>
  );
};

export default LeftBar;
