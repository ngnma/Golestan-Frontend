import { width } from '@mui/system';
import * as React from 'react';
import DashboardLayout from '../../../components/DashboardLayout';
import './style.scss'

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';




export default function M6_AddCourse() {
    const [course, setCourse] = React.useState('');
    //mock data
    const mockCourse = [// should be "lable" not name or anything else!!!
        { label: "آمار و احتمال مهندسی" },
        { label: "برنامه نویسی پیشرفته" },
        { label: "پایگاه داده" },
        { label: "مهندسی اینترنت" },
        { label: "طراحی سیستم نهفته" }];
    const mockProfessor = [// should be "lable" not name or anything else!!!
        { label: "آمار و احتمال مهندسی" },
        { label: "برنامه نویسی پیشرفته" },
        { label: "پایگاه داده" },
        { label: "مهندسی اینترنت" },
        { label: "طراحی سیستم نهفته" }];

    const handleChange = (event) => {
        setCourse(event.target.value);
    };
    return (
        <DashboardLayout>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingTop: '8%', // Adjust the padding top value as needed
            }}></div>
            <p>افزودن درس جدید</p>
            <hr style={{ width: '100%', borderWidth: 0, borderTop: '1px solid black' }} />
            <div id="addCourseContainer">
                <div className='addCourseItem'>
                    <label className="addCourseItemLabel">درس</label>
                    <Autocomplete
                        disablePortal
                        options={mockCourse}
                        sx={{ width: 400 }}
                        renderInput={(params) => <TextField {...params} label="درس" />}
                    />
                </div>
                <div className='addCourseItem'>
                    <label className="addCourseItemLabel">استاد</label>
                    <Autocomplete
                        disablePortal
                        options={mockProfessor}
                        sx={{ width: 400 }}
                        renderInput={(params) => <TextField {...params} label="استاد" />}
                    />
                </div>
                <div className='addCourseItem'>
                    <label className="addCourseItemLabel">ظرفیت</label>
                    <TextField id="outlined-basic" variant="outlined" />
                </div>
                <div className='addCourseItem'>
                    <label className="addCourseItemLabel">تاریخ و ساعت برگزاری کلاس</label>
                


                </div>
                <div className='addCourseItem'>
                    <label className="addCourseItemLabel">روز امتحان</label>
                </div>
                <div className='addCourseItem'></div>
            </div>
            <Button id="M6_Button" variant="contained" >ثبت جدید یا تغییر اطلاعات</Button>
        </DashboardLayout>
    );
}
