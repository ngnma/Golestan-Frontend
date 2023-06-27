import React from 'react';
import './style.scss';
import DashboardLayout from '../../../components/DashboardLayout';
import { Grid, Typography, TextField, Button } from "@mui/material";
import { Margin } from '@mui/icons-material';

export default function M3_UpdateTerm(props) {
  const { index } = props;
  return (
    // <DashboardLayout>
    //   <div style={{
    //     display: 'flex',
    //     flexDirection: 'column',
    //     alignItems: 'center',
    //     paddingTop: '8%', // Adjust the padding top value as needed
    //   }}/>
    //   <p>ویرایش اطلاعات ترم ؟</p>
    //   <p>{index}</p>

    // </DashboardLayout>
    <DashboardLayout>
      <Grid container >
        <Grid item container 
          justifyContent="space-between"
          alignContent="center"
        >
          <Grid item />
          <Grid item>
            <Typography>{index}ویرایش اطلاعات ترم ؟</Typography>
          </Grid>
        </Grid>
        <hr 
          style={{
            width: "100%",
            borderWidth: 0,
            borderTop: "1px solid black",
          }}
        />

        <Grid container >
          <Grid item xs={4}></Grid>
          <Grid item xs={4} container gap="20%" 
          >
            <Grid item container direction="column">
              <Grid item>
                <label>نام ترم</label>
              </Grid>
              <Grid item >
                <TextField variant="outlined" style={{ width: "100%" }} />
              </Grid>
            </Grid>

            <Grid item container direction="column">
              <Grid item>
                <label>لیست اساتید</label>
              </Grid>
              <Grid item container gap="10px">
                <Grid item flexGrow={1}>
                  <Button variant="contained" className='M3_btn'>آپلوداکسل</Button>
                </Grid>
                <Grid item flexGrow={1}>
                  <Button variant="contained" className='M3_btn'>افزودن</Button>
                </Grid>
                <Grid item flexGrow={5}>
                  <TextField variant="outlined" style={{ width: "100%" }} />
                </Grid>
              </Grid>
            </Grid>

            <Grid item container direction="column">
              <Grid item>
                <label>لیست دانشجویان</label>
              </Grid>
              <Grid item container gap="10px">
                <Grid item flexGrow={1}>
                  <Button variant="contained" className='M3_btn'>آپلوداکسل</Button>
                </Grid>
                <Grid item flexGrow={1}>
                  <Button variant="contained" className='M3_btn'>افزودن</Button>
                </Grid>
                <Grid item flexGrow={5}>
                  <TextField variant="outlined" style={{ width: "100%" }} />
                </Grid>
              </Grid>
            </Grid>

            <Button itme variant="contained" style={{ width: "100%", height: "50px"}}>ذخیره تغییرات</Button>

          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}
