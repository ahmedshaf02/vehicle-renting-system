
import React from "react";
import "./landing.css"
import NavigationLanding from "./NavigationLanding";


const LandingPage = ()=>{
return(

  <>
    <div className="containerLanding">
    <h1>vehicle renting app</h1>
        <div>
            <NavigationLanding/>
        </div>
        <div className="container">

            <div>
              <img className="img-fluid cycleMoving "  src="https://i.ya-webdesign.com/images/bicycle-png-icon-4.png" alt="cycle"/>
              <i className="fas fa-chevron-circle-right goIcon m-4" ></i>
            </div>
        </div>
    </div>

  </>
)
}

export default LandingPage