import { Grid, TextField, Button, Typography } from '@mui/material';
import { React, useState, useEffect } from 'react';
import Mainlayout from '../../../components/MainLayout';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import DashboardLayout from '../../../components/DashboardLayout';
import M8_CourseItem from '../../../components/Manager/M8_CourseItem';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

export default function M8_Registration() {
    //mock data
 
    const [alignment, setAlignment] = useState('true');
    const [preRegCourseList, setPreRegCourseList] = useState([]);
    const termName = useSelector((state) => state.termname);//redux

    const navigate = useNavigate();
    useEffect(() => {
      axios.get(`http://localhost:8080/api/admin/Professors`,
          {
              headers: {
                  Authorization: `Bearer ${sessionStorage.getItem("token")}`
              }
          }).then((response) => {
          console.log(response.data)
          setPreRegCourseList(response.data)
      }).catch((err)=>{
        alert(err)
        navigate("/login");
      })
  
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
        }else{
            preRegCourseList.sort((b, a) => a.count - b.count);
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
                        
                        <Typography>دروس ثبت نامی {termName}</Typography>
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
                            <TextField placeholder='جستجو بر اساس نام درس' style={{ width: "300px" }} inputProps={{ dir: "rtl" }}></TextField></Grid>
                    </Grid>
                    <Grid item container justifyContent='center' direction="row-reverse">
                        {preRegCourseList.map((item, index) => (
                            <M8_CourseItem
                                name={item.name}
                                professor={item.professor}
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

