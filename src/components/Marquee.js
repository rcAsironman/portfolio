import React from 'react';
import './Marquee.css'; // Make sure to create this CSS file
import c from "../assets/c.png";
import cpp from "../assets/c++.png"
import java from "../assets/java.png"
import python from "../assets/python.png"
import html from "../assets/htmlCssJavascript.png"
import react from "../assets/reactJs.png"
import redux from "../assets/redux.png"
import node from "../assets/nodeJs.png"
import mysql from "../assets/mysql.png"
import postgres from "../assets/postgre.png"
import aws from "../assets/aws.png"
import git from "../assets/gitHub.png"
import figma from "../assets/figma.png"



const Marquee = () => {
  return (
    <div className="marquee">
      <div className="marquee-content">
        <img src={c} alt="Image 1" />
        <img src={cpp} alt="Image 1" />
        <img src={java} alt="Image 1" />
        <img src={python} alt="Image 1" />
        <img src={html} alt="Image 1" />
        <img src={react} alt="Image 1" />
        <img src={redux} alt="Image 1" />
        <img src={node} alt="Image 1" />
        <img src={mysql} alt="Image 1" />
        <img src={postgres} alt="Image 1" />
        <img src={aws} alt="Image 1" />
        <img src={git} alt="Image 1" />
        <img src={figma} alt="Image 1" />
        {/* Add more images as needed */}
        <img src={c} alt="Image 1" />
        <img src={cpp} alt="Image 1" />
        <img src={java} alt="Image 1" />
        <img src={python} alt="Image 1" />
        <img src={html} alt="Image 1" />
        <img src={react} alt="Image 1" />
        <img src={redux} alt="Image 1" />
        <img src={node} alt="Image 1" />
        <img src={mysql} alt="Image 1" />
        <img src={postgres} alt="Image 1" />
        <img src={aws} alt="Image 1" />
        <img src={git} alt="Image 1" />
        <img src={figma} alt="Image 1" />
      </div>
    </div>
  );
};

export default Marquee;
