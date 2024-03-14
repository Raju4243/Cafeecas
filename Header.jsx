import React,{useState} from 'react'

import { Outlet, Link } from "react-router-dom";

import './Header.css'
export default function Header() {
    const [menu,setMenu] = useState(false);
  return (
    
    <div className='app__header'>
        <div className="app__heading">
            <h1>CAFEECAS</h1>
            <p>HEALTHY FOOD</p>
        </div>
        <div className="app__menu">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="contact">ContactUs</Link></li>
                <li><Link to="privacy">Privacy Policy</Link></li>
            </ul>
           <Outlet/>
           
      
        </div>
        <div className="app__menu-icon">
          <button className='app__menu-btn-btn' onClick={()=>setMenu(true)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-justify" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                </svg>
          </button>
          {menu &&(
          <div className="app__close-btn">
              <button className="close-btn-btn" onClick={()=>setMenu(false)}><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
              </svg></button>
              <ul className="app__menu-bar">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">ContactUs</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                
            </ul>
          </div>
          )}
        </div>
        
    </div>
    
  )
}
