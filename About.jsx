import React from 'react'
import './About.css'
export default function About() {
  return (
    <div className="app__about">
        <div className="app__image-block">
        <div className="img">
            <img src="https://cafeecas.online/wp-content/uploads/2023/05/about-1-150x150.jpg" alt=""/>
        </div>
        <div className="img">
            <img src="https://cafeecas.online/wp-content/uploads/2023/05/about-3-150x150.jpg" alt="" />
        </div>
        <div className="img">
            <img src="https://cafeecas.online/wp-content/uploads/2023/05/about-4-150x150.jpg" alt=""/>
        </div>
        <div className="img">
            <img src="https://cafeecas.online/wp-content/uploads/2023/05/about-2-150x150.jpg" alt=""/>
        </div>
        </div>
        <div className="app__about-content">
            <h2 style={{color: "#fea116"}}>about us</h2>
            <h1>Welcome to restoran</h1>
            <p>“Welcome to Restoran” is a common greeting that customers receive when entering a restaurant, typically followed by a friendly welcome and an invitation to be seated.</p>
<p>This greeting sets the tone for the dining experience, creating a welcoming and hospitable environment that encourages customers to relax and enjoy their meal.</p>
        </div>
    </div>
  )
}
