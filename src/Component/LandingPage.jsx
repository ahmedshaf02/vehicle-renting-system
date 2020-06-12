
import React from "react";
// import NavigationLanding from "./NavigationLanding"

const Styles = {

cycleMoving:{
  // position:"absolute",
  transform:"rotate(-45deg)",
  // width:300,


}
}
const LandingPage = ()=>{
return(

  <>
    <div style={Styles.pageBackground}>
        {/* <NavigationLanding/> */}
        <div>
          <img className="img-fluid" style={Styles.cycleMoving} src="https://i.ya-webdesign.com/images/bicycle-png-icon-4.png" alt="cycle"/>
        </div>

    </div>
  </>
)
}

export default LandingPage