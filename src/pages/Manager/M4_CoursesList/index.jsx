import { Button } from '@mui/base';
import React from 'react';
import Mainlayout from '../../../components/MainLayout';
import {useNavigate} from "react-router-dom";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import * as action from "../../../action"

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
        //in bayad ba redux bashe.az m2 miad esm term
        <Mainlayout text={termName}>
            <Button variant="contained" onClick={goToM5}>preRegisterd</Button>
            <Button variant="contained" onClick={goToM8}>Registerd</Button>
        </Mainlayout>
    )
}
