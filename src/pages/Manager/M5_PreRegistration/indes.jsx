import { Grid, TextField, Button, Typography } from '@mui/material';
import { React, useState, useEffect } from 'react';
import Mainlayout from '../../../components/MainLayout';
import './styles.scss';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import DashboardLayout from '../../../components/DashboardLayout';
import M5_CourseItem from '../../../components/Manager/M5_CourseCard';
import { useNavigate } from 'react-router-dom';

export default function M5_PreRegistration() {
    //mock data
    const mock = [
        { name: "آمار و احتمال مهندسی", count: 12 },
        { name: "برنامه نویسی پیشرفته", count: 23 },
        { name: "شبکه های کامپیوتری", count: 1 },
    ];
    const [alignment, setAlignment] = useState('true');
    const [preRegCourseList, setPreRegCourseList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        //get mock from back and remove mock data
        setPreRegCourseList(mock);
    }, []);

    const handleRemoveItem = (index) => {
        const updatedList = [...preRegCourseList];
        updatedList.splice(index, 1);
        setPreRegCourseList(updatedList);
    }

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
        if (alignment === "true"){
            
            preRegCourseList.sort((a, b) => a.count - b.count);
            console.log(preRegCourseList)
        }else{
           
            preRegCourseList.sort((b, a) => a.count - b.count);
            console.log(preRegCourseList)
        }
    };
    
    const handleAddCourse = ()=>{
        navigate('/M6');
    }

    return (
        <DashboardLayout>
            <Grid container>
                <Grid
                    container
                    item
                    justifyContent="space-between"
                    alignContent="center"
                >
                    <Grid item>
                        <Button variant="text" onClick={handleAddCourse}>افزودن درس +</Button>
                    </Grid>
                    <Grid item>
                        {/* text should be handled by redux */}
                        <Typography>دروس پیش ثبت نامی پاییز?</Typography>
                    </Grid>
                </Grid>
                <hr
                    style={{
                        width: "100%",
                        borderWidth: 0,
                        borderTop: "1px solid black",
                    }}
                />

                <Grid item container direction="column" >
                    <Grid item container justifyContent="space-between"  >
                        <Grid item><Button variant='contained' style={{ width: "200px", height: "50px" }}>دانلود اکسل</Button></Grid>

                        <Grid item>
                            <ToggleButtonGroup
                                color="primary"
                                value={alignment}
                                exclusive
                                onChange={handleChange}>
                                <ToggleButton value="true">بیشترین تعداد ثبت نامی</ToggleButton>
                                <ToggleButton value="false">کمترین تعداد ثبت نامی</ToggleButton>
                            </ToggleButtonGroup>
                        </Grid>

                        <Grid item>
                            <TextField placeholder='جستجو بر اساس نام درس' style={{ width: "300px" }}></TextField></Grid>
                    </Grid>
                    <Grid item container justifyContent='center' direction="row-reverse">
                        {preRegCourseList.map((item, index) => (
                            <M5_CourseItem
                                name={item.name}
                                count={item.count}
                                key={index}
                                removeItem={handleRemoveItem}
                            />
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </DashboardLayout>
    );
}

