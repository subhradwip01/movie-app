import React from 'react'
import { NavLink } from 'react-router-dom'
import Brand from '../Brand/Brand'
import "./Navbar.css"
const Navbar=() =>{
  const navMenu=[
      {
          "name":"Home",
          "path":"/"
      },
      {
          "name":"Movies",
          "path":"movies"
      },
      {
          "name":"TV",
          "path":"/tv"
      }
  ]
  return (
   <nav>
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