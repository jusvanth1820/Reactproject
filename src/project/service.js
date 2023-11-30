import React from "react"
import img1 from "../image/wall clad.jpg"
import img2 from "../image/download.jpg"
import img3 from "../image/roofer-worker-special-protective-work-wear-gloves-using-pneumatic-gun-installing-concrete-roof-tile-top-new-roof-concept-residential-building-construction_64073-429.avif"
import img4 from "../image/structure.webp"
import img5 from "../image/smart.jpg"
import img6 from "../image/bulter.jpg"
import "./service.css"


function Service(){
      return(
         <>
         <h1 className="head">OUR SERVICES</h1>
         <div className="img_box">
         <div className="imgs">
          <img src={img1} width={370} height={240}></img>
          <div>
             <span className="small-box"> </span>
             <label className="imgname">Roof and Wall Clading</label>
          </div>
          </div>

          <div className="imgs">
          <img src={img2} width={370} height={240}></img>
          <div>
             <span className="small-box"> </span>
             <label className="imgname">Zicalume Steel sheets</label>
          </div>
          </div>

          <div className="imgs">
          <img src={img3} width={370} height={240}></img>
          <div>
             <span className="small-box"> </span>
             <label className="imgname">Color Coated Sheet Coil </label>
          </div>
          </div>

          
          <div className="imgs">
          <img src={img4} width={370} height={240}></img>
          <div>
             <span className="small-box"> </span>
             <label className="imgname">Structural Solution</label>
          </div>
          </div>

          <div className="imgs">
          <img src={img5} width={370} height={240}></img>
          <div>
             <span className="small-box"> </span>
             <label className="imgname">Smart Building Solution</label>
          </div>
          </div>

          <div className="imgs">
          <img src={img6} width={370} height={240}></img>
          <div>
             <span className="small-box"> </span>
             <label className="imgname">Butler Building Systems</label>
          </div>
          </div>

          </div>
         </>
      );
}
export default Service;

