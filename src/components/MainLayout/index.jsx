import React from 'react'
import DashboardLayout from '../DashboardLayout'
import { Grid , Typography} from "@mui/material";


export default function Mainlayout() {
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
            <Button variant="text" onClick={handleAddCourse}>
              افزودن ترم +
            </Button>
          </Grid>
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

        </Grid>
      </Grid>
    </DashboardLayout>
  )
}
