import { React, useEffect, useState } from 'react';
import StudentItem from '../../../components/Manager/StudentItem';
import profile from '../../../assets/profile18.png';
import DashboardLayout from '../../../components/DashboardLayout';
import Divider from '@mui/material/Divider';
import { Grid, Typography } from "@mui/material";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function M11_ProfessorList() {
  //mock data
  const mock_list = [
    { name: 'negin', image: profile },
    { name: 'negin', image: profile },
    { name: 'negin', image: profile },
    { name: 'negin', image: profile },
    { name: 'negin', image: profile },
    { name: 'negin', image: profile },
    { name: 'negin', image: profile },
    { name: 'negin', image: profile },
    { name: 'negin', image: profile }
  ];
  const [professorList, setProfessorList] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`http://localhost:8080/api/admin/Professors`,
        {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem("token")}`
            }
        }).then((response) => {
        console.log(response.data)
        setProfessorList(response.data)
    }).catch((err)=>{
      alert(err)
      navigate("/login");
    })

}, []);
  return (
    <DashboardLayout>
      <Grid container>
        <Grid
          container
          item
          justifyContent="space-between"
          alignContent="center"
        >
          <Grid item />
          <Grid item>
            <Typography>مشاهده لیست اساتید</Typography>
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
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'center', marginTop: '7%' }}>
            {professorList.map((item, index) => (
              <StudentItem name={item.name} image={item.image} key={index} />
            ))}
          </div>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}
