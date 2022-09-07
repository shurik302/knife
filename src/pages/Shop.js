import React, { useState } from "react";
import "../stylesheets/Shop.css";
import * as noUiSlider from "nouislider";
import onSlide from "../components/Range.js";

function Shop() {
    /* const [stateMin, setStateMin] = useState(0);
	alles ok
	Ну то й добре 
	на щастя
	const [stateMax, setStateMax] = useState(5000);
	const [stateInputMin, setStateInputMin] = useState(0);
	const [stateInputMax, setStateInputMax] = useState(0);
	function checkedPriceMin(event){
		setStateMin(event.target.value)
	}
	function checkedPriceMax(event){
		setStateMax(event.target.value)
	}
	function checkedPriceInputMin(event){
		setStateInputMin(event.target.value)
	}
	function checkedPriceInputMax(event){
		setStateInputMax(event.target.value)
	}
	function HidePrice(){
		const price = document.querySelector('.priceSelector')
		price.classList.toggle('hide')
	} */
    var slider = document.getElementById("sliderRan");
    noUiSlider.create(slider, {
        start: [20, 80],
        connect: true,
        range: {
            min: 0,
            max: 100,
        },
    });
    return (
        <div className="AllShop">
            <onSlide />
            <link href="nouislider.css" rel="stylesheet"></link>
            <div className="FiltrBlock">
                <div className="infoS">
                    <p>Разделочные ножи</p>
                    <a href="#">Главная</a>
                    <i class="fa-solid fa-chevron-right"></i>
                    <a href="#">Разделочные ножи</a>
                </div>
                <div className="Filtr">
                    <div className="FitrT">
                        <p>Фильтр товаров</p>
                    </div>
                    <div className="Price">
                        <div className="PriceText">
                            <p>Цена</p>
                            <i
                                /* onClick={HidePrice} */ class="fa-solid fa-chevron-up"
                            ></i>
                        </div>
                        {/* <div className='priceSelector'>
							<div className='priceSelect'>
								<input
									onChange={checkedPriceInputMin} 
									value={stateMin}
								/>
								<input
									onChange={checkedPriceInputMax} 
									value={stateMax}
								/>
							</div>
							<div>
								<input 
									type="range" 
									min="0" 
									max="5000" 
									step="1"
									onChange={checkedPriceMin} 
								/>
								<input 
									value={stateMax}
									className='inputRot'
									type="range" 
									min="0" 
									max="5000" 
									step="1"
									onChange={checkedPriceMax} 
								/>
							</div>
							
						</div> */}
                        <div id="sliderRan"></div>
                    </div>
                </div>
            </div>
            <div className="MainShop"></div>
        </div>
    );
}

export default Shop;
