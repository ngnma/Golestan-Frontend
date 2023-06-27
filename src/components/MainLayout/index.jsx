import React from 'react'
import DashboardLayout from '../DashboardLayout'
import { Grid, Typography, Button } from "@mui/material";


export default function Mainlayout({children,btn,text,btnText,functionality}) {
  return btn===true ?(
    <DashboardLayout>
      <Grid container>
        <Grid
          container
          item
          justifyContent="space-between"
          alignContent="center"
        >
          <Grid item>
            <Button variant="text" onClick={functionality}>
              {btnText}
            </Button>
          </Grid>
          <Grid item>
            <Typography>{text}</Typography>
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
{children}
        </Grid>
      </Grid>
    </DashboardLayout>
  ):(    
  <DashboardLayout>
    <Grid container>
      <Grid
        container
        item
        justifyContent="space-between"
        alignContent="center"
      >
        <Grid/>
        <Grid item>
          <Typography>مشاهده لیست ترم ها</Typography>
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
{children}
      </Grid>
    </Grid>
  </DashboardLayout>
  );

}
