import { React, useState,useEffect } from "react";
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
    const [click, setclick] = useState(false);

    const options = {
        headers: { 'Content-Type': 'application/json',"Access-Control-Allow-Origin": "*"  }
    };
    useEffect(() => {
        const fetchLogin = async () => {
          const res = await axios
            .post("http://localhost:8080/api/login", {
              id: username,
              password: password,
            }).then((resp)=>{
              return resp.data
            }).catch((err) => {
              console.log(err);
            })
            if (res) {
              console.log(res)
              let currentUser = { 
                faculty: res.user.faculty,
                name: res.user.name,
                email: res.user.email,
                phone: res.user.phone,
                type: res.user.type,
                id: res.user.id,
              }
              console.log(currentUser)
              console.log(res)
              sessionStorage.setItem("name",currentUser.name);
              sessionStorage.setItem("token",res.token);
              if(currentUser.type==="student"){
                navigate("/S2")
              }else if (currentUser.type==="educationalManager"){
                navigate("/M2")
              } else if (currentUser.type==="admin"){
                navigate("/I2")
              }else{
                navigate("/P2")
              }
            }
        };
        
    
        if (click) {
            fetchLogin();
            setclick(false);
          }
    
      }, [click]);

    const handleLogin = async () => {
    setclick(true);
    };
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