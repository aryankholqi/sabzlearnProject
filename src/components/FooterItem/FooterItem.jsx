import React from "react";
import "./FooterItem.css";

export default function FooterItem({ item }) {
  const { title, description } = item;
  return (
    <div className="footer-item">
      <h2 className="footer-title text-lg mb-6 relative z-30">{title}</h2>
      {description}
    </div>
  );
}
