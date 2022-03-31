import React from "react";
import Menu from "../Menu/Menu";
import Logo from "../header-our-coffee/headerOurCoffee";
const footer = () => {
  return (
    <>
      <footer className="footer">
        <Menu color="black" align="center" />
        <Logo edition="black" />
      </footer>
    </>
  );
};

export default footer;
