
import React from "react"
import {Route} from "react-router-dom";
import SignIn from "./Auth/SignIn"
import SignUp from "./Auth/SignUp"
import LandingPage from "./LandingPage";

const Screens =()=>{
  return(
    <>

      <Route path="/signin">
        <SignIn/>
      </Route>
      <Route exact path="/">
        <LandingPage/>
      </Route>
      <Route path="/signup">
        <SignUp/>
      </Route>
    </>
  )
}

export default Screens