
import React from "react";
import "./landing.css"
import NavigationLanding from "./NavigationLanding"

const LandingPage = ()=>{
return(

  <>
    <div>
        <NavigationLanding/>
        <div>
          <img className="img-fluid cycleMoving p-2"  src="https://i.ya-webdesign.com/images/bicycle-png-icon-4.png" alt="cycle"/>
          <i className="fas fa-chevron-circle-right goIcon m-4" ></i>
        </div>
        <div>
        </div>
    </div>
  </>
)
}

export default LandingPage