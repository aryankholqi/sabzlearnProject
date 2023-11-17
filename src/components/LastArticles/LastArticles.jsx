import React from "react";
import "./LastArticles.css";
import SectionHeader from "../SectionHeader/SectionHeader";

export default function LastArticles() {
  return (
    <div className="last-articles mt-12">
      <div className="container">
        <SectionHeader fields={{
            title:"جدیدترین مقاله ها",
            subTitle:"پیش به سوی ارتقای دانش",
            btnText:"تمامی مقاله ها"
        }}/>
      </div>
    </div>
  );
}
