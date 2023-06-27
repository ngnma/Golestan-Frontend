import { React, useEffect, useState } from 'react';
import StudentItem from '../../../components/Manager/StudentItem';
import profile from '../../../assets/profile18.png';
import DashboardLayout from '../../../components/DashboardLayout';
import Divider from '@mui/material/Divider';
import { Grid , Typography} from "@mui/material";

export default function StudentList() {
  //mock data
  const studentList2 = [
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
  const [studentList, setStudentList] = useState([]);
  useEffect(() => {
    //get studentList2 from back and remove mock data
    setStudentList(studentList2);
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
            <Typography>مشاهده لیست دانشجویان</Typography>
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
            {studentList.map((item, index) => (
              <StudentItem name={item.name} image={item.image} key={index} />
            ))}
          </div>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}


