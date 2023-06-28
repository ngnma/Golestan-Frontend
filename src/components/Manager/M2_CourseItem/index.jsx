import {useState,React, useEffect} from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import "./style.scss";

import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as action from "../../../action"


export default function M2_CourseItem(props) {

  const dispatch = useDispatch();


  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleUpdate = () => {
    setSelectedIndex(props.index);
    dispatch(action.setTermName(props.name));
    navigate('/M3');
  };

  const handleRemove = () => {
    // Call the removeItem callback function with the item's index
    props.removeItem(props.index);
  };


  return (
      <Grid item sx={{ width: '500px' ,backgroundColor:"#B2CDFE", borderRadius:'10px', m: 1}}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} direction="row" >
            <Grid item xs={3} >
              <Button variant="contained" className="M2_btn" onClick={handleRemove}>حذف</Button>
            </Grid>
            <Grid item xs={3} >
              <Button variant="outlined" className="M2_btn" onClick={handleUpdate}>ویرایش</Button>
            </Grid>
            <Grid item xs={6}>
              <p>{props.name}</p>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    );
};