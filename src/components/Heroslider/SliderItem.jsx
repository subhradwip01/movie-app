import React from "react";
import { IMAGE_PATHO, IMAGE_PATHW } from "../../services/movie-api";
import "./SlideItem.css";

const SliderItem = ({ id, title, overview, backdrop_path, poster_path }) => {
  const poster_url = `${IMAGE_PATHW}${poster_path}`;
  const backdrop_url = `${IMAGE_PATHO}${backdrop_path}`;
  const bg = {
    backgroundImage: `url(${backdrop_url})`,
  };

  return (
    <div className="movie-slide__item" id={`movie_${id}`} style={bg}>
      <div className="movie-details">
        <div className="movie-data">
          <h1 className="movie-heading">{title}</h1>
          <p className="movie-desc">{overview}</p>
        </div>
        <div className="movie-poster">
          <img className="movie-poster__img" src={poster_url} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SliderItem;
