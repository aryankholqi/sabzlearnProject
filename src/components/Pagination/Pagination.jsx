import React from "react";
import "./Pagination.css";
import leftArrowIcon from "../../assets/icons/leftArrow.svg";
import rightArrowIcon from "../../assets/icons/rightArrow.svg";

export default function Pagination() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="pagination flex items-center justify-center gap-x-2 mt-8">
      <img
        src={rightArrowIcon}
        alt=""
        className="bg-mainGreen p-3 rounded-md transition-all hover:opacity-90 cursor-pointer"
      />
      {Array.from({ length: array.length / 3 }, (_, index) => (
        <button className="bg-mainGray p-3 rounded-md transition-all hover:opacity-80">{index + 1}</button>
      ))}
      <img
        src={leftArrowIcon}
        alt=""
        className="bg-mainGreen p-3 rounded-md transition-all hover:opacity-90 cursor-pointer"
      />
    </div>
  );
}
