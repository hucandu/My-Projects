import React from "react";
import Slider from "react-slick";
import {observer} from "mobx-react";
import '../css/theatreSlider.css';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
@observer class TheatreSlider extends React.Component {

  componentDidMount() {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=37385faf2d2e88f3611879acf84ec5dd&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1').then(response => response.json()).then((data) => {
      console.log(data)
      this.props.data.theatrePosters = data.results.map((images) => {
          return {
            'posterPath': images.backdrop_path,
            'name': images.title,
            'rating': images.vote_average,
            'overview': images.overview,
            'movieID': images.id,
            'popularity':images.popularity
          }
      })
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
    const ratingStars = (rating)=>{
      const starsToGlow = Math.floor(rating/10*5);
      let stars = [];
      for(let i=0;i<5;i++){
        stars.push(<span key={i} className={"fa fa-star " + (i<starsToGlow ? "star-checked":"")}></span>)
      }
        return stars;
    }
    const banners = () => {
      if (!this.props.data.theatreBannerIsLoading) {
        let banner = this.props.data.theatrePosters.map((data, position) => {
          let overviewSlice = data.overview;
          if (overviewSlice.length > 200) {
            overviewSlice = overviewSlice.slice(0, 200) + '...';
          }

          return <div key={position}>
            <div className="banner-image" style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${data.posterPath})`
              }}>
              <div className="theatre-heading">
                <h1 className="movie-name">{data.name}</h1>
                <h2 className="movie-overview">{overviewSlice}</h2>
              </div>
              <div className="f-right theatre-poster-rating-box">
                {ratingStars(data.rating)}
              </div>
              <div className="popularity-bar-block">
              <div className="popularity-bar f-left">
              <CircularProgressbar
                percentage={Math.round(data.popularity/300*100)}
                text={`${Math.round(data.popularity/300*100)}%`}
                background
                backgroundPadding={6}
                styles={{
                  background: {
                    fill: '#00a8e1',
                  },
                  text: {
                    fill: '#fff',
                  },
                  path: {
                   stroke: '#fff',
                 },
                  trail: { stroke: 'transparent' },
                }}
                    />
                </div>
                <span className="f-left fa fa-thumbs-up"> like</span>
              </div>
            </div>
          </div>;
        });
        return banner;
      }

    }
    return (<Slider {...settings}>
      {banners()}
    </Slider>);
  }
}
export default TheatreSlider;
