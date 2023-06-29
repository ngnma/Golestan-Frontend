import { useState, React, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import "./style.scss";

import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as action from "../../../action"


export default function S2_TermCard(props) {

  const dispatch = useDispatch();//redux
  const navigate = useNavigate();

  const handleCourseShow = () => {
    dispatch(action.setTermID(props.termid));//redux
    navigate('/S3')
  }


  return (
    <Grid item sx={{ width: '500px', backgroundColor: "#B2CDFE", borderRadius: '10px', m: 1, height: "60px" }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container direction="row" alignItems="baseline" justifyContent="center">
          <Grid item xs={6} />
          <Grid item xs={6}>
            <Button variant="text" className="s2_btn" onClick={handleCourseShow}>{props.name}</Button>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};