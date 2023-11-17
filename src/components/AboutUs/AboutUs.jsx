import React from "react";
import "./AboutUs.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import aboutUsItems from "./aboutUsItems";
import AboutUsBox from "../AboutUsBox/AboutUsBox";

export default function AboutUs() {
  return (
    <div className="about-us mt-16">
      <div className="container">
        <SectionHeader
          fields={{
            title: "ما چه کمکی بهتون می کنیم؟",
            subTitle: "از اونجایی که آکادمی سبزلرن، یک اکادمی خصوصی هست",
          }}
        />
        <div className="grid grid-cols-2 gap-4 mt-4">
          {aboutUsItems.map((item, index) => (
            <AboutUsBox key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
