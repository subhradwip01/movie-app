import React, { useState, useEffect } from "react";
import { useGetShowsQuery } from "../../services/movie-api";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import MTCard from "../MTCard/MTCard";
import "swiper/css";
import "./FeatureList.css"

const MovieTvList = ({ category, type ,id }) => {
  const { data, isfetching } = useGetShowsQuery({ category, type,id });
  const [list, setList] = useState([]);
  useEffect(() => {
    const items = data?.results?.map((item) => ({
      id: item.id,
      title: item.original_title?item.original_title : item.name,
      backdrop_path: item.backdrop_path,
      poster_path: item.poster_path,
    }));
    setList(items);
  }, [data]);
  SwiperCore.use([Autoplay]);
  console.log("list",list);

  if (isfetching) {
    return "Loading...";
  }
  console.log(data)
  return (
    <div className="mt-list">
      <Swiper
        module={[Autoplay]}
        grabCursor={true}
        spaceBetween={10}
        slidesPerView={'auto'}
      >
        {list?.map(({id,title,backdrop_path,poster_path})=>(
          <SwiperSlide key={id}>
            <MTCard id={id} title={title}  backdrop_path={backdrop_path} poster_path={poster_path} category={category}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieTvList;
