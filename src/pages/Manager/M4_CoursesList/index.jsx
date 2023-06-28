
import React from 'react';
import Mainlayout from '../../../components/MainLayout';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import * as action from "../../../action"
import { Grid, Button } from '@mui/material';

export default function M4_CoursesList() {
    const dispatch = useDispatch();//redux
    const navigate = useNavigate()
    const termName = useSelector((state) => state.m3_termname);//redux
    const goToM8 = () => {
        dispatch(action.setTermName(termName));//redux
        navigate('/M8')
    }
    const goToM5 = () => {
        dispatch(action.setTermName(termName));//redux
        navigate('/M5')
    }

    return (
        <Mainlayout text={termName}>

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
