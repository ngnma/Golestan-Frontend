import {React,useEffect,useState} from 'react';
import StudentItem from '../../../components/Manager/StudentItem';
import profile from '../../../assets/profile18.png';
import DashboardLayout from '../../../components/DashboardLayout';
import Divider from '@mui/material/Divider';

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
  const [studentList ,setStudentList] = useState([]);
  useEffect(() => {
    //get studentList2 from back and remove mock data
    setStudentList(studentList2);
  }, []);
  return (
    <DashboardLayout>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '8%', // Adjust the padding top value as needed
      }}>
        <p>This is a paragraph below the Drawer.</p>
        <hr style={{ width: '100%', borderWidth: 0, borderTop: '1px solid black' }} />
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'center', marginTop: '7%' }}>
          {studentList.map((item, index) => (
            <StudentItem name={item.name} image={item.image} key={index} />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
  
  
  
  
  
  
}
