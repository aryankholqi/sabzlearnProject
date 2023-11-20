import React from "react";
import "./CourseDetailBox.css";

export default function CourseDetailBox({ courseDetails }) {
  const { title, text, icon } = courseDetails;
  return (
    <div className="course-detail-box flex items-center bg-mainWhite p-3 shadow-lg rounded-lg gap-x-4">
      <img src={icon} alt="" className="w-[30px]"/>
      <div className="">
        <p>{title}</p>
        <p>{text}</p>
      </div>
    </div>
  );
}
