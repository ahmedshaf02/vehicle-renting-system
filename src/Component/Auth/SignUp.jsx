

import React from "react";
import "./auth.css"
import {Box,Container,TextField,Button} from "@material-ui/core"


const SignUp = ()=>{
  return(
    <>
      <div className="containerSign">
        <h1 className="m-2">SIGN UP</h1>
        <Container>
          <Box>
            <TextField  margin="dense" label="Username" color="link" />
          </Box>

          <Box>
            <TextField  margin="dense" label="Email" color="link" />
          </Box>

          <Box>
             <TextField  margin="dense" label="Password" color="link" />
          </Box>

          <Box margin={4}>
            <Button margin="dense" variant="contained" color="primary">SIGN UP</Button>
          </Box>
        </Container>
      </div>
      
    </>
  )
}

export default SignUp