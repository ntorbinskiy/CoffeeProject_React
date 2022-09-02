import React from "react";
import logoWhite from "../../../resources/img/logo/logoWhite2.png";
import logoBlack from "../../../resources/img/logo/logoBlack.png";
import "./Logo.sass"
const Logo = ({edition,style,style2}) => {
  let className = "header_Middle_logo_div";
  if (edition === "black") {
    className += " colorBlack";
  }
  return (
    <>
      <div className="header_Middle_logo" style={style}>
        <div className={className} style={style2}>
          <img
            src={edition==="white" ? logoWhite : logoBlack}
            className="header_Middle_logo_img"
            alt="#"
          />
        </div>
      </div>
    </>
  );
};

export default Logo;
