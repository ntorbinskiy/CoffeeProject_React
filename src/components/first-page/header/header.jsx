
import React from "react";
import Logo from "../../same-comp/header-our-coffee/headerOurCoffee";
import Subtitle from "../../same-comp/Subtitle/Subtitle";
import Menu from "../../same-comp/Menu/Menu";
import Footer from "../../same-comp/footer/footer";
import coff1 from "../../../resources/img/main/COFF1.png";
import coff2 from "../../../resources/img/main/COFF2.png";
import coff3 from "../../../resources/img/main/COFF3.png";
import "./header.sass";
const header = () => {
  return (
    <>
      <section className="header">
        <div className="container ">
          <Menu color="white"/>
          <div className="header_Middle">
            <div className="header_Middle_Evr">
              Everything You Love About Coffee
            </div>
            <Logo edition="white" />
            <div className="header_Make header_Make_try">
              We make every day full of energy and taste
            </div>
            <div className="header_Make ">Want to try our beans?</div>
            <button className="header_Make_btn">More</button>
          </div>
        </div>
      </section>
      <section className="Extreme">
        <Subtitle text="About Us" />
        <Logo edition="black" />
        <div className="Extreme Extreme_text">
          Extremity sweetness difficult behaviour he of. On disposal of as
          landlord horrible. Afraid at highly months do things on at. Situation
          recommend objection do intention so questions. As greatly removed
          calling pleased improve an. Last ask him cold feel met spot shy want.
          Children me laughing we prospect answered followed. At it went is song
          that held help face.
          <br />
          <br />
          Now residence dashwoods she excellent you. Shade being under his bed
          her, Much read on as draw. Blessing for ignorant exercise any yourself
          unpacked. Pleasant horrible but confined day end marriage. Eagerness
          furniture set preserved far recommend. Did even but nor are most gave
          hope. Secure active living depend son repair day ladies now.
        </div>
      </section>
      <section className="Ourbest">
        <div className="container">
          <Subtitle text="Our best" />
          <div className="Ourbest_div">
            <div className="Ourbest_div_item">
              <img src={coff1} alt="" className="Ourbest_div_item_img" />
              <div className="Ourbest_div_item_subtitle">Solimo Coffee Beans 2 kg</div>
              <div className="Ourbest_div_item_cost">10.73$</div>
            </div>
            <div className="Ourbest_div_item">
              <img src={coff2} alt="" className="Ourbest_div_item_img" />
              <div className="Ourbest_div_item_subtitle">Presto Coffee Beans 1 kg</div>
              <div className="Ourbest_div_item_cost">15.99$</div>
            </div>
            <div className="Ourbest_div_item">
              <img src={coff3} alt="" className="Ourbest_div_item_img" />
              <div className="Ourbest_div_item_subtitle Ourbest_div_item_subtitle_th">AROMISTICO Coffee 1 kg</div>
              <div className="Ourbest_div_item_cost">6.99$</div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default header;
