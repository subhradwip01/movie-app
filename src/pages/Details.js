import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/";
import { FaStar } from "react-icons/fa";
import "./Details.css"
import {
  useGetDetailsQuery,
  IMAGE_PATHO,
  IMAGE_PATHW,
} from "../services/movie-api";
import CastList from "../components/CastList/CastList";
import FeatureList from "../components/FeatureList/FeatureList"
import "./Details.css"
const Details = () => {
  const { category, id } = useParams();
  const { data, isFetching } = useGetDetailsQuery({ category, id });
  const [details, setDetails] = useState([]);

  useEffect(() => {
    setDetails(data);
  }, [data]);

  if (isFetching) {
    return "Loading...";
  }

  const poster_url = `${IMAGE_PATHW}${data?.poster_path}`;
  const backdrop_url = `${IMAGE_PATHO}${data?.backdrop_path}`;
  console.log(details);
  return (
    <>
      {details && (
        <div className="details">
        <div
          className="show-banner"
          style={{
            backgroundImage: `url(${backdrop_url})`,
          }}
        >  
        <div className="show-banner-details">
            <div className="show-poster">
                <img className="show-poster-image" src={poster_url} alt="Loading"/>
            </div>
            <div className="show-info">
                <div className="show-heading">{details.title?details.title:details.name}</div>
                <div className="genres">
                {details?.genres?.map(genre=>(
                    <span className="genre-name">{genre.name}</span>
                ))}
                </div>
                <br/>
                <div className="show-desc">{details.overview}</div>
                <p className="show-rating"><FaStar/><span >{details.vote_average}</span></p>
            </div>
        </div>
        </div>
        <div className="show-cast">
            <h2 className="show-cast__heading">Casts</h2>
            <CastList category={category} id={id}/>
        </div>
        <div className="show-similar">
            <h1>Similar</h1>
            <FeatureList category={category} id={id}/>
        </div>
        </div>
      )}
    </>
  );
};

export default Details;
