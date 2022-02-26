import React from 'react'
import { useParams } from 'react-router-dom'
import ShowsList from '../components/ShowsList/ShowsList'
import "./Shows.css"
const Movie = () => {
  return (
    <div className='shows'>
        <h1 className='shows-heading'>Movie</h1>
        <div className='shows-all'>
            <ShowsList category="movie"></ShowsList>
        </div>
    </div>
  )
}

export default Movie