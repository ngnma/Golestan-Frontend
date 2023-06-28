import { useSelector } from 'react-redux';
import { React, useState, useEffect } from 'react';
import { TextField, Typography, Button, Grid, Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import DashboardLayout from '../../../components/DashboardLayout';


export default function M7_PreRegStudentList() {
  const courseId = useSelector((state) => state.m7_courseid);//redux
  const courseFullName = useSelector((state) => state.m7_coursefullname);//redux

  return (
    <DashboardLayout>
      <Grid container>
        <Grid
          container
          item
          justifyContent="space-between"
          alignContent="center"
        >
          <Grid />
          <Grid item>
            <Typography>لیست پیش ثبت نام های درس  {courseFullName}</Typography>
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
                // value={alignment}
                exclusive
                // onChange={handleChange}
                >
                <ToggleButton value="true">جدیدترین</ToggleButton>
                <ToggleButton value="false">قدیمی ترین</ToggleButton>
              </ToggleButtonGroup>
            </Grid>

            <Grid item>
              <TextField placeholder='جستجو بر اساس نام دانشجو' style={{ width: "300px" }}></TextField></Grid>
          </Grid>

        </Grid>
      </Grid>
    </DashboardLayout>
  )
}
