import React, { Component } from "react";
import Slider from "react-slick";
import '../stylesheets/Components.css'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      cssEase: 'ease-in-out',
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 530,
          settings: {
            autoplay: false,
            dots: false,
          }
        }
      ]
    };
    return (
      <div className="AllSlide">
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <style>{cssstyle}</style>
        <Slider {...settings}>

          <div className="firstDivSlide">
            <span className="title">Интернет магазин сертифицированных</span><br />
            <span className="titleBott">златоусовских ножей</span><br />
            <span className="allDescription"><span className="descriptionSlider">Добро пожаловать на официальный сайт «ЗЛАТМАКС»! В нашем магазине </span><br />представлен наиболее широкий выбор Златоустовских ножей от Златоустовских <br />Оружейных Фабрик и компаний, мы являемся официальными поставщиками.</span>
            <a href="#" className="TitleButton">Подробнее</a>
          </div>
          <div className="firstDivSlide">
            <span className="title">Интернет магазин сертифицированных</span><br />
            <span className="titleBott">златоусовских ножей</span><br />
            <span className="allDescription"><span className="descriptionSlider">Добро пожаловать на официальный сайт «ЗЛАТМАКС»! В нашем магазине </span><br />представлен наиболее широкий выбор Златоустовских ножей от Златоустовских <br />Оружейных Фабрик и компаний, мы являемся официальными поставщиками.</span>
            <a href="#" className="TitleButton">Подробнее</a>
          </div>
          <div className="firstDivSlide">
            <span className="title">Интернет магазин сертифицированных</span><br />
            <span className="titleBott">златоусовских ножей</span><br />
            <span className="allDescription"><span className="descriptionSlider">Добро пожаловать на официальный сайт «ЗЛАТМАКС»! В нашем магазине </span><br />представлен наиболее широкий выбор Златоустовских ножей от Златоустовских <br />Оружейных Фабрик и компаний, мы являемся официальными поставщиками.</span>
            <a href="#" className="TitleButton">Подробнее</a>
          </div>
          <div className="firstDivSlide">
            <span className="title">Интернет магазин сертифицированных</span><br />
            <span className="titleBott">златоусовских ножей</span><br />
            <span className="allDescription"><span className="descriptionSlider">Добро пожаловать на официальный сайт «ЗЛАТМАКС»! В нашем магазине </span><br />представлен наиболее широкий выбор Златоустовских ножей от Златоустовских <br />Оружейных Фабрик и компаний, мы являемся официальными поставщиками.</span>
            <a href="#" className="TitleButton">Подробнее</a>
          </div>

        </Slider>
      </div>
    );
  }
}

const cssstyle = `

.AllSlide .slick-dots li{
    margin: 0px 15px;
}

.AllSlide .slick-dots{
  max-width:212px;

}
.slick-next:before, .slick-prev:before {
  content: "";
  font-size: 0;
}
.AllSlide .slick-dots li button {
  font-size: 0;
  line-height: 0;
  width: 20px;
  height: 2px;
  padding: 0;
    /* border-radius: 50%; */
    background-color: rgba(124, 121, 121, 0.336);
    text-indent: -9999px; //убрать точки
}

.AllSlide li.slick-active button {
background-color: #E8AA31;
        
}
`