import React from "react";
import "./Index.css";
import Header from "../../components/Header/Header";
import LastCourses from "../../components/LastCourses/LastCourses";
import AboutUs from "../../components/AboutUs/AboutUs";

export default function Index() {
  return (
    <>
      <Header />
      <LastCourses />
      <AboutUs />
    </>
  );
}
