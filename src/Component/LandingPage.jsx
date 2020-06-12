
import React from "react";
import "./landing.css"
import NavigationLanding from "./NavigationLanding"

const LandingPage = ()=>{
return(

  <>
    <div>
        <NavigationLanding/>
        <div>
          <img className="img-fluid cycleMoving"  src="https://i.ya-webdesign.com/images/bicycle-png-icon-4.png" alt="cycle"/>
        </div>

    </div>
  </>
)
}

export default LandingPage