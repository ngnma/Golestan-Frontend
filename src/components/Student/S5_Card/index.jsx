import { React, useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Button, Grid, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as action from "../../../action"

export default function S5_Card(props) {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handlePreReg = () => {
        // Call API delete prereg
        // Term id is in redux 
        // course id is props.courseid
        console.log(props.courseid);
        props.removeItem(props.index);
    };


    return (
        <Grid item sx={{ width: '500px', backgroundColor: "#B2CDFE", borderRadius: '10px', m: 1 }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container justifyContent="space-around" alignItems="baseline" >
                    <Grid item  >
                        <Button variant="contained" className="M2_btn" onClick={handlePreReg}>لغو</Button>
                    </Grid>
                    <Grid item  >
                        <Button variant="outlined" className="M2_btn" >اطلاعات کامل</Button>
                    </Grid>
                    <Grid item >
                        <p>{props.name}<br /><span style={{fontSize:"11px"}}>{props.professor}</span></p>
                    </Grid>
                </Grid>
            </Box>
        </Grid>

    );
}
