import { React, useState } from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { height } from "@mui/system";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from "axios";
import {useNavigate} from "react-router-dom"
import "./style.scss";


function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const options = {
        headers: { 'Content-Type': 'application/json' }
    };
    const handleLogin = () => {
        axios.post('http://localhost:3000/login', {
            user_id: username,
            password: password,
        }, options)
            .then(response => {
                localStorage.setItem("token",response.data.token)
                localStorage.setItem("role",response.data.role)
                if(response.data.role==="student"){
                    navigate("/test2")
                }
                
            })
            .catch(error => {
                console.error(error);
            });
    }
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    return (
        <Box sx={{ flexGrow: 1, height: "100vh" }}>
            <Grid container spacing={2} style={{ height: "100%" }}>
                <Grid item xs={6} style={{ height: "100%" }}>
                    <div className="login_container">
                        <TextField className="login_textfiled" label="username" variant="outlined" onChange={handleUsernameChange} value={username} />
                        <TextField className="login_textfiled" label="password" variant="outlined" onChange={handlePasswordChange} value={password} />
                        <Button id="login_Button" variant="contained" onClick={handleLogin}>Login</Button>
                    </div>
                </Grid>
                <Grid item xs={6} style={{ backgroundColor: "Black", height: "100%" }}>

                </Grid>
            </Grid>
        </Box>
    );
};
export default Login;