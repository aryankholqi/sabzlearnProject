import React from "react";
import "./LastCourses.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import lastCoursesItems from "./lastCoursesItems";
import CourseBox from "../CourseBox/CourseBox";

export default function LastCourses() {
  return (
    <div className="last-courses mt-6">
      <div className="container">
        <SectionHeader
          fields={{
            title: "جدیدترین دوره ها",
            subTitle: "سکوی پرتاب شما به سمت موفقیت",
            btnText: "تمامی دوره ها",
          }}
        />
        <div className="course-content mt-4">
          <div className="grid grid-cols-3 gap-4">
            {lastCoursesItems.map((course, index) => (
              <CourseBox key={index} course={course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
