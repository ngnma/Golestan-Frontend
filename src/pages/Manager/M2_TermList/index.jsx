import { React, useEffect, useState } from "react";
import M2_CourseItem from "../../../components/Manager/M2_CourseItem";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import Mainlayout from "../../../components/MainLayout";
import axios from 'axios';


export default function M2_TermList() {
  // const dispatch = useDispatch();

  // const increment = () => {
  //   dispatch(setTermName(this.props.name));
  // };

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
    axios.get(`http://localhost:8080/api/terms`, 
    {
      headers: {Authorization : `Bearer ${sessionStorage.getItem("token")}`
    }}).then((response) => {
          if(response.status===401){

          }  
            console.log(response.data)
            setTermList(response.data);
        }).catch(err =>{
          alert(err)
          navigate("/login");
        })

}, []);

const setData = (data) => {
    let { id, current, } = data;
    localStorage.setItem('Name', id);
    localStorage.setItem('Current', current);
}

const getData = () => {
  axios.get(`http://localhost:8080/api/terms`, 
  {
    headers: {Authorization : `Bearer ${sessionStorage.getItem("token")}`
  }}).then((getData) => {
            setTermList(getData.data);
        })
}

const onDelete = (id) => {
  console.log("we are here")
  console.log(id)
    axios.delete(`http://localhost:8080/api/term/${id}`,
    {headers: {Authorization : `Bearer ${sessionStorage.getItem("token")}`}
    }).then(() => {
        getData();
    })
}
  const handleAddCourse = () => {
    navigate("/M6");
  };
 
  return (
    <Mainlayout btn={true} text={"مشاهده لیست ترم ها"} btnText={"افزودن ترم +"} functionality={handleAddCourse}>
      <Grid container justifyContent='center'>
        {termList.map((item, index) => (
          <M2_CourseItem name={item.term_id} key={index} removeItem={handleRemoveItem}/>
        ))}
      </Grid>
    </Mainlayout>
  )
}
