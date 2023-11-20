import React from "react";
import "./AboutUsBox.css";

export default function AboutUsBox({ item }) {
  const { title, description, icon } = item;
  return (
    <div className="about-us-box h-28 sm:h-36 lg:h-28 flex items-center gap-x-2 shadow-lg p-4 rounded-lg bg-white">
      <img src={icon} alt="" width={50} />
      <div className="about-us-content">
        <h2 className="text-xl">{title}</h2>
        <small>{description}</small>
      </div>
    </div>
  );
}
