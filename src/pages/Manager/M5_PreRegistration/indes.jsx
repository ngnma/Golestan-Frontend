

import { Grid, TextField, Button, Typography } from '@mui/material';
import { React, useState, useEffect } from 'react';
import Mainlayout from '../../../components/MainLayout';
import './styles.scss';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import DashboardLayout from '../../../components/DashboardLayout';
import M5_CourseItem from '../../../components/Manager/M5_CourseCard';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { writeFile } from 'xlsx';
import * as XLSX from 'xlsx';

export default function M5_PreRegistration() {
    //excel export 
    function exportToExcel(data) {
        // Create a new workbook
        const workbook = XLSX.utils.book_new();
      
        // Convert data to a worksheet
        const worksheet = XLSX.utils.json_to_sheet(data);
      
        // Add the worksheet to the workbook
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
      
        // Convert the workbook to a binary Excel file
        const excelFile = XLSX.write(workbook, { bookType: 'xlsx', type: 'binary' });
      
        // Download the file
        const buffer = new ArrayBuffer(excelFile.length);
        const view = new Uint8Array(buffer);
        for (let i = 0; i < excelFile.length; i++) {
          view[i] = excelFile.charCodeAt(i) & 0xFF;
        }
        const blob = new Blob([buffer], { type: 'application/octet-stream' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'data.xlsx';
        link.click();
        URL.revokeObjectURL(url);
      }

      const downloadExcel =()=>{
        exportToExcel(mock);
      }
      
    //mock data
    const mock = [
        { id:1, name: "آمار و احتمال مهندسی", count: 12 ,professor:"دکتر عبدوس"},
        { id:2, name: "برنامه نویسی پیشرفته", count: 25 ,professor:"دکتر وحیدی"},
        { id:3, name: "شبکه های کامپیوتری", count: 1 ,professor:"دکتر عباسپور"},
        { id:4, name: "آمار و احتمال مهندسی", count: 13 ,professor:"دکتر عبدوس"},
        { id:5, name: "برنامه نویسی پیشرفته", count: 22 ,professor:"دکتر وحیدی"},
        { id:6, name: "شبکه های کامپیوتری", count: 13,professor:"دکتر عباسپور"},
        { id:7, name: "آمار و احتمال مهندسی", count: 19 ,professor:"دکتر عبدوس"},
        { id:8, name: "برنامه نویسی پیشرفته", count: 24 ,professor:"دکتر وحیدی"},
        { id:9, name: "شبکه های کامپیوتری", count: 14 ,professor:"دکتر عباسپور"}
    ];
    const [alignment, setAlignment] = useState('true');
    const [preRegCourseList, setPreRegCourseList] = useState([]);
    const navigate = useNavigate();
    const termName = useSelector((state) => state.termname);//redux

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
        if (alignment === "true") {
            preRegCourseList.sort((a, b) => a.count - b.count);
            console.log(preRegCourseList)
        } else {
            preRegCourseList.sort((b, a) => a.count - b.count);
            console.log(preRegCourseList)
        }
    };

    const handleAddCourse = () => {
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
                        <Typography>دروس پیش ثبت نامی {termName}</Typography>
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
                        <Grid item><Button variant='contained' style={{ width: "200px", height: "50px" }} onClick={downloadExcel}>دانلود اکسل</Button></Grid>

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
                            <M5_CourseItem
                                professor={item.professor}
                                itemid={item.id}
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



