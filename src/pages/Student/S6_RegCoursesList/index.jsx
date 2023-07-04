import { React, useState, useEffect } from 'react'
import Mainlayout from '../../../components/MainLayout';
import { Grid, TextField, Typography } from '@mui/material';
import S6_Card from '../../../components/Student/S6_Card'
import DashboardLayout from '../../../components/Student/DashboardLayout';
import { useSelector } from 'react-redux';
import axios from 'axios';

export default function S6_RegCourseList() {
  const mock = [
    { name: "آمار و احتمال مهندسی", count: 12, professor: "دکتر عبدوس" },
    { name: "برنامه نویسی پیشرفته", count: 25, professor: "دکتر وحیدی" },
    { name: "شبکه های کامپیوتری", count: 1, professor: "دکتر عباسپور" },
    { name: "آمار و احتمال مهندسی", count: 13, professor: "دکتر عبدوس" },
    { name: "برنامه نویسی پیشرفته", count: 22, professor: "دکتر وحیدی" },
    { name: "شبکه های کامپیوتری", count: 13, professor: "دکتر عباسپور" },
    { name: "آمار و احتمال مهندسی", count: 19, professor: "دکتر عبدوس" },
    { name: "برنامه نویسی پیشرفته", count: 24, professor: "دکتر وحیدی" },
    { name: "شبکه های کامپیوتری", count: 14, professor: "دکتر عباسپور" }
  ];

  const [mlist, setMlist] = useState([])
  const termid = useSelector((state) => state.termid)

  useEffect(() => {
    
    axios.get(`http://localhost:8080/api/term/${termid}/registration_courses`,    {
      headers: {Authorization : `Bearer ${sessionStorage.getItem("token")}`
    }}).then((response) => {
      console.log(response);
      setMlist(response.data.prcs)
    }, (error) => {
      console.log(error);
    });
    // setMlist(mock)
  }, [])

  const handleRemoveItem = (index,item) => {

    axios.post(`http://localhost:8080/api/course/register/${item}`,    {
      headers: {Authorization : `Bearer ${sessionStorage.getItem("token")}`
    }}).then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });

    const updatedList = [...mlist];
    updatedList.splice(index, 1);
    setMlist(updatedList);
  }

  return (
    <DashboardLayout>
      <Grid container>
        <Grid
          container
          item
          justifyContent="space-between"
          alignContent="center"
        >
          <Grid />
          <Grid item>
            <Typography>
             مشاهده لیست دروس ارایه شده برای ثبت نام
            </Typography>
          </Grid>
        </Grid>
        <hr
          style={{
            width: "100%",
            borderWidth: 0,
            borderTop: "1px solid black",
          }}
        />

        <Grid container item justifyContent="flex-end">
          <TextField
            placeholder=" جستجو بر اساس نام درس یا آیدی"
            style={{ width: "300px" }}
            inputProps={{ dir: "rtl" }}
          />
        </Grid>
        <Grid item container justifyContent="center" direction="row-reverse">
          {mlist.map((item, index) => (
            <S6_Card
              // name={item.name}
              // professor={item.professor}
              // courseid={item.count} // should be id later. now just for testing
              name={item}
              key={index}
              removeItem={()=>handleRemoveItem(item)}
            />
          ))}
        </Grid>
      </Grid>
    </DashboardLayout>
  );


}
