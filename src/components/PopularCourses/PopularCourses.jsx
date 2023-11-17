import React from "react";
import "./PopularCourses.css";
import SectionHeader from "../SectionHeader/SectionHeader";

export default function PopularCourses() {
  return (
    <div className="popular-courses mt-12">
      <div className="container">
        <SectionHeader fields={{
            title:"محبوب ترین دوره ها",
            subTitle:"دوره های محبوب براساس امتیاز دانشجوها"
        }}/>
      </div>
    </div>
  );
}
