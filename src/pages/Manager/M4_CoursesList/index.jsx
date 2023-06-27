import { Button } from '@mui/base'
import React from 'react'
import Mainlayout from '../../../components/MainLayout'

export default function M4_CoursesList() {
    return (
        //in bayad ba redux bashe.az m2 miad esm term
        <Mainlayout text={"ترم پاییز؟"} >
            <Button className='M4_btn'>preRegisterd</Button>
            <Button variant="contained" className='M4_btn'>Registerd</Button>
        </Mainlayout>
    )
}
