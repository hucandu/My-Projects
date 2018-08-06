import React from "react";
import Slider from "react-slick";
import "./index.css";
import {observer} from "mobx-react";

@observer class TheatreSlider extends React.Component {

  componentWillMount() {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=37385faf2d2e88f3611879acf84ec5dd&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1').then(response => response.json()).then((data) => {
      for (let images in data.results) {
        let posterPath = data.results[images].backdrop_path;
        let name = data.results[images].title;
        let rating = data.results[images].vote_average;
        this.props.data.theatrePosters.push({'posterPath': posterPath, 'name': name, 'rating': rating});
      }
      this.props.data.theatreBannerIsLoading = false
    }).catch(e => console.log(e));
  }

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const banners = ()=>{

      if(!this.props.data.theatreBannerIsLoading){
        let banner = this.props.data.theatrePosters.map((data)=>{
          return  <div><div className="banner-image" style={{backgroundImage: 'url(https://image.tmdb.org/t/p/original/'+data.posterPath+')'}}></div></div>;
        });
        return banner;
    }

  }
    return (
     <Slider {...settings}>
       {banners()}
   </Slider>);
  }
}
export default TheatreSlider;
