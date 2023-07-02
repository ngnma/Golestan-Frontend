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
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import * as XLSX from 'xlsx';


export default function M3_UpdateTerm(props) {
  const [selectedList,setSelectedList] = React.useState([]);
  const [formData, setformData] = React.useState({
    term_name: "",
    peroffesor_list: [],
    students_list: [],
  });
  const professorListMock = [
    { value: 10, name: 'Vahidi' },
    { value: 20, name: 'Rahmati' }
  ];
  const studentListMock = [
    { value: 10, name: 'Negin' },
    { value: 20, name: 'Zahra' }
  ];
  const [professor, setProfrssor] = React.useState('');
  const [peroffesors,setProfrssors]=React.useState([]);
  const [student, setStudent] = React.useState('');
  const termName = useSelector((state) => state.termname);//redux

  const handleChangeProfessor = (event) => {
    setProfrssor(event.target.value);
  };
  const handleAddProfessor =()=>{
    setProfrssors((prevProfessor)=>[...prevProfessor,professor])
    setProfrssor("")
    setformData((prevFormData)=>({
      ...prevFormData,
      peroffesor_list:peroffesors,
    }))
    console.log(formData)
  }


  const handleChangeStudent = (event) => {
    setStudent(event.target.value);
  };


  useEffect(() => {
    //get studentList2 from back and remove mock data
    setSelectedList(professorListMock);
  }, []);
  const handleSubmit = ()=>{
    //API Call post(professor,student,name)
  }
    //excel 
    const processExcelData = (workbook) => {
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
    
      // Extract column names from the first row
      const columnNames = jsonData[0];
    
      // Remove the first row (column names) from the data
      const rows = jsonData.slice(1);
    
      // Convert the data to an array of objects
      const convertedData = rows.map((row) => {
        const obj = {};
        columnNames.forEach((column, index) => {
          obj[column] = row[index];
        });
        return obj;
      });
    
      return convertedData;
    };
    const handleFileUpload = () => {
      const fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.accept = '.xlsx, .xls';
      fileInput.addEventListener('change', handleFileChange);
      fileInput.click();
    };
    
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
    
      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        // Process the Excel data and convert it to an array of objects
        const convertedData = processExcelData(workbook);
        // Do something with the converted data
        console.log(convertedData);
        setSelectedList(convertedData);
      };
    
      reader.readAsArrayBuffer(file);
    };


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
            <Typography>ویرایش اطلاعات {termName} </Typography>
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
                  <Button variant="contained" className='M3_btn' onClick={handleFileUpload}>آپلوداکسل</Button>
                </Grid>
                <Grid item flexGrow={1}>
                  <Button variant="contained" className='M3_btn' onClick={handleAddProfessor}>افزودن</Button>
                </Grid>
                <Grid item flexGrow={5}>

                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <Select value={professor} onChange={handleChangeProfessor}>
                        {selectedList.map((item) => (
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
