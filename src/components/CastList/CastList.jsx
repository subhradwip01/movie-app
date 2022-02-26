import React, { useState, useEffect } from "react";
import { useGetCreditsQuery, IMAGE_PATHW } from "../../services/movie-api";
import avatar from "../../assets/avatar.jpg"
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "./CastList.css"
const CastList = ({ category, id }) => {
  const { data, isFetching } = useGetCreditsQuery({ category, id });
  const [cast, setCast] = useState();
  useEffect(() => {
    setCast(data);
  }, [data]);
  if (isFetching) {
    return "Loading...";
  }
  console.log(data);
  SwiperCore.use([Autoplay])
  return (
    <div className="casts">
     <Swiper
        module={[Autoplay]}
        grabCursor={true}
        spaceBetween={10}
        slidesPerView={'auto'}
      >
      {data?.cast?.map((c) => (
       <SwiperSlide key={id}>
        <div className="cast-info">
        <div className="cast-img">
          <img
            src={c.profile_path?`${IMAGE_PATHW}${c.profile_path}`:`${avatar}`}
            alt="Loding..."
            srcset=""
          />
          </div>
          <p className="cast-name">{c.name}</p>
          <p className="cast-film-name">{c.character ? `as ${c.character}`:""}</p>
        </div>
        </SwiperSlide>
      ))}
      </Swiper>
    </div>
  );
};

export default CastList;
