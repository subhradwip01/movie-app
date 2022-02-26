import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Brand from '../Brand/Brand'
import "./Navbar.css"
const Navbar=() =>{
  const [blackNav, setBlackNav] = useState(false)
  const navMenu=[
      {
          "name":"Home",
          "path":"/"
      },
      {
          "name":"Movies",
          "path":"/movie"
      },
      {
          "name":"TV",
          "path":"/tv"
      }
  ]
  
  const navBackgroundChange=()=>{
      if(window.scrollY>=36){
          setBlackNav(true)
      }
      else{
          setBlackNav(false)
      }
    }

  window.addEventListener("scroll",navBackgroundChange)
  return (
   <nav className={blackNav?'navbar black-nav':'navbar'}>
       <div className='nav-brand'>
           <Brand/>
       </div>
       <div className='nav-menu'>
           <ul>
               {navMenu.map((e,i)=>(
                   <li className='nav-list' >
                       <NavLink key={i} exact activeClassName="selected" className='nav-list__link' to={e.path}>
                           {e.name}
                       </NavLink>
                   </li>
               ))}
           </ul>
       </div>
   </nav>
  )
}

export default Navbar