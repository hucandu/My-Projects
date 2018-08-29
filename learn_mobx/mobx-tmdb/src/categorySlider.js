import React, {
  Component
} from "react";
import Slider from "react-slick";
import {observer} from "mobx-react";
import './category-slider.css';

@observer class CategorySlider extends Component {

  componentDidMount() {
    fetch('https://api.themoviedb.org/3/tv/popular?api_key=37385faf2d2e88f3611879acf84ec5dd&language=en-US&page=1').then((response)=> response.json())
    .then((jResponse)=> {
        console.log(jResponse)
        jResponse.results.forEach((images)=>{
          this.props.data.mostPopularTv.push(
            {
              'posterPath':images.poster_path,
              'rating':images.vote_average,
              'genreList':images.genre_ids
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
      responsive: [
        {
            breakpoint: 1080,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 5,
              infinite: true,
              dots: true
            }
          },
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
    const renderOnLoad = ()=>{
      if(!this.props.data.popularTvIsLoading){
          const genre = require('./DataStore/genre.json');
          const genreList = (id)=>genre.genres.map((data)=> data.id===id?data.name:null).filter((data)=>data!==null)
          return this.props.data.mostPopularTv.map((data,position)=>{
            return <div className="category-image p-relative" key={position}>
            <img src = {`https://image.tmdb.org/t/p/w200/${data.posterPath}`} alt="Not Available"></img>
            <div className="category-image-content">
              <h1>{data.rating}</h1>
              <h3>{genreList(data.genreList[0])}</h3>
            </div>
            </div>
          })
      }
    }
    return ( <Slider { ...settings} >
      {renderOnLoad()}
      </Slider>
    );
  }
}

export default CategorySlider;
