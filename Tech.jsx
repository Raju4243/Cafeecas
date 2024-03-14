import React,{useState,useEffect} from 'react'
import Axios from 'axios';
//import Data from './data.json'
import Display from './Display';
import './Tech.css'
export default function Tech() {
    const [content,setContent] = useState([]);
    const [count,setCount] = useState(0);
    const [value,setValue] = useState("Chicken");
    const [item,setItem] = useState(value);
    
 
  const handleChange=(e)=>setValue(e.target.value);
  const handleClick=()=>setItem(value);
  useEffect(()=>{
    const api_key = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${item}`;
    const fetch_data= async()=>{
      let response = await Axios.get(api_key);
      const items = await response.data;
      setContent(items);
    }
    fetch_data();
  },[item])
    
  return(  
  <div>
    <div className="order__header">
        <input className='order__input' type='text'  placeholder="enter your meal" onChange={handleChange}/>
        <button type="submit" className="order__search"  onClick={handleClick}>  <svg className="order__search_svg"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
  
</svg>
</button>
    </div>
    {
     Object.values(content).map((ele)=>{
        return(
          <>
            <div className='orders'>
               {
                ele.map((op)=>{
                  return(
                    
                    
                  <div className="order__block">
                        <div className="order__image">
                          <img src={op.strMealThumb} alt=""/>
                        </div>
                        <div className="order__footer">
                          <p className="order-name"> {op.strMeal}</p>
                          
                        </div>
                        </div>
                    
                  )
                })
               }
            </div>
            </> 
        )
      })
     }
  </div>
)
}





