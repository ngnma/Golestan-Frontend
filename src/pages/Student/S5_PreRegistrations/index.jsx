import S5_Card from "../../../components/Student/S5_Card";
import { React, useState, useEffect } from 'react'
import Mainlayout from '../../../components/MainLayout';
import { Grid, TextField, Typography } from '@mui/material';
import DashboardLayout from '../../../components/DashboardLayout';
import { useSelector } from 'react-redux';

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
    setMlist(mock)
  }, [])

  const handleRemoveItem = (index) => {
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
              name={item.name}
              professor={item.professor}
              courseid={item.count} // should be id later. now just for testing
              key={index}
              removeItem={handleRemoveItem}
            />
          ))}
        </Grid>
      </Grid>
    </DashboardLayout>
  );


}