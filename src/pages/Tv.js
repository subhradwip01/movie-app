import React from 'react'

import ShowsList from '../components/ShowsList/ShowsList'
import "./Shows.css"
const Tv = () => {
  return (
    <div className='shows'>
        <h1 className='shows-heading'>Tv Series</h1>
        <div className='shows-all'>
            <ShowsList category="tv"></ShowsList>
        </div>
    </div>
  )
}

export default Tv