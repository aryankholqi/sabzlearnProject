import React from "react";
import { Link } from "react-router-dom";
import "./Topbar.css";
import mailIcon from "../../assets/icons/mail.svg";
import phoneIcon from "../../assets/icons/phone.svg";

export default function Topbar() {
  return (
    <div className="topbar flex items-center justify-between bg-mainGray px-6 py-5">
      <div className="topbar-right flex items-center gap-x-4">
        <Link to={"#"} className="text-sm">آموزش Html</Link>
        <Link to={"#"} className="text-sm">آموزش Css</Link>
        <Link to={"#"} className="text-sm">آموزش جاوا اسکریپت</Link>
        <Link to={"#"} className="text-sm">آموزش بوت استرپ</Link>
        <Link to={"#"} className="text-sm">آموزش پایتون</Link>
        <Link to={"#"} className="text-sm">آموزش ری اکت</Link>
        <span className="text-sm">20,000 تومان</span>
      </div>
      <div className="topbar-left flex items-center gap-x-4">
        <div className="flex items-center gap-x-2">
          <Link to={"#"} className="text-sm">sabzlearn@gmail.com</Link>
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
