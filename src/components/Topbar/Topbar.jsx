import React from "react";
import { Link } from "react-router-dom";
import "./Topbar.css";
import mailIcon from "../../assets/icons/mail.svg";
import phoneIcon from "../../assets/icons/phone.svg";

export default function Topbar() {
  return (
    <div className="topbar flex items-center justify-center lg:justify-between flex-wrap gap-y-6 gap-x-4 bg-mainGray px-6 py-5">
      <div className="topbar-right flex items-center gap-x-4 text-xs md:text-sm">
        <Link to={"#"} className="">
          آموزش Html
        </Link>
        <Link to={"#"} className="">
          آموزش Css
        </Link>
        <Link to={"#"} className="">
          آموزش جاوا اسکریپت
        </Link>
        <Link to={"#"} className="">
          آموزش بوت استرپ
        </Link>
        <Link to={"#"} className="">
          آموزش پایتون
        </Link>
        <Link to={"#"} className="">
          آموزش ری اکت
        </Link>
        <span className="">20,000 تومان</span>
      </div>
      <div className="topbar-left flex items-center gap-x-4">
        <div className="flex items-center gap-x-2">
          <Link to={"#"} className="text-sm">
            sabzlearn@gmail.com
          </Link>
          <img src={mailIcon} alt="" />
        </div>
        <div className="flex items-center gap-x-2">
          <span className="text-sm">09114482673</span>
          <img src={phoneIcon} alt="" />
        </div>
      </div>
    </div>
  );
}
