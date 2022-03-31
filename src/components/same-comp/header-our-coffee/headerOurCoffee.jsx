import React from "react";
import logoWhite from "../../../resources/img/logo/logoWhite2.png";
import logoBlack from "../../../resources/img/logo/logoBlack.png";
import "./headerOurCoffee.sass"
const headerOurCoffee = ({edition}) => {
  console.log(edition);
  let className = "header_Middle_logo_div";
  if (edition === "black") {
    className += " colorBlack";
  }
  console.log(className);
  return (
    <>
      <div className="header_Middle_logo">
        <div className={className}>
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

export default headerOurCoffee;
