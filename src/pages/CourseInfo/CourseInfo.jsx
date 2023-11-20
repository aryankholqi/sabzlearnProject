import React from "react";
import "./CourseInfo.css";
import Topbar from "../../components/Topbar/Topbar";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
export default function CourseInfo() {
  return (
    <>
      <Topbar />
      <Navbar />
      <Breadcrumb />
      <Footer />
    </>
  );
}
