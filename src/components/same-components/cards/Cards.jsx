import React from 'react';
import img2 from "../../../resources/img/second/lookfor.png";
import "./Cards.sass";
const Cards = () => {
    return (
        <>
         <section className="Cards">
				<div className="Cards_item">
					<img
						src={img2}
						alt=""
						className="Cards_item_img"
					/>
					<div className="Cards_item_title">AROMISTICO Coffee 1 kg</div>
					<div className="Cards_item_country">Brazil</div>
					<div className="Cards_item_cost">6.99$</div>
				</div>
				<div className="Cards_item">
					<img
						src={img2}
						alt=""
						className="Cards_item_img"
					/>
					<div className="Cards_item_title">AROMISTICO Coffee 1 kg</div>
					<div className="Cards_item_country">Kenya</div>
					<div className="Cards_item_cost">6.99$</div>
				</div>
				<div className="Cards_item">
					<img
						src={img2}
						alt=""
						className="Cards_item_img"
					/>
					<div className="Cards_item_title">AROMISTICO Coffee 1 kg</div>
					<div className="Cards_item_country">Columbia</div>
					<div className="Cards_item_cost">6.99$</div>
				</div>
				<div className="Cards_item">
					<img
						src={img2}
						alt=""
						className="Cards_item_img"
					/>
					<div className="Cards_item_title">AROMISTICO Coffee 1 kg</div>
					<div className="Cards_item_country">Brazil</div>
					<div className="Cards_item_cost">6.99$</div>
				</div>
				<div className="Cards_item">
					<img
						src={img2}
						alt=""
						className="Cards_item_img"
					/>
					<div className="Cards_item_title">AROMISTICO Coffee 1 kg</div>
					<div className="Cards_item_country">Brazil</div>
					<div className="Cards_item_cost">6.99$</div>
				</div>
				<div className="Cards_item">
					<img
						src={img2}
						alt=""
						className="Cards_item_img"
					/>
					<div className="Cards_item_title">AROMISTICO Coffee 1 kg</div>
					<div className="Cards_item_country">Brazil</div>
					<div className="Cards_item_cost">6.99$</div>
				</div>
			</section>   
        </>
    );
};

export default Cards;