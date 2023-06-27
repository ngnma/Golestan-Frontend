import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Button, Grid, Box } from '@mui/material';

export default function M5_CourseItem(props) {

    return (
        <Grid item sx={{ width: '500px', backgroundColor: "#B2CDFE", borderRadius: '10px', m: 1 }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container  justifyContent="space-around" >
                    <Grid item  >
                        <Button variant="outlined" className="M2_btn" >حذف</Button>
                    </Grid>
                    <Grid item  >
                        <Button variant="outlined" className="M2_btn" >اطلاعات کامل</Button>
                    </Grid>
                    <Grid item >
                        <p>{props.count}</p>
                    </Grid>
                    <Grid item >
                        <p>{props.name}</p>
                    </Grid>

                </Grid>
            </Box>
        </Grid>

    );
}
