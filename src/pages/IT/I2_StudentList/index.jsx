import { React, useEffect, useState } from "react";
import StudentItem from "../../../components/IT/FormItem";
import profile from "../../../assets/profile18.png";
import DashboardLayout from "../../../components/IT/DashboardLayout";
import Divider from "@mui/material/Divider";
import { Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as action from "../../../action";

export default function I2_StudentList() {
  //mock data
  const mock_list = [
    {
      first_name: "negin",
      last_name: "mashayekhi",
      image: profile,
      id: "98412499",
      national_code: "0023909099",
      faculty: "daneshkade1",
      major: "majors1",
      peroffesor: "entezari",
      entry_year: "1398",
    },
    {
      first_name: "narges",
      last_name: "mashayekhi",
      image: profile,
      id: "98412499",
      national_code: "0023909099",
      faculty: "daneshkade1",
      major: "majors1",
      peroffesor: "entezari",
      entry_year: "1398",
    },
    {
      first_name: "kia",
      last_name: "mashayekhi",
      image: profile,
      id: "98412499",
      national_code: "0023909099",
      faculty: "daneshkade1",
      major: "majors1",
      peroffesor: "entezari",
      entry_year: "1398",
    },
    {
      first_name: "amir",
      last_name: "mashayekhi",
      image: profile,
      id: "98412499",
      national_code: "0023909099",
      faculty: "daneshkade1",
      major: "majors1",
      peroffesor: "entezari",
      entry_year: "1398",
    },
    {
      first_name: "han",
      last_name: "mashayekhi",
      image: profile,
      id: "98412499",
      national_code: "0023909099",
      faculty: "daneshkade1",
      major: "majors1",
      peroffesor: "entezari",
      entry_year: "1398",
    },
    {
      first_name: "navid",
      last_name: "mashayekhi",
      image: profile,
      id: "98412499",
      national_code: "0023909099",
      faculty: "daneshkade1",
      major: "majors1",
      peroffesor: "entezari",
      entry_year: "1398",
    },
    {
      first_name: "erfan",
      last_name: "mashayekhi",
      image: profile,
      id: "98412499",
      national_code: "0023909099",
      faculty: "daneshkade1",
      major: "majors1",
      peroffesor: "entezari",
      entry_year: "1398",
    },
  ];
  const [professorList, setProfessorList] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //function
  const handleRemoveItem = (index) => {
    const updatedList = [...professorList];
    updatedList.splice(index, 1);
    setProfessorList(updatedList);
  };
  useEffect(() => {
    //get studentList2 from back and remove mock data
    setProfessorList(mock_list);
  }, []);
  const handleAddStudent = () => {
    dispatch(action.setI2toI5Add(true));
    navigate("/I5");
  };

  const handleChangeInfo = (index) => {
    const item = professorList[index];
    dispatch(
      action.setI2toI5Add(
        false,
        item.first_name,
        item.last_name,
        item.id,
        item.national_code,
        item.faculty,
        item.major,
        item.peroffesor,
        item.entry_year
      )
    );
    navigate("/I5");
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
          {" "}
          <Button onClick={handleAddStudent}>افزودن دانشجو +</Button>
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
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "40px",
              justifyContent: "center",
              marginTop: "7%",
            }}
          >
            {professorList.map((item, index) => (
              <StudentItem
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
    </DashboardLayout>
  );
}
