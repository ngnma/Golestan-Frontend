import { useState, React, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import "./style.scss";

import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as action from "../../../action"


export default function TermItem(props) {

  const dispatch = useDispatch();//redux
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleUpdate = () => {
    setSelectedIndex(props.index);
    dispatch(action.setTermName(props.name));//redux
    navigate('/M3');
  };

  const handleRemove = () => {
    // Call the removeItem callback function with the item's index
    props.removeItem(props.index);
  };

  const handleCourseShow = () => {
    dispatch(action.setTermName(props.name));//redux
    navigate('/M4')
  }


  return (
    <Grid item sx={{ width: '500px', backgroundColor: "#B2CDFE", borderRadius: '10px', m: 1, height: "60px" }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container direction="row" alignItems="baseline" justifyContent="center">
          <Grid item xs={3} >
            <Button variant="contained" className="M2_btn" onClick={handleRemove}>حذف</Button>
          </Grid>
          <Grid item xs={3} >
            <Button variant="outlined" className="M2_btn" onClick={handleUpdate}>ویرایش</Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="text" className="M2_btn" onClick={handleCourseShow}>{props.name}</Button>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};