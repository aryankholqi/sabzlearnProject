import React from "react";
import "./Navbar.css";
import sabzlearnLogo from "../../assets/images/logo/Logo.png";
import { Link } from "react-router-dom";
import arrowIcon from "../../assets/icons/arrow.svg";
import searchIcon from "../../assets/icons/search.svg";
import cartIcon from "../../assets/icons/cart.svg";

export default function Navbar() {
  return (
    <nav className="navbar flex justify-between items-center px-6 py-4">
      <div className="navbar-right flex items-center gap-x-2">
        <img src={sabzlearnLogo} alt="" width={100} />
        <ul className="nav-menu flex items-center gap-x-6 text-sm">
          <li className="nav-menu-item transition-all hover:text-mainGreen">
            <Link to={"#"}>صفحه اصلی</Link>
          </li>
          <li className="nav-menu-item transition-all hover:text-mainGreen">
            <Link to={"#"} className="flex items-center gap-x-2">
              فرانت اند <img src={arrowIcon} />
            </Link>
          </li>
          <li className="nav-menu-item transition-all hover:text-mainGreen">
            <Link to={"#"} className="flex items-center gap-x-2">
              امنیت <img src={arrowIcon} />
            </Link>
          </li>
          <li className="nav-menu-item transition-all hover:text-mainGreen">
            <Link to={"#"} className="flex items-center gap-x-2">
              مقالات <img src={arrowIcon} />
            </Link>
          </li>
          <li className="nav-menu-item transition-all hover:text-mainGreen">
            <Link to={"#"} className="flex items-center gap-x-2">
              پایتون <img src={arrowIcon} />
            </Link>
          </li>
          <li className="nav-menu-item transition-all hover:text-mainGreen">
            <Link to={"#"}>مهارت های نرم</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-left flex items-center gap-x-4">
        <img
          src={searchIcon}
          alt=""
          className="bg-mainGreen p-3 rounded-xl transition-all hover:opacity-90 cursor-pointer"
        />
        <img
          src={cartIcon}
          alt=""
          className="bg-mainGray p-3 rounded-xl transition-all hover:opacity-90 cursor-pointer"
        />
        <button className="bg-mainWhite border-mainGreen border-2 text-mainGreen px-3 py-1 rounded-md transition-all hover:bg-mainGreen hover:text-mainWhite">
          آرین خلقی
        </button>
      </div>
    </nav>
  );
}
