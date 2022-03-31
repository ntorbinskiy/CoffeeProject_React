import React from "react";
import logoWhite from "../../../resources/img/logo/logoWhite.png";
import logoBlack from "../../../resources/img/logo/logoBlack2.png"
import "./Menu.sass";
const Menu = ({color,align}) => {
    let className = "Menu_link_item";
    let className2 = "Menu_link_item Menu_link_item_logo";
    let className3 = "Menu_link";
    if(color==="black") {
        className+=" black"
    }
    if(align==="center") {
      className2+= " center";
      className3 += " flex";
    }
  return (
    <>
      <div className="Menu">
        <div className={className3}>
          <a href="/#">
            <img
              src={color==="black" ? logoBlack : logoWhite}
              alt="#"
              className={className2}
            />
          </a>
          <a href="/#" className={className}>
            Coffee house
          </a>
          <a href="/#" className={className}>
            Our coffee
          </a>
          <a href="/#" className={className}>
            For your pleasure
          </a>
        </div>
      </div>
    </>
  );
};

export default Menu;
