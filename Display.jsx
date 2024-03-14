import React,{useState} from 'react'
import './Display.css';
import Tech from './Tech';

export default function Display() {
  const [data,setData] = useState(false);
  
  return (
    <div className="app__display">
        <div className='app__block'>
            <h1>KNOW YOUR DELCIOUS MEAL</h1>
            <p>A restaurant is a place where people go to enjoy a meal, typically with friends, family, or colleagues.</p>
            <button className='app__btn' onClick={()=>setData(true)}>Order Now</button>
            {
              data&&(
                <div className="app__close-btn">
                  <div className="display-nav-bar">
                    
              <button className="close-btn-btn" onClick={()=>setData(false)}><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
              </svg></button>
              <div>
              </div>
              <Tech/>
              </div>
              
              </div>
              )
            }
        </div>
        
    </div>
  )
}
