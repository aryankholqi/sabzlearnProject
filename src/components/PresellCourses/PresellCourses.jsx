import React from "react";
import "./PresellCourses.css";
import SectionHeader from "../SectionHeader/SectionHeader";

export default function PresellCourses() {
  return <div className="presell-courses mt-12">
    <div className="container">
        <SectionHeader fields={{
            title:"دوره های درحال پیش فروش",
            subTitle:"متن تستی"
        }}/>
    </div>
  </div>;
}
