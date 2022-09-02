import React from "react";
import Menu from "../menu/Menu";
import Logo from "../logo/Logo";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <Menu color="black" align="center"/>
        <Logo edition="black" style={{"marginTop": "30px", "marginBottom" : "20px"}}/>
      </footer>
    </>
  );
};

export default Footer;
