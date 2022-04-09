import React, { useState, useEffect, useReducer } from "react";
import { useGetShowsQuery, movieType, tvType } from "../../services/movie-api";
import MTCard from "../MTCard/MTCard";
import "./ShowsList.css";

let initialListState = {
  list1: [],
  page1: 2,
  type1: "popular",
};

const listReducer = (state, action) => {
  switch (action.type) {
    case "list":
      return {
        ...state,
        list1: [...action.payload],
      };

    case "page":
      let newP = state.page1 + action.payload;
      return {
        ...state,
        page1: newP,
      };

    case "type":
      return {
        list1: [],
        page1: 2,
        type1: action.payload,
      };
  }
};


const ShowsList = ({ category }) => {
  const [isLoading,setIsLoading] = useState(false)
  const [state, dispatch] = useReducer(listReducer, initialListState);
  const { data, isFetching } = useGetShowsQuery({
    category,
    type:state.type1,
    page: state.page1,
  });

  useEffect(() => {
    setIsLoading(true)
    let items = data?.results?.map((item) => ({
      id: item.id,
      title: item.original_title ? item.original_title : item.name,
      backdrop_path: item.backdrop_path,
      poster_path: item.poster_path,
    }));
    dispatch({ type: "list", payload: items?items:[] });
    setIsLoading(false)
  }, [data]);


  if (isFetching) {
    return "Loading...";
  }

  const loadMoreDataHandler = (changedValue) => {
    dispatch({ type: "page",payload:changedValue });
  };

  const types = [];
  for (let type in category === "movie" ? movieType : tvType) {
    types.push(type);
  }

  const typeSelector = (e) => {
    if(e.target.value!==state.type1)
        dispatch({type:"type",payload:e.target.value})
  };

  return (
    <>
      <select className="show-type" onChange={typeSelector}>
      <option value="none" selected disabled hidden>{state.type1}</option>
        {types.map((type) => (
          <option className="show-types__item" value={type}>
            {type}
          </option>
        ))}
      </select>
      <div className="show-grid-list">
        <div className="shows-grid">
          {state.list1?.map(({ id, title, backdrop_path, poster_path }) => (
            <MTCard
              id={id}
              title={title}
              backdrop_path={backdrop_path}
              poster_path={poster_path}
              category={category}
            />
          ))}
        </div>
        <div style={{"display":"flex","justifyContent":"space-between"}}>
        {state.page1 > 2 ? <button onClick={()=>loadMoreDataHandler(-1)} disabled={isLoading} className={isLoading ? 'btn-outline disable' : 'btn-outline'} style={{"margin-right":"5px"}}>
          {!isLoading?'Prev Page':"Loading..."}
        </button> : null}
        <button onClick={()=>loadMoreDataHandler(1)} disabled={isLoading} className={isLoading ? 'btn-outline disable' : 'btn-outline'}>
          {!isLoading?'Next Page':"Loading..."}
        </button>
        </div>
      </div>
    </>
  );
};

export default ShowsList;
