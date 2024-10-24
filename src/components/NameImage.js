import React from 'react'
import Typewriter from 'react-typewriter-effect';
import "../styles.css"
import portfolioImage from "../assets/portfolioImage.png"
function NameImage() {
  return (
    <div className='name-image'>

      <div className='left-content'>
        <div>
        <h3 className='WelcomeNote'>Welcome to My Portfolio</h3>
        <h2 className="name-typing">
          <Typewriter
            text="My name is karthik..."
            cursorColor="#000"
            typeSpeed={200}
            startDelay={1000}
            deleteSpeed={50}
            loop={true}
          />
        </h2>
        </div>
      </div>

      <div className="right-content">
        <img src={portfolioImage}  height={400} width={400}/>
      </div>
    </div>
  )
}

export default NameImage


