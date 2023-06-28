import { Button } from '@mui/base'
import React from 'react'
import Mainlayout from '../../../components/MainLayout'
import {useNavigate} from "react-router-dom"

export default function M4_CoursesList() {
    const navigate = useNavigate()
    const goToM8 = () => {
        navigate('/M8')
    }
    const goToM5 = () => {
        navigate('/M5')
    }

    return (
        //in bayad ba redux bashe.az m2 miad esm term
        <Mainlayout text={"ترم پاییز؟"} >
            <Button variant="contained" onClick={goToM5}>preRegisterd</Button>
            <Button variant="contained" onClick={goToM8}>Registerd</Button>
        </Mainlayout>
    )
}
