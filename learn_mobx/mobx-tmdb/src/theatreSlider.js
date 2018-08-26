import React from "react";
import Slider from "react-slick";
import "./index.css";
import {observer} from "mobx-react";
import './theatreSlider.css'
@observer class TheatreSlider extends React.Component {

  componentDidMount() {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=37385faf2d2e88f3611879acf84ec5dd&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1').then(response => response.json()).then((data) => {
      console.log(data)
      data.results.forEach((images) => {
        this.props.data.theatrePosters.push({'posterPath': images.backdrop_path, 'name': images.title, 'rating': images.vote_average, 'overview': images.overview, 'movieID': images.id});
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
    const banners = () => {

      if (!this.props.data.theatreBannerIsLoading) {
        let banner = this.props.data.theatrePosters.map((data, position) => {
          let overviewSlice = data.overview;
          if (overviewSlice.length > 200) {
            overviewSlice = overviewSlice.slice(0, 200) + '...';
          }

          return <div key={position}>
            <div className="banner-image" style={{
                backgroundImage: 'url(https://image.tmdb.org/t/p/original/' + data.posterPath + ')'
              }}>
              <div className="theatre-heading">
                <h1 className="movie-name">{data.name}</h1>
                <h2 className="movie-overview">{overviewSlice}</h2>
              </div>
              <div className="f-right theatre-poster-rating-box">
                <span className="fa fa-star star-checked"></span>
                <span className="fa fa-star star-checked"></span>
                <span className="fa fa-star star-checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
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
