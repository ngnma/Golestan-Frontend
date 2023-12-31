import S5_Card from "../../../components/Student/S5_Card";
import { React, useState, useEffect } from 'react'
import Mainlayout from '../../../components/MainLayout';
import { Grid, TextField, Typography } from '@mui/material';
import DashboardLayout from '../../../components/Student/DashboardLayout';
import { useSelector } from 'react-redux';
import axios from "axios";
export default function S5_PreRegistration() {
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
    axios.get(`http://localhost:8080/api/term/${termid}/preregistrations`,    {
      headers: {Authorization : `Bearer ${sessionStorage.getItem("token")}`
    }}).then((response) => {
      setMlist(response.data[0].semester_courses)
      console.log(response);
    }, (error) => {
      console.log(error);
    });
    //setMlist(mock)
  }, [])

  const handleRemoveItem = (index,item) => {
    axios.delete(`http://localhost:8080/api/course/preregister/${termid}`,    {
      headers: {Authorization : `Bearer ${sessionStorage.getItem("token")}`
    }}).then((response) => {
      //setTermList(response.data)
      setMlist(response.data[0].semester_courses)
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
             مشاهده پیش ثبت نام ها
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
            placeholder="جستجو بر اساس نام درس"
            style={{ width: "300px" }}
            inputProps={{ dir: "rtl" }}
          />
        </Grid>
        <Grid item container justifyContent="center" direction="row-reverse">
          {mlist.map((item, index) => (
            <S5_Card
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
