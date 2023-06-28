import React from 'react';
import './style.scss';
import DashboardLayout from '../../../components/DashboardLayout';
import { Grid, Typography, TextField, Button } from "@mui/material";
import { Margin } from '@mui/icons-material';
import Mainlayout from '../../../components/MainLayout';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function M3_UpdateTerm(props) {
  const professorListMock = [
    { value: 10, name: 'Vahidi' },
    { value: 20, name: 'Rahmati' }
  ];
  const studentListMock = [
    { value: 10, name: 'Negin' },
    { value: 20, name: 'Zahra' }
  ];
  const [professor, setProfrssor] = React.useState('');
  const [student, setStudent] = React.useState('');

  const handleChangeProfessor = (event) => {
    setProfrssor(event.target.value);
  };

  const handleChangeStudent = (event) => {
    setStudent(event.target.value);
  };

  const handleSubmit = ()=>{
    //API Call post(professor,student,name)
  }

  const { index } = props;
  return (
    <DashboardLayout>
      <Grid container >
        <Grid item container
          justifyContent="space-between"
          alignContent="center"
        >
          <Grid item />
          <Grid item>
            <Typography>{index}ویرایش اطلاعات ترم ؟</Typography>
          </Grid>
        </Grid>
        <hr
          style={{
            width: "100%",
            borderWidth: 0,
            borderTop: "1px solid black",
          }}
        />
        <div>

        </div>
        <Grid container >
          <Grid item xs={4}></Grid>
          <Grid item xs={4} container gap="20%"
          >
            <Grid item container direction="column">
              <Grid item>
                <label>نام ترم</label>
              </Grid>
              <Grid item >
                <TextField variant="outlined" style={{ width: "100%" }} />
              </Grid>
            </Grid>

            <Grid item container direction="column">
              <Grid item>
                <label>لیست اساتید</label>
              </Grid>
              <Grid item container gap="10px">
                <Grid item flexGrow={1}>
                  <Button variant="contained" className='M3_btn'>آپلوداکسل</Button>
                </Grid>
                <Grid item flexGrow={1}>
                  <Button variant="contained" className='M3_btn'>افزودن</Button>
                </Grid>
                <Grid item flexGrow={5}>

                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <Select value={professor} onChange={handleChangeProfessor}>
                        {professorListMock.map((item) => (
                          <MenuItem key={item.value} value={item.value}>
                            {item.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>

                </Grid>
              </Grid>
            </Grid>

            <Grid item container direction="column">
              <Grid item>
                <label>لیست دانشجویان</label>
              </Grid>
              <Grid item container gap="10px">
                <Grid item flexGrow={1}>
                  <Button variant="contained" className='M3_btn'>آپلوداکسل</Button>
                </Grid>
                <Grid item flexGrow={1}>
                  <Button variant="contained" className='M3_btn'>افزودن</Button>
                </Grid>
                <Grid item flexGrow={5}>

                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <Select value={student} onChange={handleChangeStudent}>
                        {studentListMock.map((item) => (
                          <MenuItem key={item.value} value={item.value}>
                            {item.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>

                </Grid>
              </Grid>
            </Grid>

            <Button itme variant="contained" style={{ width: "100%", height: "50px" }} onClick={handleSubmit}>ذخیره تغییرات</Button>

          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}
