import { React, useEffect, useState } from "react";
import DashboardLayout from "../../../components/DashboardLayout";
import M2_CourseItem from "../../../components/Manager/M2_CourseItem";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import Mainlayout from "../../../components/MainLayout";

export default function M2_TermList() {
  //mock data
  const termList2 = [
    // { name: "1" },
    // { name: "7" },
    // { name: "6" },
    // { name: "5" },
    // { name: "4" },
    // { name: "3" },
    // { name: "2" },
    { name: 'ترم پاییز ۱۴۰۱' },
    { name: 'ترم پاییز ۱۴۰۱' },
    { name: 'ترم پاییز ۱۴۰۱' },
    { name: 'ترم پاییز ۱۴۰۱' },
    { name: 'ترم پاییز ۱۴۰۱' },
    { name: 'ترم پاییز ۱۴۰۱' },
    { name: 'ترم پاییز ۱۴۰۱' },
    { name: 'ترم پاییز ۱۴۰۱' },
    { name: 'ترم پاییز ۱۴۰۱' },
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

  // return (
  //   <DashboardLayout>
  //     <Grid container>
  //       <Grid
  //         container
  //         item
  //         justifyContent="space-between"
  //         alignContent="center"
  //       >
  //         <Grid item>
  //           <Button variant="text" onClick={handleAddCourse}>
  //             افزودن ترم +
  //           </Button>
  //         </Grid>
  //         <Grid item>
  //           <Typography>مشاهده لیست ترم ها</Typography>
  //         </Grid>
  //       </Grid>
  //       <hr
  //         style={{
  //           width: "100%",
  //           borderWidth: 0,
  //           borderTop: "1px solid black",
  //         }}
  //       />
  //       <Grid container item>
  //         <Grid container justifyContent='center'>
  //           {termList.map((item, index) => (
  //             <M2_CourseItem
  //               name={item.name}
  //               key={index}
  //               removeItem={handleRemoveItem}
  //             />
  //           ))}
  //         </Grid>
  //       </Grid>
  //     </Grid>
  //   </DashboardLayout>
  // );
  return(
    <Mainlayout btn={true} text={"مشاهده لیست ترم ها"} btnText={"افزودن ترم +"} >

    </Mainlayout>
  )
}
