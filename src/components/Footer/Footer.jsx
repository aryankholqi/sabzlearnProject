import React from "react";
import "./Footer.css";
import footerItems from "./footerItems";
import FooterItem from "../FooterItem/FooterItem";

export default function Footer() {
  return (
    <div className="footer mt-12">
      <div className="footer-container relative container bg-mainGray grid grid-cols-3 gap-x-3 p-6 rounded-lg">
        {footerItems.map((item, index) => (
          <FooterItem key={index} item={item} />
        ))}
      </div>
      <div className="footer-copyright bg-mainGray text-center mt-12 py-6">
        <p className="text-sm">
          کلیه حقوق برای آکادمی آموزش برنامه نویسی سبزلرن محفوظ است.
        </p>
      </div>
    </div>
  );
}
