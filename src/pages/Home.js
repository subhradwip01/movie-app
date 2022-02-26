import React from 'react'
import { Link } from 'react-router-dom'
import Heroslider from '../components/Heroslider/Heroslider'
import { catlog,movieType, tvType } from '../services/movie-api'
import FeatureList from '../components/FeatureList/FeatureList'
import "./Home.css"
const Home = () => {

  return (
    <div>
      <Heroslider/>
      <div className='home-menu'>
      <div className='home-menu__info'>
        <h1 className="home-menu__heading">Upcominge movies</h1>
        <Link to="/movie">
        <button className='btn-outline'>See more</button>
        </Link>
      </div>
      <FeatureList category={catlog.movie} type={movieType.upcoming}/>

      </div>
      <div className='home-menu'>
      <div className='home-menu__info'>
        <h1 className="home-menu__heading">Top Rated movies</h1>

        <Link to="/movie">
        <button className='btn-outline'>See more</button>
        </Link>
      </div>
      <FeatureList category={catlog.movie} type={movieType.top_rated}/>

      </div>
      <div className='home-menu'>
      <div className='home-menu__info'>
        <h1 className="home-menu__heading">Top Rated TV</h1>
        <Link to="/tv">
        <button className='btn-outline'>See more</button>
        </Link>
      </div>
      <FeatureList category={catlog.tv} type={tvType.top_rated}/>

      </div>
      <div className='home-menu'>
      <div className='home-menu__info'>
        <h1 className="home-menu__heading">Popular TV</h1>
        <Link to="/tv">
        <button className='btn-outline'>See more</button>
        </Link>
      </div>
      <FeatureList category={catlog.tv} type={tvType.popular}/>

      </div>
    </div>
  )
}

export default Home