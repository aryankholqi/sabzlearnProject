import React from "react";
import "./Breadcrumb.css";
import homeIcon from "../../assets/icons/home.svg";
import { Link, useParams } from "react-router-dom";

export default function Breadcrumb() {
  const params = useParams();
  return (
    <div className="container">
      <div className="breadcrumb bg-mainGray rounded-lg p-3 text-xs lg:text-sm flex items-center gap-x-2">
        <img src={homeIcon} alt="" className="bg-mainWhite p-2 rounded-md" />
        <Link to={"/"}>خانه</Link>
        {">"}
        <Link to={"/category-info/frontend"}>آموزش برنامه نویسی فرانت اند</Link>
        {">"}
        <Link to={"/course-info/frontend"}>{params.courseName}</Link>
      </div>
    </div>
  );
}
