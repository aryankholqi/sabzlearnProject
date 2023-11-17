import React from "react";
import "./SectionHeader.css";
import leftArrow from "../../assets/icons/leftArrow.svg";

export default function SectionHeader({ fields }) {
  const { title, subTitle, btnText } = fields;

  return (
    <div className="section-header flex justify-between items-center">
      <div className="section-header-right relative">
        <h2 className="bg-mainGreen inline-block">{title}</h2>
        <small className="block">{subTitle}</small>
      </div>
      {btnText?.length > 0 && (
        <div className="section-header-left">
          <button className="bg-mainGreen text-mainWhite flex gap-x-2 items-center rounded-md px-2 py-1">
            {btnText} <img src={leftArrow} alt="" />
          </button>
        </div>
      )}
    </div>
  );
}
