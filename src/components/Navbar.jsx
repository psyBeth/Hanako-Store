import React, { useContext, useState } from "react";
import logo from "../assets/hanako-logo.png";
import { closeNavbar, openNavbar, logoutIcon } from "../helper/icons";
import { NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
const navigation = [
  {
    title: "Home",
    path: "/dashboard",
  },
  {
    title: "Products",
    path: "/dashboard/products",
  },
  {
    title: "About",
    path: "/dashboard/about",
  },
];

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { logout } = useContext(AuthContext);
  const location = useLocation();
  //! The useLocation hook returns the current location as an object. This object contains the location path from the router, location parameters, and location status.
  console.log(location);

  return (
    <nav className="bg-labelColor md:text-sm font-syne">
      <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
        <div className="flex items-center justify-between py-2 md:block">
          <a
            href="https://github.com/psyBeth"
            target="true"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <img src={logo} width={70} height={70} alt="hanako" />
            <span className="text-main font-[700] text-[25px] hover:text-blueish">
              Hanako Store
            </span>
          </a>
          {/** icon should be hidden after MD screens */}
          <div className="md:hidden">
            <button
              className="menu-btn text-main hover:text-white"
              onClick={() => setShow(!show)}
            >
              {show ? closeNavbar : openNavbar}
            </button>
          </div>
        </div>
        <div
          className={`${show ? "flex flex-col pb-2" : "hidden"
            } flex-1 items-center md:flex md:flex-row`}
        >
          <ul className="space-y-6 md:flex md:space-x-6 md:space-y-0 text-main font-[600] text-[18px]">
            {navigation.map((item) => (
              <li
                key={item.title}
                className="text-main font-[600] text-[18px] flex justify-center"
              >
                <NavLink
                  to={item.path}
                  className={`block hover:bg-main font-[500] text-[18px]  rounded-full py-2 px-4 hover:text-yellowish ${location.pathname === item.path ? "underline scale-150" : ""
                    }`}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
            <NavLink
              to="/"
              onClick={logout}
              className="flex items-center justify-center gap-x-1 py-2 px-4 font-[600] text-[18px] text-main hover:bg-main hover:text-blueish active:bg-gray-900 rounded-full md:inline-flex"
            >
              Logout {logoutIcon}
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;