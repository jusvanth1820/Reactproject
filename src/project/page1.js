import React from "react";
import "../project/page1.css"
import img1 from"../image/WhatsApp Image 2023-11-27 at 4.30.13 PM.jpeg"
import img2 from"../image/best.jpeg"


function Home(){
    return(
    <>
    <div id="part1">
    <div class= "img">
    <span>
        <img src={img1} width={200} height={100}></img>
        <p className="text">
            We Manufacturing Industrial Steel And Roof Top Sheet,Sk Engineering Roofing Industries foundied by chairman Mr H Harish.
Our range of pre-engineered buildings, roofing, cladding and rainwater systems, made from raw materials of the highest quality in accordance with strict ASTM / JIS / AS and IS standards. 
        </p>
         
     </span>
     </div>
    <div id="part">
    <ul className="nav">          
    <li><a href="">Home</a></li>
    <li className="drop"><a href="">Product
         <ul class ="drop1">
            <li><a href="">Sheets</a></li>
            <li><a href="">Tubes</a></li>
            <li><a href="">Shutter</a></li>
            <li><a href="">Louver</a></li>
            <li><a href="">Sections</a></li>
        </ul> 
        </a></li>
    <li><a href="">About us</a></li>
    <li><a href="">Color Range</a></li>
    <li><a href="">Specification</a></li>
    <li><a href="">Clients</a></li>
    <li><a href="">Contact us</a></li> 
        </ul>
        </div>
        <div id ="image" >
    </div>
    </div>

    </>
    )
}

export default Home;