import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL="https://api.themoviedb.org/3"
const API_KEY="2bfaba6b6c952f32467c2d20d08e5d93"


export const IMAGE_PATHW="https://image.tmdb.org/t/p/w500"
export const IMAGE_PATHO="https://image.tmdb.org/t/p/original"

export const catlog={
    movie: 'movie',
    tv: 'tv'
}

export const movieType={
    popular:"popular",
    upcoming:"upcoming",
    top_rated:"top_rated"
}
export const tvType={
    latest:"latest",
    popular:"popular",
    top_rated:"top_rated"
}

export const movieApi=createApi({
    reducerPath:"movieApi",
    baseQuery: fetchBaseQuery({baseUrl:BASE_URL}),
    endpoints: (builder)=>({
        getMoviesOrTvs: builder.query({
            query: ({category,type}) => `/${category}/${type}?api_key=${API_KEY}`
        }),
    })
})

export const {
    useGetMoviesOrTvsQuery,
}=movieApi