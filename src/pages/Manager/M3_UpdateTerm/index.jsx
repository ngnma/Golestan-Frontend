import React from 'react';
import './style.scss';
import DashboardLayout from '../../../components/DashboardLayout';
import { Grid, Typography } from "@mui/material";

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
      <Grid container>
        <Grid
          container
          item
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
        <Grid item>

        </Grid>
      </Grid>
    </DashboardLayout>
  );
}
