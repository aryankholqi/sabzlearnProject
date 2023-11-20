import React, { useState } from "react";
import "./Navbar.css";
import sabzlearnLogo from "../../assets/images/logo/Logo.png";
import { Link } from "react-router-dom";
import arrowIcon from "../../assets/icons/arrow.svg";
import searchIcon from "../../assets/icons/search.svg";
import cartIcon from "../../assets/icons/cart.svg";

export default function Navbar() {
  const [isSubMenuOpen, setisSubMenuOpen] = useState({
    frontEnd: false,
    security: false,
    articles: false,
    python: false,
  });

  return (
    <nav className="navbar flex justify-between items-center px-6 py-4">
      <div className="navbar-right flex items-center gap-x-2 flex-1">
        <img src={sabzlearnLogo} alt="" width={100} />
        <ul className="nav-menu text-sm list-none flex items-center relative gap-x-2">
          <li className="nav-menu-item transition-all hover:text-mainGreen">
            <Link to={"#"} className="p-4 text-center">
              صفحه اصلی
            </Link>
          </li>
          <li
            className="nav-menu-item p-4"
            onMouseEnter={() =>
              setisSubMenuOpen((prevState) => ({
                ...prevState,
                frontEnd: true,
              }))
            }
            onMouseLeave={() =>
              setisSubMenuOpen((prevState) => ({
                ...prevState,
                frontEnd: false,
              }))
            }
          >
            <Link
              to={"#"}
              className="flex items-center gap-x-2 text-center transition-all hover:text-mainGreen"
            >
              فرانت اند <img src={arrowIcon} />
            </Link>
            <ul
              className={`bg-mainWhite z-40 w-[200px] absolute top-12 rounded-lg ${
                isSubMenuOpen.frontEnd ? "block" : "hidden"
              }`}
            >
              <li className="block p-4">
                <Link to={"#"} className="mb-4">
                  آموزش Html
                </Link>
              </li>
              <li className="block p-4">
                <Link to={"#"}>آموزش Css</Link>
              </li>
              <li className="block p-4">
                <Link to={"#"}>آموزش بوت استرپ</Link>
              </li>
              <li className="block p-4">
                <Link to={"#"}>آموزش جاوا اسکریپت</Link>
              </li>
            </ul>
          </li>
          <li
            className="nav-menu-item p-4"
            onMouseEnter={() =>
              setisSubMenuOpen((prevState) => ({
                ...prevState,
                security: true,
              }))
            }
            onMouseLeave={() =>
              setisSubMenuOpen((prevState) => ({
                ...prevState,
                security: false,
              }))
            }
          >
            <Link
              to={"#"}
              className="flex items-center gap-x-2 text-center transition-all hover:text-mainGreen"
            >
              امنیت <img src={arrowIcon} />
            </Link>
            <ul
              className={`bg-mainWhite z-40 w-[200px] absolute top-12 rounded-lg  ${
                isSubMenuOpen.security ? "block" : "hidden"
              }`}
            >
              <li className="block p-4">
                <Link to={"#"} className="mb-4">
                  نقشه راه امنیت
                </Link>
              </li>
              <li className="block p-4">
                <Link to={"#"}>شبکه با گرایش امنیت</Link>
              </li>
              <li className="block p-4">
                <Link to={"#"}>لینوکس با گرایش امنیت</Link>
              </li>
              <li className="block p-4">
                <Link to={"#"}>آموزش هکر قانونمند</Link>
              </li>
            </ul>
          </li>
          <li
            className="nav-menu-item p-4"
            onMouseEnter={() =>
              setisSubMenuOpen((prevState) => ({
                ...prevState,
                articles: true,
              }))
            }
            onMouseLeave={() =>
              setisSubMenuOpen((prevState) => ({
                ...prevState,
                articles: false,
              }))
            }
          >
            <Link
              to={"#"}
              className="flex items-center gap-x-2 text-center transition-all hover:text-mainGreen"
            >
              مقالات <img src={arrowIcon} />
            </Link>
            <ul
              className={`bg-mainWhite z-40 w-[200px] absolute top-12 rounded-lg  ${
                isSubMenuOpen.articles ? "block" : "hidden"
              }`}
            >
              <li className="block p-4">
                <Link to={"#"} className="mb-4">
                  اچ تی ام ال
                </Link>
              </li>
              <li className="block p-4">
                <Link to={"#"}>بوت استرپ</Link>
              </li>
              <li className="block p-4">
                <Link to={"#"}>پروژه های برنامه نویسی</Link>
              </li>
              <li className="block p-4">
                <Link to={"#"}>تست نفوذ و امنیت وب</Link>
              </li>
            </ul>
          </li>
          <li
            className="nav-menu-item p-4"
            onMouseEnter={() =>
              setisSubMenuOpen((prevState) => ({
                ...prevState,
                python: true,
              }))
            }
            onMouseLeave={() =>
              setisSubMenuOpen((prevState) => ({
                ...prevState,
                python: false,
              }))
            }
          >
            <Link
              to={"#"}
              className="flex items-center gap-x-2 text-center transition-all hover:text-mainGreen"
            >
              پایتون <img src={arrowIcon} />
            </Link>
            <ul
              className={`bg-mainWhite z-40 w-[200px] absolute top-12 rounded-lg  ${
                isSubMenuOpen.python ? "block" : "hidden"
              }`}
            >
              <li className="block p-4">
                <Link to={"#"} className="mb-4">
                  دوره آموزش پایتون
                </Link>
              </li>
              <li className="block p-4">
                <Link to={"#"}>پروژه های کاربردی با پایتون</Link>
              </li>
              <li className="block p-4">
                <Link to={"#"}>ترفند های کاربردی با پایتون</Link>
              </li>
              <li className="block p-4">
                <Link to={"#"}>متخصص جنگو</Link>
              </li>
            </ul>
          </li>
          <li className="nav-menu-item p-4">
            <Link to={"#"} className="p-4 text-center transition-all hover:text-mainGreen">
              مهارت های نرم
            </Link>
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
