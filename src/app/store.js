import { configureStore } from "@reduxjs/toolkit";
import { movieApi } from "../services/movie-api";
export default configureStore({
    reducer:{
        [movieApi.reducerPath]:movieApi.reducer
    }
})