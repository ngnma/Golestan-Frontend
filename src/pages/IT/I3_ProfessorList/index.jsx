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


export default function I3_ManagerList() {
  //mock datas
  const ProfessorList = [
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
      id: "0012909033",
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
      id: "0012909033",
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
      id: "0012909033",
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
      id: "0012909033",
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
      id: "0012909033",
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
      id: "0012909033",
      national_code: "0012909045",
      faculty: "computer",
      major: "network",
      level: "ostadyar",
      entry_year: "1382",
      image: profile,
    },
  ];
  //variables
  const courseId = useSelector((state) => state.m7_courseid); //redux
  const courseFullName = useSelector((state) => state.m7_coursefullname); //redux

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangeInfo = (index) => {
    const item = ProfessorList[index];
    dispatch(
      action.setI3TOI9Add(
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
    navigate("/I9");
  };
  const handleAddProfessor = () => {
    dispatch(action.setI3TOI9Add(true));
    navigate("/I9");
  }

  const handleRemoveItem = (index) => {
    const removedItem = selectedList[index];
    const updatedSelectedList = selectedList.filter((_, i) => i !== index);
    setSelectedList(updatedSelectedList);
  };

  //live search
  const [searchKey, setSearchKey] = useState("");
  const [selectedList, setSelectedList] = useState([]);

  const handleSearch = (event) => {
    setSearchKey(event.target.value)
  }
  const searchProfessors = () => {
    return ProfessorList.filter((professor) =>
      professor.first_name.toLowerCase().startsWith(searchKey.toLowerCase())
    );
  };
  useEffect(() => {
    setSelectedList(ProfessorList);
  }, []);
  useEffect(() => {
    setSelectedList(searchProfessors());
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
          <Button onClick={handleAddProfessor}>افزودن استاد +</Button>
          <Grid />
          <Grid item>
            <Typography>مشاهده لیست اساتید {courseFullName}</Typography>
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
                آپلود اکسل
              </Button>
            </Grid>

            <Grid item>
              <TextField
                placeholder="جستجو بر اساس نام استاد"
                style={{ width: "300px" }}
                inputProps={{ dir: "rtl" }}
                onChange={handleSearch}
                value={searchKey}
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


