import React from 'react'
import Typewriter from 'react-typewriter-effect';
import "../styles.css"
import portfolioImage from "../assets/portfolioImage.png"

function NameImage() {
  return (
    <div className='name-image'>

      <div className='left-content'>
        <div className='left-content-child'>
        <h3 className='WelcomeNote animated-welcome-text'>Welcome to My Portfolio</h3>
        <h3>
        Myself karthik Mangineni
        </h3>
        <h6 className="name-typing">
          Masters of Science in Computer Science at Saint Louis University.
        </h6>
        </div>
      </div>

      <div className="right-content">
        <img src={portfolioImage}  height={"50%"} width={"50%"}/>
      </div>
    </div>
  )
}

export default NameImage


