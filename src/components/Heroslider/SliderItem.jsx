import React ,{useState}from "react";
import { IMAGE_PATHO, IMAGE_PATHW,useGetVideosQuery } from "../../services/movie-api";
import "./SlideItem.css";
import { useHistory } from "react-router-dom";
import Modal from "../Modal/Modal";
import { Video } from "../Iframe/Iframe";
import { FaSadCry } from "react-icons/fa";

const SliderItem = ({ id, title, overview, backdrop_path, poster_path }) => {
  const poster_url = `${IMAGE_PATHW}${poster_path}`;
  const backdrop_url = `${IMAGE_PATHO}${backdrop_path}`;
  const [isActive,setIsActive]=useState(false)
  const bg = {
    backgroundImage: `url(${backdrop_url})`,
  };
  const history=useHistory()
  const seeDeatilshandler=()=>{
    history.push(`/movie/${id}`)
  }
  const setModal=()=>{
    setIsActive(!isActive)
  }
  const onCloseHandler=()=>{
    setIsActive(!isActive)
  }

  return (
    <div className="movie-slide__item" id={`movie_${id}`} style={bg}>
      <div className="movie-details">
        <div className="movie-data">
          <h1 className="movie-heading">{title}</h1>
          <p className="movie-desc">{overview}</p>
          <button className="btn-outline" style={{backgroundColor:"#ff0000",boxShadow:"rgb(255 0 0) -1px 0px 19px 0px" , marginRight:"30px", border:"none"}} onClick={setModal} >Watch trailer</button>
          <button className="btn-outline" onClick={seeDeatilshandler}>See Details</button>
        </div>
        <div className="movie-poster">
          <img className="movie-poster__img" src={poster_url} alt="" />
        </div>
      </div>
      {isActive && <TrailerModal id={id} onCloseTrailer={onCloseHandler}/>}
      
    </div>
  );
};

export default SliderItem;

const TrailerModal=({id,onCloseTrailer})=>{
  const {data,isFetching}=useGetVideosQuery({
      category:"movie",
      id
  })
  if(isFetching){
    return "Loading..."
  }
  if(data?.results?.length<0){
    return <Modal onClose={onCloseTrailer}><FaSadCry/> Sorry! We have not fond any trailer</Modal>
  }
  const item=data?.results[0]
  return (
    <Modal onClose={onCloseTrailer}><Video key={item.id} vkey={item.key} vname={item.name}/></Modal>
  )
}