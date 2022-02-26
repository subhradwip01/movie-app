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
    popular:"popular",
    on_the_air:"on_the_air",
    top_rated:"top_rated"
}

export const movieApi=createApi({
    reducerPath:"movieApi",
    baseQuery: fetchBaseQuery({baseUrl:BASE_URL}),
    endpoints: (builder)=>({
        getShows: builder.query({
            query: ({category,type,page,id}) => !id? `/${category}/${type}/?api_key=${API_KEY}&page=${page}` : `${category}/${id}/similar?api_key=${API_KEY}`
        }),
        getDetails:builder.query({
            query: ({category,id})=>`/${category}/${id}?api_key=${API_KEY}`
        }),
        getCredits:builder.query({
            query:({category,id})=>`${category}/${id}/credits?api_key=${API_KEY}`
        }),
    })
})

export const {
    useGetShowsQuery,
    useGetDetailsQuery,
    useGetCreditsQuery
}=movieApi