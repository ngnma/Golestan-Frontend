import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';


export default function StudentItem(props) {
    return (
        
        <div style={{ width: '300px' }}>
            <Box sx={{ flexGrow: 1 }} >
                <Grid container spacing={2} >
                    <Grid item xs={8} style={{ backgroundColor: "Silver" }}>
                        <p>{props.name}</p>
                    </Grid>
                    <Grid item xs={4} style={{ backgroundColor: "Silver" }}>
                        <Avatar alt={props.name} src={props.image} />
                    </Grid>
                </Grid>
            </Box>
        </div>
        

    )
}
