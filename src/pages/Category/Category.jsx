import React from "react";
import "./Category.css";
import Topbar from "../../components/Topbar/Topbar";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import gridIcon from "../../assets/icons/grid.svg";
import alignLeftIcon from "../../assets/icons/alignLeft.svg";
import searchIcon from "../../assets/icons/search.svg";
import CourseBox from "../../components/CourseBox/CourseBox";
import lastCoursesItems from "../../components/LastCourses/lastCoursesItems";
import Pagination from "../../components/Pagination/Pagination";

export default function Category() {
  return (
    <>
      <Topbar />
      <Navbar />
      <div className="container">
        <div className="category-tools shadow-xl p-4 rounded-lg flex items-center justify-between my-6">
          <div className="category-tools-right flex items-center gap-x-2">
            <img src={gridIcon} alt="" className="bg-mainBlue p-3 rounded-md" />
            <img
              src={alignLeftIcon}
              alt=""
              className="border-2 p-3 rounded-md"
            />
            <select className="border-2 rounded-md w-1/6 text-center flex-1 p-1.5">
              <option value="default">مرتب سازی پیش فرض</option>
              <option value="popular">مرتب سازی براساس محبوبیت</option>
              <option value="rate">مرتب سازی براساس امتیاز</option>
              <option value="latest">مرتب سازی براساس آخرین</option>
              <option value="lowest">مرتب سازی براساس ارزانترین</option>
              <option value="highest">مرتب سازی براساس گرانترین</option>
            </select>
          </div>
          <div className="category-tools-left relative">
            <input
              type="search"
              placeholder="جستجوی دوره ..."
              className="border-2 p-3 rounded-md w-full outline-none"
            />
            <img
              src={searchIcon}
              alt=""
              className="bg-mainBlue p-2 rounded-md absolute left-2 top-2.5"
            />
          </div>
        </div>
        <div className="category-courses grid grid-cols-3 gap-4">
          {lastCoursesItems.slice(0, 3).map((course, index) => (
            <CourseBox course={course} key={index} />
          ))}
        </div>
        <Pagination />
      </div>
      <Footer />
    </>
  );
}
