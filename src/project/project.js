import React from "react";
import Home from "./page1";
import Service from "./service";
import Box from "./page3";




function Head(){
    return(
        <>
        <React.Fragment>
           <Home/>
           <Service/>
           <Box/>
        </React.Fragment>
        </>
    )
}

export default Head;