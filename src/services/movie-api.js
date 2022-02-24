import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL="https://api.themoviedb.org/3"
const API_KEY="2bfaba6b6c952f32467c2d20d08e5d93"


export const IMAGE_PATHW="https://image.tmdb.org/t/p/w500"
export const IMAGE_PATHO="https://image.tmdb.org/t/p/original"

export const category={
    movie: 'movie',
    tv: 'tv'
}

export const movieType={
    popular:"popular"
}

export const movieApi=createApi({
    reducerPath:"movieApi",
    baseQuery: fetchBaseQuery({baseUrl:BASE_URL}),
    endpoints: (builder)=>({
        getMovies: builder.query({
            query: (category) => `/movie/${category}?api_key=${API_KEY}`
        })
    })
})

export const {
    useGetMoviesQuery
}=movieApi