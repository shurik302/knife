import React, { Component } from "react";
import Slider from "react-slick";
import { settingsBlock } from "./Collection";
import SmallCard from "./SmallCard";
import '../stylesheets/Components.css'

export default class SecondItems extends Component {
  render() {
    return (
      <div className='AllBlock'>
        <div className="settingsText">
          <span>{this.props.nameBlock}</span>
          <span>{this.props.textBlock}</span>
          <a href='#'>{this.props.toPageBlock}<i class="fa-solid fa-angle-right"></i></a>
        </div>
        <div className="settingsSlider">
          <style>{cssstyle}</style>
          <Slider {...settingsBlock}>
            <SmallCard />
            <SmallCard />
            <SmallCard />
            <SmallCard />
            <SmallCard />
            <SmallCard />
          </Slider>
        </div>

      </div>
    )
  }
}

const cssstyle = `
.AllBlock .slick-dots li{
    margin: 0px 15px;
}

.slick-next:before, .slick-prev:before {
  content: "";
  font-size: 0;
}

.AllBlock .slick-dots li button {
  font-size: 0;
  line-height: 0;
  width: 20px;
  height: 2px;
  padding: 0;
  background-color: rgba(124, 121, 121, 0.336);
  text-indent: -9999px; //убрать точки
}

.AllBlock li.slick-active button {
background-color: #E8AA31;       
}
`