

import React from "react";
import "./landing.css"
import {Link} from "react-router-dom"

const NavigationLanding = ()=>{
return(

  <>
  <div className="container">
    <div className="float-left m-2">
       <Link className="homeNav">Home</Link>
    </div>
    <div className="float-right m-2">
       <Link className="homeNav">Offers</Link>
       <Link to="/signin" className="homeNav">Join Now</Link>
    </div>
    <div className="float-clear"></div>
  </div>
  </>
)
}

export default NavigationLanding