import React from 'react';
import Mainlayout from "../../../components/Student/MainLayout";
import { Button, Grid } from '@mui/material';
import './style.scss'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function S3_TermInfo() {
    const navigate = useNavigate();
    const termid = useSelector((state)=>state.termid)

        
    React.useEffect(() => {
        // dispatch(action.setTermName(termName));//redux
        console.log(termid)
    }, []);

    const handle1 = ()=>{
        console.log(termid)
        navigate('/S4')
    }
    const handle2 = ()=>{
        navigate('/S5')
    }
    const handle3 = ()=>{
        navigate('/S6')
    }
    const handle4 = ()=>{
        navigate('/S7')
    }

    return (
        <Mainlayout text={termid} btnText={"مشاهده اطلاعات ترم"} btn={true}>
            <Grid container justifyContent='center' direction="row" wrap='wrap' gap="20px">
                <Grid item>
                    <Button className='s3_btn' variant='contained' onClick={handle1}>مشاهده لیست دروس ارایه شده برای پیش ثبت نام</Button>
                </Grid>
                <Grid item>
                    <Button className='s3_btn' variant='contained' onClick={handle2}>مشاهده پیش ثبت نام ها</Button>
                </Grid>
                <Grid item>
                <Button className='s3_btn' variant='contained' onClick={handle3}>مشاهده لیست دروس ارایه شده برای  ثبت نام</Button>
                </Grid>
                <Grid item>
                <Button className='s3_btn' variant='contained' onClick={handle4}>مشاهده ثبت نام ها</Button>
                </Grid>
            </Grid>

        </Mainlayout>
    )
}


