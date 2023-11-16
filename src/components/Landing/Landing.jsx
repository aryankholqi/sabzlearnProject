import React from "react";
import "./Landing.css";
import searchIcon from "../../assets/icons/search.svg";
import studentIcon from "../../assets/icons/student.svg";
import courseIcon from "../../assets/icons/course.svg";
import clockIcon from "../../assets/icons/clock.svg";

export default function Landing() {
  return (
    <section className="landing h-[500px] relative">
      <div className="landing-overlay absolute w-full h-full z-10"></div>
      <div className="landing-container w-2/3 mx-auto flex flex-col z-20 text-mainWhite relative text-center p-24 gap-y-6">
        <div className="landing-header">
          <h1 className="text-3xl font-semibold">
            ما به هر قیمتی دوره آموزشی تولید نمی کنیم !
          </h1>
          <p className="mt-1.5">
            با آکادمی سبزلرن، برنامه نویسی رو با خیال راحت یاد بگیر و پیشرفت کن.
          </p>
        </div>
        <div className="landing-search relative w-4/5 mx-auto">
          <input
            type="search"
            className="h-16 rounded-lg w-full mx-auto px-4 outline-none text-black"
            placeholder="چه چیزی دوست داری یاد بگیری ..."
          />
          <img
            src={searchIcon}
            alt=""
            className="bg-mainGreen p-4 rounded-xl absolute left-2 top-2 transition-all hover:opacity-90"
          />
        </div>
        <div className="landing-achivements flex justify-between mt-4">
          <div className="landing-students flex flex-col items-center">
            <img src={studentIcon} alt="" width={50} height={50} />
            <span className="mt-4">31,071</span>
            <p>کاربر توی سبزلرن ثبت نام کردن</p>
          </div>
          <div className="landing-courses flex flex-col items-center">
            <img src={courseIcon} alt="" width={50} height={50} />
            <span className="mt-4">40</span>
            <p>دوره آموزشی داریم</p>
          </div>
          <div className="landing-courses flex flex-col items-center">
            <img src={clockIcon} alt="" width={50} height={50} />
            <span className="mt-4">31,320</span>
            <p>دقیقه آموزش تولید کردیم</p>
          </div>
        </div>
      </div>
    </section>
  );
}
