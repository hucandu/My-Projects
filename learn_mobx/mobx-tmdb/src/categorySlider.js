import React, { Component } from "react";
import Slider from "react-slick";

 class CategorySlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
       {
         breakpoint: 1024,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 3,
           infinite: true,
           dots: true
         }
       },
       {
         breakpoint: 600,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 2,
           initialSlide: 2
         }
       },
       {
         breakpoint: 480,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1
         }
       }
     ]
    };
    return (
        <Slider {...settings}>
          <div>
            <img className="category-image-size" src="https://imgc.allpostersimages.com/img/posters/blade-runner-2049-fire-ice_u-L-F9524N0.jpg?src=gp&w=300&h=375"/>
          </div>
          <div>
            <img className="category-image-size" src="https://images-na.ssl-images-amazon.com/images/I/717QDxYBkbL._SY606_.jpg"/>
          </div>
          <div>
            <img className="category-image-size" src="http://wwwcdn.howdesign.com/wp-content/uploads/a44ea639e2a22cf9.jpg"/>
          </div>
          <div>
            <img className="category-image-size" src="http://www.joblo.com/posters/images/full/venompostertransform.jpg"/>
          </div>
          <div>
            <img className="category-image-size" src="http://www.joblo.com/posters/images/full/venompostertransform.jpg"/>
          </div>
          <div>
            <img className="category-image-size" src="https://theultralinx.com/.image/t_share/MTQzOTkyMTExNDkzMDk2NjA4/3-honest-movie-posters-2016-editionjpg.jpg"/>
          </div>
        </Slider>
    );
  }
}

export default CategorySlider;
