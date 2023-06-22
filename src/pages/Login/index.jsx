import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { height } from "@mui/system";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./style.scss" ;


function Login() {
    return (
        <Box sx={{ flexGrow: 1, height: "100vh" }}>
            <Grid container spacing={2} style={{ height: "100%" }}>
                <Grid item xs={6} style={{ height: "100%" }}>
                    <div className="login_container">
                        <TextField className="login_textfiled" label="username" variant="outlined" />
                        <TextField className="login_textfiled" label="password" variant="outlined" />
                        <Button id="login_Button" variant="contained">Login</Button>
                    </div>
                </Grid>
                <Grid item xs={6} style={{ backgroundColor: "Black", height: "100%" }}>

                </Grid>
            </Grid>
        </Box>
    );
};
export default Login;