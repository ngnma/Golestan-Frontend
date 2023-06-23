import { React, useEffect, useState } from 'react';
import StudentItem from '../../../components/Manager/StudentItem';
import profile from '../../../assets/profile18.png';
import DashboardLayout from '../../../components/DashboardLayout';
import M2_CourseItem from '../../../components/Manager/M2_CourseItem';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom'

export default function M2_TermList() {
  //mock data
  const termList2 = [
    { name: "1" },
    { name: "7" },
    { name: "6" },
    { name: "5" },
    { name: "4" },
    { name: "3" },
    { name: "2" },
    // { name: 'ترم پاییز ۱۴۰۱' },
    // { name: 'ترم پاییز ۱۴۰۱' },
    // { name: 'ترم پاییز ۱۴۰۱' },
    // { name: 'ترم پاییز ۱۴۰۱' },
    // { name: 'ترم پاییز ۱۴۰۱' },
    // { name: 'ترم پاییز ۱۴۰۱' },
    // { name: 'ترم پاییز ۱۴۰۱' },
    // { name: 'ترم پاییز ۱۴۰۱' },
    // { name: 'ترم پاییز ۱۴۰۱' },
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
    navigate('/M6')
  }

  return (
    <DashboardLayout>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '8%', // Adjust the padding top value as needed
      }}>
        <div className='M2-term-list-footer' style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="text" onClick={handleAddCourse}>افزودن ترم +</Button>
          <p>مشاهده لیست ترم ها</p>
        </div>

        <hr style={{ width: '100%', borderWidth: 0, borderTop: '1px solid black' }} />
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'center', marginTop: '7%' }}>
          {termList.map((item, index) => (
            <M2_CourseItem name={item.name} key={index} removeItem={handleRemoveItem}  />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
