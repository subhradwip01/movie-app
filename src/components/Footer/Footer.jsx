import React from 'react'
import { FaInstagram , FaTwitter , FaHome, FaThumbsUp ,FaHeart} from 'react-icons/fa';
import Brand from '../Brand/Brand';
import bg from "../../assets/movie.jpg"
import "./Footer.css"
const Footer = () => {
  const bgStyle={
    'background':`linear-gradient(0deg, rgb(0 0 0 / 80%), rgb(60 51 51 / 82%)) 0% 0% / 100%, url(${bg})`,
    "width":"100%",
    "backgroundsize": "cover",
    "backgroundRepeat": "repeat",
  }
  return (
    <div className='footer' style={bgStyle}>
        <div className="footer-branding">
           <Brand/>
        </div>
        <div className="footer-menu">
            <FaHome className='footer-menu__list'/>
            <FaInstagram className='footer-menu__list'/>
            <FaTwitter className='footer-menu__list'/>
            <FaThumbsUp className='footer-menu__list'/>
        </div>
        <p>Made with <FaHeart/></p>
    </div>
  )
}

export default Footer