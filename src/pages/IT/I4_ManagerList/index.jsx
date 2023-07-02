import { useSelector } from "react-redux";
import { React, useState, useEffect } from "react";
import { TextField, Typography, Button, Grid } from "@mui/material";
import DashboardLayout from "../../../components/IT/DashboardLayout";
import profile from "../../../assets/profile18.png";
import M9_StudentCard from "../../../components/Manager/M9_StudenrCard";
import { useDispatch } from "react-redux";
import * as action from "../../../action";
import { useNavigate } from "react-router-dom";
import FormItem from "../../../components/IT/FormItem";
import { act } from "react-dom/test-utils";
import * as XLSX from 'xlsx';


export default function I4_ManagerList() {
  //variables
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchKey ,setSearchKey] =useState("");
  const [selectedList,setSelectedList]=useState([]);
  const handleChangeInfo = (index) => {
    const item = ManagerList[index];
    dispatch(
      action.setI4TOI8Add(
        false,
        item.first_name,
        item.last_name,
        item.id,
        item.faculty,
        item.national_code,
        item.major,
        item.level,
        item.entry_year
      )
    );
    navigate("/I8");
  };
  const handleAddManager =()=>{
    dispatch(action.setI4TOI8Add(true));
    navigate("/I8");
  }
  const handleSearch =(event)=>{
    setSearchKey(event.target.value)
    // console.log(event.target.value)
  }
  //mock datas
  var ManagerList = [
    {
      first_name: "reza",
      last_name: "karimi",
      id: "0012909033",
      national_code: "0012909045",
      faculty: "computer",
      major: "network",
      level: "ostadyar",
      entry_year: "1382",
      image: profile,
    },
    {
      first_name: "hamid",
      last_name: "karimi",
      id: "0012909034",
      national_code: "0012909045",
      faculty: "computer",
      major: "network",
      level: "ostadyar",
      entry_year: "1382",
      image: profile,
    },
    {
      first_name: "ali",
      last_name: "karimi",
      id: "0012909035",
      national_code: "0012909045",
      faculty: "computer",
      major: "network",
      level: "ostadyar",
      entry_year: "1382",
      image: profile,
    },
    {
      first_name: "amir",
      last_name: "karimi",
      id: "0012909036",
      national_code: "0012909045",
      faculty: "computer",
      major: "network",
      level: "ostadyar",
      entry_year: "1382",
      image: profile,
    },
    {
      first_name: "mehdi",
      last_name: "karimi",
      id: "0012909037",
      national_code: "0012909045",
      faculty: "computer",
      major: "network",
      level: "ostadyar",
      entry_year: "1382",
      image: profile,
    },
    {
      first_name: "navid",
      last_name: "karimi",
      id: "0012909038",
      national_code: "0012909045",
      faculty: "computer",
      major: "network",
      level: "ostadyar",
      entry_year: "1382",
      image: profile,
    },
    {
      first_name: "erfan",
      last_name: "karimi",
      id: "0012909039",
      national_code: "0012909045",
      faculty: "computer",
      major: "network",
      level: "ostadyar",
      entry_year: "1382",
      image: profile,
    },
  ];
  const handleRemoveItem = (index) => {
    const removedItem = selectedList[index].id;
    console.log(removedItem);
    const updatedList = ManagerList.filter((item) => item.id !== removedItem);
    // const updatedList = removeItemById(removedItem);
    console.log(updatedList);
    // const updatedList = [...ManagerList];
    // updatedList.splice(index, 1);
    // setSearchKey("");
    setSelectedList(updatedList);
}
  const searchManagers = () => {
    return ManagerList.filter((Manager) =>
      Manager.first_name.toLowerCase().startsWith(searchKey.toLowerCase())
    );
  };
  useEffect(() => {
    //get ManagerList from back and remove mock data
    setSelectedList(ManagerList);
  }, []);
  useEffect(() => {
    setSelectedList(searchManagers());
  }, [searchKey]);

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

  
  return (
    <DashboardLayout>
      <Grid container>
        <Grid
          container
          item
          justifyContent="space-between"
          alignContent="center"
        >
          <Button onClick={handleAddManager}>افزودن مدیر+</Button>
          <Grid />
          <Grid item>
            <Typography>مشاهده لیست مدیران </Typography>
          </Grid>
        </Grid>
        <hr
          style={{
            width: "100%",
            borderWidth: 0,
            borderTop: "1px solid black",
          }}
        />

        <Grid item container direction="column">
          <Grid item container justifyContent="space-between">
            <Grid item>
              <Button
                variant="contained"
                style={{ width: "200px", height: "50px" }}
                onClick={handleFileUpload}
              >
                 آپلوداکسل
              </Button>
            </Grid>

            <Grid item>
              <TextField
                placeholder="جستجو بر اساس نام مدیر"
                style={{ width: "300px" }}
                inputProps={{ dir: "rtl" }}
                // value={searchKey}
                onChange={handleSearch}
              ></TextField>
            </Grid>
          </Grid>
          <Grid item>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "40px",
                justifyContent: "center",
                marginTop: "7%",
              }}
            >
              {selectedList.map((item, index) => (
                <FormItem
                  name={item.first_name}
                  image={item.image}
                  key={index}
                  index={index}
                  onClick={handleChangeInfo}
                  removeItem={handleRemoveItem}
                />
              ))}
            </div>
          </Grid>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}
