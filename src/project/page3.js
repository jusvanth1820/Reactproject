import React from "react";
import "./page3.css"
import img1 from"../image/solar-panel.jpg"
import img2 from"../image/wind-driven-roof-ventilators.jpg"
import img3 from"../image/img2.avif"
import img4 from"../image/wall clad.jpg"
import img5 from"../image/black-plastisol.jpg"
import img6 from"../image/client1.png"
import img7 from"../image/client2.png"
import img8 from"../image/client3.png"
import img9 from"../image/client4.png"
import img10 from"../image/client5.png"
import img11 from"../image/main14.jpg"
import img12 from"../image/testimonial box.jpg"
import img13 from"../image/testimonial box.jpg"

function Box(){
    return(
        <>
        <div className="content">
          <div className="view">
            <p>View All Service</p>
          </div>
          <p ></p>
          <div className="top">
          <p>Sk Engineering Roofing Industries is one of the leading and the largest private sector producer of roofing sheets in India.</p>  
          </div>

          <div className="box2">
            <h3>WHY CHOOSE US</h3>
           
            <p>Hari Om Roofing Industries foundied by chairman Mr H Harish.
Our range of pre-engineered buildings, roofing, cladding and rainwater systems, made from raw materials of the highest quality in accordance with strict ASTM / JIS / AS and IS standards, offers flexibility of design to suit any construction need be it your business, factory, home or office. Our products are made to meet your aesthetic needs as well.
            </p>

            <span class="icon flaticon-file-1"></span>
            <div class ="img11">
            <img src={img11} width={260} height={200}></img>
            </div>
            
          </div>

          <div className="mid">
            <p>

            </p>
          </div>

          <div className="last">
            <h1>Our Projects</h1>
            <div className="name">
              
                <li>Solar Frame</li>
                <li>Roof  ventilators</li>
                <li>GI Decking Sheet</li>
                <li>Wall Clading</li>
                <li>Curved Roofing</li>
                
               
                
              </div>
            <div className="pro">
          <img src={img1} width={260} height={180}></img>
          </div>

          <div className="pro">
          <img src={img2} width={260} height={180}></img>
          </div>

          <div className="pro">
          <img src={img3} width={260} height={180}></img>
          </div>

          <div className="pro">
          <img src={img4} width={260} height={180}></img>
          </div>

          <div className="pro">
          <img src={img5} width={260} height={180}></img>
          </div>

            <div className="testimonial">
              <h1>TESTIMONIAL</h1>

            </div>

            </div>

            <div id="test1">
              <img src={img13} width={550} height={500}></img>
              <p> Many Thanks For Your Roofing Systems Which Saved My Customers Parking.We Appreciate Your quality And Concern Methods...,</p>



            </div>

            <div id="test2">
            <img src={img12} width={550} height={500}></img> 
          <p>I am Pleased With Your Deticated Work For Building Roof For My Garage.I Surely Recommand You To My Friend Who Is In Plans To..,  </p>

            </div>


            <div id="about">
              <p>1100+ Clients  </p>
              <p className="slash"> /</p>
              <p>2000+ Projects  </p>
              <p className="slash"> /</p>
              <p>10+ Years Experience </p>
              {/* <p className="slash"> /</p> */}
            </div>


            <div id ="clients">
              <p>Our Awesome Clients</p>
              <img src={img6} height={50} width={100}></img>
              <img src={img7} height={50} width={100}></img>
              <img src={img8} height={50} width={100}></img> 
              <img src={img9} height={50} width={100}></img>
              <img src={img10}height={50} width={100}></img>
            </div>


        <div id="last">
          <div className="one">
            <h2>UNIT I</h2>
            <p class="unit1">
            90/1 Adhavan Industrial Estate,</p>
<p>Athipalayam Road, opp CRI pump,</p>
<p>Chinnavedampatti post, Ganapathy,</p>
<p>Coimbatore 641006 (TN) </p>
       </div>

       <div id ="unit2">
       <h2>UNIT II</h2>
            <p class="unit2">
            90/1 Madhavan Industrial Estate,</p>
<p>Mettpalayam Road</p>
<p> Ganapathy,</p>
<p>Coimbatore 641006 (TN) </p>
       </div>

       <div id ="unit3">
       <h2>UNIT III</h2>
            <p class="unit3">
            40/1  Sathyamangalam,</p>
<p>Gobi  Road</p>
<p>Nehru nagar,</p>
<p>Sathyamangalam 638006 (TN) </p>

       </div>

       
       <div id ="unit4">
       <h2>UNIT IV</h2>
            <p class="unit4">
            40/51 Trichy ,</p>
<p>Karur  Road</p>
<p>Kulithalai(post)</p>
<p>Karur 638006 (TN) </p>

       </div>



        </div>
          
        </div>
        
        </>
    )
}

export default Box;

