import { React, useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Button, Grid, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as action from "../../../action"

export default function M8_CourseItem(props) {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleRemove = () => {
        // Call the removeItem callback function with the item's index
        props.removeItem(props.index);
    };
    const fullInformation = () => {
        setSelectedIndex(props.index);
        dispatch(action.setCourseId(props.itemid));
        dispatch(action.setCourseFullName(props.name+' '+props.professor));
        navigate('/M9');
    }

    return (
        <Grid item sx={{ width: '500px', backgroundColor: "#B2CDFE", borderRadius: '10px', m: 1 }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container justifyContent="space-around" alignItems="baseline" >
                    <Grid item  >
                        <Button variant="outlined" className="M2_btn" onClick={handleRemove}>حذف</Button>
                    </Grid>
                    <Grid item  >
                        <Button variant="outlined" className="M2_btn" onClick={fullInformation}>اطلاعات کامل</Button>
                    </Grid>
                    <Grid item >
                        <p>{props.count}</p>
                    </Grid>
                    <Grid item >
                        <p>{props.name}<br /><span style={{fontSize:"11px"}}>{props.professor}</span></p>
                    </Grid>
                </Grid>
            </Box>
        </Grid>

    );
}
