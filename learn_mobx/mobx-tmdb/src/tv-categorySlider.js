import React, {
  Component
} from "react";
import Slider from "react-slick";
import {observer} from "mobx-react";

@observer class TVCategorySlider extends Component {

  componentDidMount() {
    fetch('https://api.themoviedb.org/3/tv/popular?api_key=37385faf2d2e88f3611879acf84ec5dd&language=en-US&page=1').then((response)=> response.json())
    .then((jResponse)=> {
        jResponse.results.forEach((images)=>{
          this.props.data.mostPopularTv.push(
            {
              'posterPath':images.poster_path
            }
          );
        })
        this.props.data.popularTvIsLoading = false;
    }).catch((e)=>{console.log(e)});
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [{
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
    const renderOnLoad = ()=>{
      if(!this.props.data.popularTvIsLoading){
          return this.props.data.mostPopularTv.map((data)=>{
            return <div><img className="category-image-size" src = {`https://image.tmdb.org/t/p/w500/${data.posterPath}`}></img></div>
          })
      }
    }
    return ( <Slider { ...settings} >
      {renderOnLoad()}
      </Slider>
    );
  }
}

export default TVCategorySlider;
