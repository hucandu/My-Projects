import React from "react";
import Slider from "react-slick";
import "./index.css";

class TheatreSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      arrows:false,
      autoplay:true,
      autoplaySpeed:3000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Slider {...settings} >
        <div >
          <div className="banner-image"></div>
        </div>
        <div >
          <div className="banner-image"></div>
        </div>
        <div >
          <div className="banner-image"></div>
        </div>
        <div >
          <div className="banner-image"></div>
        </div>
        <div >
          <div className="banner-image"></div>
        </div>
        <div >
          <div className="banner-image"></div>
        </div>
      </Slider>
    );
  }
}
export default TheatreSlider;
