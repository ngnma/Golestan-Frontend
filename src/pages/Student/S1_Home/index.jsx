import { React, useEffect, useState } from "react";
import S2_TermCard from "../../../components/Student/S2_TermCard";
import { useNavigate } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import Mainlayout from "../../../components/Student/MainLayout";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import * as action from "../../../action"

export default function S1_Home() {
    // const dispatch = useDispatch();//redux
    // const lastTerm = useSelector((state) => state.lastterm);
    // const termid = useSelector((state) => state.termid);
    // const lastCourse = useSelector((state) => state.lastcourse);
    // const termName = useSelector((state) => state.termname);//redux
    const termid = useSelector((state)=>state.termid)
    
    useEffect(() => {
        // dispatch(action.setTermName(termName));//redux
        console.log(termid)
    }, []);

    return (
        <Mainlayout text={"خانه"}>
            <Grid container direction="column">
                <Grid item container direction="column">
                    <Grid item>
                        <Typography>اخرین ترم مشاهده شده</Typography>
                    </Grid>
                    <Grid item>
                        <Typography>{termid}</Typography>
                    </Grid>
                </Grid>

                <Grid item container direction="column">
                    <Grid item>
                        <Typography>اخرین درس مشاهده شده</Typography>
                    </Grid>
                    <Grid item>
                        <Typography>{termid}</Typography>
                    </Grid>
                </Grid>

            </Grid>
        </Mainlayout>
    )
}
