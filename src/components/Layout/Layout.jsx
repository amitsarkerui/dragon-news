import React from "react";
import NavTop from "../../NavTop/NavTop";
import Navbar from "../../Navbar/Navbar";
import Home from "../../Home/Home";

const Layout = () => {
  return (
    <div>
      <NavTop></NavTop>
      <Navbar></Navbar>
      <Home></Home>
    </div>
  );
};

export default Layout;
