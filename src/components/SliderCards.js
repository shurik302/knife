import React, { Component } from "react";
import Slider from "react-slick";
import SmallCard from '../components/SmallCard';
import KnifeLisa from "../product/KnifeLisa";
import Lantern from "../product/Lantern";
import star from '../images/star.png';
import { targets } from "./Collection";
import '../stylesheets/Components.css';
import { settings } from "./Collection";
import '../stylesheets/Components.css'

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
                      <i class="fa-solid fa-scale-balanced"></i>
                      <i class="fa-regular fa-heart"></i>
                    </div>
                  </div>
                  <div className='button'><button>В корзину<i class="fa-solid fa-cart-shopping"></i></button></div>
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

.slick-list{
  z-index:1;
}
.slick-slider{
  z-index:1;
}

.slick-slide{
  z-index:2;
  width:95%;
}


.SliderCards{
  margin-top:0px;
  height:485px;
  margin-top:93px;
  position:relative;
  max-width:84%;
  margin:auto;
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