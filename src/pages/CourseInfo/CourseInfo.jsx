import React from "react";
import "./CourseInfo.css";
import Topbar from "../../components/Topbar/Topbar";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import jsPoster from "../../assets/images/courses/js_project.png";
import telegramIcon from "../../assets/icons/telegram.svg";
import twitterIcon from "../../assets/icons/twitter.svg";
import facebookIcon from "../../assets/icons/facebook.svg";
import courseDetailItems from "../../components/CourseDetailBox/courseDetailItems";
import CourseDetailBox from "../../components/CourseDetailBox/CourseDetailBox";
import studentIcon from "../../assets/icons/student.svg";

export default function CourseInfo() {
  return (
    <>
      <Topbar />
      <Navbar />
      <Breadcrumb />
      <div className="container">
        <div className="course-info grid grid-cols-1 lg:grid-cols-2 items-start gap-6 mt-6">
          <div className="course-info-right flex-1">
            <small className="bg-secondaryGreen text-mainGreen px-2 py-1 rounded-md">
              آموزش برنامه نویسی فرانت اند
            </small>
            <h1 className="text-lg font-bold my-4">
              آموزش ۲۰ کتابخانه جاوا اسکریپت برای بازار کار
            </h1>
            <p className="text-sm">
              امروزه کتابخانه‌ها کد نویسی را خیلی آسان و لذت بخش تر کرده اند. به
              قدری که حتی امروزه هیچ شرکت برنامه نویسی پروژه های خود را با
              Vanilla Js پیاده سازی نمی کند و همیشه از کتابخانه ها و فریمورک های
              موجود استفاده می کند. پس شما هم اگه میخواید یک برنامه نویس عالی
              فرانت اند باشید، باید کتابخانه های کاربردی که در بازار کار استفاده
              می شوند را به خوبی بلد باشید
            </p>
            <div className="flex gap-2 mt-6">
              <img src={telegramIcon} alt="" />
              <img src={twitterIcon} alt="" />
              <img src={facebookIcon} alt="" />
            </div>
          </div>
          <div className="course-info-left flex-1">
            <video src="" poster={jsPoster} className="w-full rounded-xl" />
          </div>
        </div>
        <div className="course-main grid grid-cols-12 gap-x-4 mt-6">
          <div className="course-main-right col-span-8">
            <div className="course-main-detail-box grid grid-cols-3 gap-6">
              {courseDetailItems.map((item, index) => (
                <CourseDetailBox courseDetails={item} key={index} />
              ))}
            </div>
          </div>
          <div className="course-main-left col-span-4">
            <div className="course-attention-status bg-mainWhite p-5 rounded-lg">
              <p className="bg-mainGreen p-3 text-mainWhite flex justify-center items-center gap-x-1 rounded-lg">
                <img src={studentIcon} alt="" />
                دانشجوی دوره هستید
              </p>
            </div>
          </div>
          <div className="course-main-right col-span-4"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}
