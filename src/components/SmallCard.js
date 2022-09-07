import React from "react";
import star from "../images/star.png";

function SmallCard({ imageCard, name, size, material, quantity, price }) {
    return (
        <div className="AllSCard">
            <div className="divInImg">
                <img src={imageCard} />
            </div>

            <div className="infoCard">
                <span className="nameKnife">{name}</span>
                <div className="info">
                    <span className="size">{size}</span>
                    <span className="material">{material}</span>
                </div>
                <div className="raiting">
                    <div>
                        <img src={star} />
                        <img src={star} />
                        <img src={star} />
                        <img src={star} />
                        <img src={star} />
                    </div>
                    <span className="quantityRevios">{quantity} отзывов</span>
                </div>
                <hr />
                <div className="priceAndAnother">
                    <span className="price">{price}</span>
                    <div className="favoritesAndComparison">
                        <i class="fa-solid fa-scale-balanced"></i>
                        <i class="fa-regular fa-heart"></i>
                    </div>
                </div>
                <div className="button">
                    <button>
                        В корзину<i class="fa-solid fa-cart-shopping"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SmallCard;
