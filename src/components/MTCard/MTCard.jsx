import React from "react";
import { IMAGE_PATHW } from "../../services/movie-api";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import "./MTcard.css";
const MTCard = ({ id, title, backdrop_path, poster_path, category }) => {
  const post_url = `${IMAGE_PATHW}${poster_path}`;
  const bg = {
    backgroundImage: `url(${post_url})`,
  };
  const link = `/${category}/${id}`;
  return (
    <Link exact to={link}>
    <div className="mt-card__info">
      <div className="mt-card" style={bg}>
        <button className="btn-outline mt-card__btn">
          <FaPlay />
        </button>
      </div>
     <h3 className="mt-card__title">{title}</h3>
     </div>
    </Link>
  );
};

export default MTCard;
