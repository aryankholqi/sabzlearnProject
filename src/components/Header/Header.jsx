import React from "react";
import "./Header.css";
import Topbar from "../Topbar./Topbar";
import Navbar from "../Navbar/Navbar";
import Landing from "../Landing/Landing";

export default function Header() {
  return (
    <>
      <Topbar />
      <Navbar />
      <Landing />
    </>
  );
}
