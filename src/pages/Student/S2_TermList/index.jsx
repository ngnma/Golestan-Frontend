import { React, useEffect, useState } from "react";
import S2_TermCard from "../../../components/Student/S2_TermCard";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import Mainlayout from "../../../components/MainLayout";

export default function S2_TermList() {

  //mock data
  const termList2 = [

    { id:1,name: 'ترم پاییز ۱۴۰۱' },
    { id:2,name: 'ترم بهار ۱۴۰۱' },
    { id:3,name: 'ترم زمستان ۱۴۰۱' },
    { id:4,name: 'ترم تابستان ۱۴۰۱' },
    { id:5,name: 'ترم پاییز ۱۴۰۱' },
    { id:6,name: 'ترم پاییز ۱۴۰۱' },
    { id:7,name: 'ترم پاییز ۱۴۰۱' },
    { id:8,name: 'ترم پاییز ۱۴۰۱' },
    { id:9,name: 'ترم پاییز ۱۴۰۱' },
  ];
  const [termList, setTermList] = useState([]);
  const navigate = useNavigate();

  const handleRemoveItem = (index) => {
    const updatedList = [...termList];
    updatedList.splice(index, 1);
    setTermList(updatedList);
  };

  useEffect(() => {
    //get studentList2 from back and remove mock data
    setTermList(termList2);
  }, []);
  useEffect(() => {
    //call api delete_course
  }, [termList]);

  const handleAddCourse = () => {
    navigate("/M6");
  };
 
  return (
    <Mainlayout btn={true} text={"مشاهده لیست ترم ها"} btnText={"افزودن ترم +"} functionality={handleAddCourse}>
      <Grid container justifyContent='center'>
        {termList.map((item, index) => (
          <S2_TermCard
            name={item.name}
            key={index}
            removeItem={handleRemoveItem}
            termid={item.id}
          />
        ))}
      </Grid>
    </Mainlayout>
  )
}
