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
          className={`py-3 pl-2 pr-10 sm:text-sm md:text-md xl:text-l 2xl:text-2xl rounded-xl text-black-100 hover:bg-primary-100 ${current_loc.pathname == dest &&
            "bg-primary-200 hover:bg-primary-200"
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
    <aside className="fixed top-0 left-0 z-20 flex flex-col w-1/5 h-screen px-10 py-12 bg-white border-r-2 border-gray-200 left-bar">
      <Link to="/" className="flex self-center w-20 h-20">
        <img src={logo} alt="Regress Logo" />
      </Link>
      <nav className="flex flex-col justify-between h-full pt-10">
        <div className="relative left-0">
          <ul className="flex flex-col gap-2 text-left">
            { }
            <NavButton name="Trang chủ" dest="/" current_loc={location} />
            <NavButton name="Dự án" dest="/projects" current_loc={location} />
            <NavButton
              name="KPI"
              dest="/kpi"
              current_loc={location}
            />
          </ul>
        </div>
        <Link
          to="/personal"
          className="flex flex-row items-center self-center pr-5 text-black rounded-full w-fit h-fit bg-secondary-100 lg:text-sm xl:text-md 2xl:text-lg hover:bg-secondary-200 hover:text-white-100"
        >
          <img
            src={avatar}
            className="m-1 rounded-full size-20 md:size-12 lg:size-14 xl:size-16 2xl:size-20"
          ></img>
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
