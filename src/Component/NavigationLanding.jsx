

import React from "react";
import "./landing.css"
import {Link} from "react-router-dom"

const NavigationLanding = ()=>{
return(

  <>
    <div className="float-left">
       <Link className="homeNav">Home</Link>
    </div>
    <div className="float-right">
       <Link className="homeNav">Offers</Link>
       <Link className="homeNav">Join Now</Link>
    </div>
    <div className="float-clear"></div>
  </>
)
}

export default NavigationLanding