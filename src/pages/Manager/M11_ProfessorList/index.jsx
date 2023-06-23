import {React,useEffect,useState} from 'react';
import StudentItem from '../../../components/Manager/StudentItem';
import profile from '../../../assets/profile18.png';
import DashboardLayout from '../../../components/DashboardLayout';
import Divider from '@mui/material/Divider';

export default function M11_ProfessorList() {
  //mock data
  const mock_list = [
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
  const [professorList ,setProfessorList] = useState([]);
  useEffect(() => {
    //get studentList2 from back and remove mock data
    setProfessorList(mock_list);
  }, []);
  return (
    <DashboardLayout>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '8%', // Adjust the padding top value as needed
      }}>
        <p>مشاهده لیست اساتید</p>
        <hr style={{ width: '100%', borderWidth: 0, borderTop: '1px solid black' }} />
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'center', marginTop: '7%' }}>
          {professorList.map((item, index) => (
            <StudentItem name={item.name} image={item.image} key={index} />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
