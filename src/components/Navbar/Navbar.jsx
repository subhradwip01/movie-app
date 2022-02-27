import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Brand from '../Brand/Brand'
import {FaBars} from "react-icons/fa"
import "./Navbar.css"
const breakpont=600
const Navbar=() =>{
  const [blackNav, setBlackNav] = useState(false)
  const [mobile,setMobile]=useState(false)
  const [showMenu,setShowMenu]=useState(false)
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

  React.useEffect(()=>{
    mobileNav()
  },[]) 
  const mobileNav=()=>{
      console.log('hello')
      if(window.innerWidth<=breakpont){
          console.log("true")
        setMobile(true)
      }
      else{
          setMobile(false)
      }
  }  

  const showMenuHandler=()=>{
      setShowMenu(!showMenu)
  }

  window.addEventListener("scroll",navBackgroundChange)
  window.addEventListener("resize",mobileNav)
  
  return (
   <nav className={blackNav?'navbar black-nav':'navbar'}>
       <div className='nav-brand'>
           <Brand/>
       </div>
       { mobile && <button className='ham-menu' onClick={showMenuHandler}><FaBars size={30}/></button>}
       <div className='nav-menu' style={{ display: showMenu && "block" }}>
           <ul>
               {navMenu.map((e,i)=>(
                   <li className='nav-list' >
                       <NavLink key={i} exact activeClassName="selected" className='nav-list__link' to={e.path} onClick={showMenuHandler}>
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