import React from "react";
import "./ArticleBox.css";

export default function ArticleBox({ article }) {
  const { title, description, img } = article;
  return (
    <div className="article-box shadow-xl">
      <div className="article-img w-[90&] mx-auto h-72">
        <img src={img} alt="" className="h-full w-full" />
      </div>
      <div className="article-content w-[90%] mx-auto">
        <p className="font-extrabold mb-1.5">{title}</p>
        <small className="text-xs">{description}</small>
        <button className="border-mainGreen border-2 text-mainGreen block rounded-md px-2 py-1 text-sm mt-4">
          بیشتر بخوانید
        </button>
      </div>
    </div>
  );
}
