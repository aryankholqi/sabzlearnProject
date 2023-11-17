import React from "react";
import "./CourseBox.css";
import teacherIcon from "../../assets/icons/teacher.svg";
import { Rating } from "@mui/material";
import usersIcon from "../../assets/icons/users.svg";

export default function CourseBox({ course }) {
  const { title, teacher, price, students, img } = course;

  return (
    <div className="course-box shadow-xl">
      <div className="course-img">
        <img src={img} alt={title} className="w-full rounded-t-lg" />
      </div>
      <div className="course-content px-3 py-4">
        <p className="text-sm mb-2">{title}</p>
        <div className="flex justify-between items-center mb-2">
          <span className="flex items-center gap-x-1 text-xs flex-1">
            <img src={teacherIcon} alt="" /> {teacher}
          </span>
          <Rating value={4} dir="ltr" size="small"/>
        </div>
        <div className="flex justify-between items-center">
          <span className="flex items-center gap-x-1 text-xs flex-1">
            <img src={usersIcon} alt="" /> {students}
          </span>
          <span>{price}</span>
        </div>
      </div>
    </div>
  );
}
