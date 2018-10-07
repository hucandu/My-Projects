import React, {
  Component
} from "react";
import Slider from "react-slick";
import {observer} from "mobx-react";
import {Link} from 'react-router-dom';
import '../css/category-slider.css';

@observer class CategorySlider extends Component {

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/${this.props.type}/popular?api_key=37385faf2d2e88f3611879acf84ec5dd&include_adult=true&language=en-US&page=1`).then((response)=> response.json())
    .then((jResponse)=> {
        console.log(jResponse)
        this.props.data.mostPopular[this.props.type] = jResponse.results.map((images)=>{
            return {
              'posterPath':images.poster_path,
              'rating':images.vote_average,
              'genreList':images.genre_ids,
              'id':images.id
            }
        })
    }).catch((e)=>{console.log(e)});
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 1,
      responsive: [
        {
            breakpoint: 1900,
            settings: {
              slidesToShow: 7,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
        {
            breakpoint: 1367,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
        {
            breakpoint: 1280,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    };
    const renderOnLoad = ()=>{
          const genre = require('../DataStore/genre.json');
          const genreList = (id,position)=>genre.genres.map((data)=> data.id===id?data.name:null).filter((data)=>data!==null)
          return this.props.data.mostPopular[this.props.type].map((data,position)=>{
            return <Link to={`/${this.props.type}/${data.id}`} key={position}><div className="category-image p-relative">
            <img src = {`https://image.tmdb.org/t/p/w200/${data.posterPath}`} alt="Not Available"></img>
            <div ket={position} className="category-image-content">
              <h1>{data.rating}</h1>
              <h3>{genreList(data.genreList[0])}</h3>
            </div>
            </div></Link>
          })
    }
    return ( <Slider { ...settings} >
      {renderOnLoad()}
      </Slider>
    );
  }
}

export default CategorySlider;
