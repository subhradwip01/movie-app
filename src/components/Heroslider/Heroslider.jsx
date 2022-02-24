import React, { useState, useEffect } from "react";
import {
  useGetMoviesOrTvsQuery,
  movieType,
  catlog as cat,
} from "../../services/movie-api";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import SliderItem from "./SliderItem";

const Heroslider = () => {
  const [movies, setMovies] = useState([]);
  const category = cat.movie;
  const type = movieType.popular;
  const { data, isFetching } = useGetMoviesOrTvsQuery({category,type});

  SwiperCore.use([Autoplay]);
  let moviesData = [];

  useEffect(() => {
    data?.results?.slice(0, 4).forEach((movie) => {
      let mdata = {
        id: movie.id,
        title: movie.original_title,
        overview: movie.overview,
        backdrop_path: movie.backdrop_path,
        poster_path: movie.poster_path,
      };
      moviesData.push(mdata);
    });

    setMovies(moviesData);
  }, [data]);

  if (isFetching) {
    return "Loading...";
  }

  console.log(movies);
  return (
    <div>
      <Swiper
        module={[Autoplay]}
        // grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
      >
        {movies?.map(({ id, title, overview, backdrop_path, poster_path }) => (
          <SwiperSlide key={id}>
            <SliderItem
              id={id}
              title={title}
              overview={overview}
              backdrop_path={backdrop_path}
              poster_path={poster_path}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Heroslider;
