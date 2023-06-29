
import { width } from "@mui/system";
import * as React from "react";
import DashboardLayout from "../../../components/DashboardLayout";
import "./style.scss";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";
import { Dashboard } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useEffect } from "react";
import dayjs from 'dayjs';


export default function M6_AddCourse() {
  const [course, setCourse] = React.useState("");
  const [selectedExamDate, setSelectedExamDate] = React.useState(null);
  const [selectedClassDate, setSelectedClassDate] = React.useState(null);

  const handleExamDateChange = (date) => {
    setSelectedExamDate(formatDate(date));
  };
  const handleClassDateChange = (date) => {
    setSelectedClassDate(formatDate(date));
  };
  const formatDate = (date) => {
    return dayjs(date).format('ddd MMM DD YYYY HH:mm:ss');
    //example of result : Tue Jun 20 2023 00:00:00
  };

  //mock data
  const mockCourse = [
    // should be "lable" not name or anything else!!!
    { label: "آمار و احتمال مهندسی" },
    { label: "برنامه نویسی پیشرفته" },
    { label: "پایگاه داده" },
    { label: "مهندسی اینترنت" },
    { label: "طراحی سیستم نهفته" },
  ];
  const mockProfessor = [
    // should be "lable" not name or anything else!!!
    { label: "آمار و احتمال مهندسی" },
    { label: "برنامه نویسی پیشرفته" },
    { label: "پایگاه داده" },
    { label: "مهندسی اینترنت" },
    { label: "طراحی سیستم نهفته" },
  ];

  const handleChange = (event) => {
    setCourse(event.target.value);
  };
  return (
    <DashboardLayout>
      <Grid container>
        <Grid
          container
          item
          justifyContent="space-between"
          alignContent="center"
        >
          <Grid item></Grid>
          <Grid item>
            <Typography>افزودن درس جدید</Typography>
          </Grid>
        </Grid>
        <hr
          style={{
            width: "100%",
            borderWidth: 0,
            borderTop: "1px solid black",
          }}
        />
        <Grid item>
          <div id="addCourseContainer">
            <div className="addCourseItem">
              <label className="addCourseItemLabel">درس</label>
              <Autocomplete
                disablePortal
                options={mockCourse}
                sx={{ width: 400 }}
                renderInput={(params) => <TextField {...params} label="درس" />}
              />
            </div>
            <div className="addCourseItem">
              <label className="addCourseItemLabel">استاد</label>
              <Autocomplete
                disablePortal
                options={mockProfessor}
                sx={{ width: 400 }}
                renderInput={(params) => (
                  <TextField {...params} label="استاد" />
                )}
              />
            </div>
            <div className="addCourseItem">
              <label className="addCourseItemLabel">ظرفیت</label>
              <TextField id="outlined-basic" variant="outlined" inputProps={{ dir: "rtl" }}/>
            </div>
            <div className="addCourseItem">
              <label className="addCourseItemLabel">
                تاریخ و ساعت برگزاری کلاس
              </label>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DateTimePicker"]}>
                  <DateTimePicker
                 
                    label="تاریخ و ساعت برگزاری کلاس"
                    value={selectedClassDate}
                    onChange={handleClassDateChange}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </div>
            <div className="addCourseItem">
              <label className="addCourseItemLabel">روز امتحان</label>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker
                    label="روز امتحان "
                    value={selectedExamDate}
                    onChange={handleExamDateChange}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </div>
            <div className="addCourseItem"></div>
          </div>
          <Button id="M6_Button" variant="contained">
            ثبت جدید یا تغییر اطلاعات
          </Button>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}
