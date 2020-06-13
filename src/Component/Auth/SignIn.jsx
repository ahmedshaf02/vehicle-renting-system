
import React from "react";
import "./auth.css"
import {Box,Container,TextField,Button} from "@material-ui/core"


const SignIn = ()=>{
  return(
    <>
      <div className="containerSign">
        <h1 className="m-2">SIGN IN</h1>
        <Container>
          <Box>
          {/* <CssTextField className={classes.margin} id="custom-css-standard-input" label="Custom CSS" /> */}
          <TextField  margin="dense" label="Username" color="link" />
          </Box>
          <Box>
          <TextField  margin="dense" label="Password" color="link" />
          </Box>
          <Box margin={4}>
            <Button margin="dense" variant="contained" color="primary">SIGN IN</Button>
          </Box>
        </Container>
      </div>
      
    </>
  )
}

export default SignIn