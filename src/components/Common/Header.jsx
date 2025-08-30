import React from "react";
import Topbar from "../Layout/Topbar";
import Navbar from "./Navbar";
import CardDrawer from "../Layout/CardDrawer";

const Header = () => {
  return (
    <header className="border-b border-gray-300">
      {/* Topbar */}
      <Topbar />
      {/* Navbar */}
      <Navbar />
    </header>
  );
};

export default Header;
