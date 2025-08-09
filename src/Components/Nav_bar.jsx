import React from 'react'
import '../index.css'
// import './index.css'
import { Link } from "react-router-dom";

const Nav_bar = () => {
  return (
    <div className='Nav'>
        <div className='nav_img'>
  <Link to="/">
    <img src="https://wobot.ai/wobot_logo_blue.svg" alt="Logo" />
  </Link>
</div>

            <a href='#' className='toggle-button'>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </a>
         <div className='Nav_items'>
            <ul >
                <li> <a href='#'>Home</a> </li>
                <li> <a href='#'>Recepies</a> </li>
                <li> <a href='#'>About</a> </li>
                
            </ul>
         </div>
    </div>
  )
}

export default Nav_bar
