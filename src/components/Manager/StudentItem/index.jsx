import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';


export default function StudentItem(props) {
    return (
        <Grid item sx={{ width: '400px', backgroundColor: "#B2CDFE", borderRadius: '10px' }} >
            <Box >
                <Grid container alignItems="center">
                    <Grid item xs={8} >
                        <p>{props.name}</p>
                    </Grid>
                    <Grid item xs={4} >
                        <Avatar alt={props.name} src={props.image} />
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    )
}
