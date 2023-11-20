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
        <div className="article-content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {lastArticleItems.map((article, index) => (
            <ArticleBox key={index} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}
