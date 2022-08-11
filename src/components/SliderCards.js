import React, { Component } from "react";
import Slider from "react-slick";
import SmallCard from '../components/SmallCard';
import KnifeLisa from "../product/KnifeLisa";
import Lantern from "../product/Lantern";
import star from '../images/star.png';
import { targets } from "./Collection";
import '../stylesheets/Components.css';
import { settings } from "./Collection";

export default class MultipleItems extends Component {
  render() {

    const random = targets.sort(() => Math.random() - Math.random())
      .sort(() => true);
    return (
      <div className="SliderCards">
        <style>{cssstyle}</style>
        <div>

        </div>
        <div className="upSlider">
          <h1>{this.props.nameSlider}</h1>
          <a href="#">{this.props.toPage} <i class="fa-solid fa-chevron-right"></i></a>
        </div>

        <Slider {...settings}>

          {targets.map((target, id) => (
            <div>
              <div className='AllSCard'>
                <div className='divInImg'>
                  <img src={target.img} />
                </div>

                <div className='infoCard'>
                  <span className='nameKnife'>{target.name}</span>
                  <div className='info'>
                    <span className='size'>{target.size}</span>
                    <span className='material'>{target.material}</span>
                  </div>
                  <div className='raiting'>
                    <div>
                      <img src={star} />
                      <img src={star} />
                      <img src={star} />
                      <img src={star} />
                      <img src={star} />
                    </div>
                    <span className='quantityRevios'>{target.quantity} отзывов</span>
                  </div>
                  <hr />
                  <div className='priceAndAnother'>
                    <span className='price'>{target.price}</span>
                    <div className='favoritesAndComparison'>
                      <i class="fa-solid fa-heart"></i>
                      <i class="fa-solid fa-scale-balanced"></i>
                    </div>
                  </div>
                  <div className='button'><button>В корзину<i class="fa-solid fa-cart-arrow-down"></i></button></div>
                </div>
              </div>
            </div>

          ))}
        </Slider>
      </div>
    );
  }
}

const cssstyle = `



.SliderCards{
  margin-top:0px;
  height:fit-content;
  margin-top:93px;
}

.SliderCards{
  position:relative;
  max-width:84%;
  margin:auto;
  /* margin-left:7%;
  margin-right:7%; */
}

.SliderCards .slick-dots li{
    margin:0 15px;
}

.SliderCards .slick-dots{
  /* max-width:212px; */
  width:fit-content;
  position:absolute;
  left:50%;
  transform:translateX(-50%);
  /* bottom:-100px; */
}
.slick-next:before, .slick-prev:before {
  content: "";
  font-size: 0;
}
.SliderCards .slick-dots li button {
  font-size: 0;
  line-height: 0;
  width: 20px;
  height: 2px;
  padding: 0;
    /* border-radius: 50%; */
    background-color: rgba(124, 121, 121, 0.336);
    text-indent: -9999px; //убрать точки
}

.SliderCards li.slick-active button {
background-color: #E8AA31;
        
}
`