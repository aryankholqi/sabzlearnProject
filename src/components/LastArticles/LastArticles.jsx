import React from "react";
import "./LastArticles.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import lastArticleItems from "./lastArticleItems";
import ArticleBox from "../ArticleBox/ArticleBox";

export default function LastArticles() {
  return (
    <div className="last-articles mt-12">
      <div className="container">
        <SectionHeader
          fields={{
            title: "جدیدترین مقاله ها",
            subTitle: "پیش به سوی ارتقای دانش",
            btnText: "تمامی مقاله ها",
          }}
        />
        <div className="article-content grid grid-cols-3 gap-x-4 mt-4">
          {lastArticleItems.map((article, index) => (
            <ArticleBox key={index} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}
