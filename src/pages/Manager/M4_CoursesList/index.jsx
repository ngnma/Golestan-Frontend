
import { React, useEffect, useState } from 'react';
import Mainlayout from '../../../components/MainLayout';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import * as action from "../../../action"
import { Grid, Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function M4_CoursesList() {
    const dispatch = useDispatch();//redux
    const navigate = useNavigate()
    const courses = useSelector((state) => state.courses);//redux
    const [courseList, setCourseList] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8080/api/admin/Professors`,
            {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`
                }
            }).then((response) => {
            console.log(response.data)
            setCourseList(response.data)
        }).catch((err)=>{
          alert(err)
          navigate("/login");
        })
    
    }, []);
    const goToM8 = () => {
        navigate('/M8')
    }
    const goToM5 = () => {
        navigate('/M5')
    }

    return (
        <Mainlayout text={courses}>

            <div style={{ display: "flex", flexFlow: "1", gap: "50px", justifyContent: "space-between" }} >
                <div >
                    <Button variant="contained" style={{ width: "200px", height: "200px" }} onClick={goToM5}>preRegisterd</Button>
                </div>
                <div>
                    <Button variant="contained" style={{ width: "200px", height: "200px" }} onClick={goToM8}>Registerd</Button>
                </div>
            </div>
        </Mainlayout>
    )
}
