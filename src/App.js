import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Theme from "./Theme/ThemeGenerator";
import { ThemeProvider } from '@mui/material/styles';

import M2_TermList from './pages/Manager/M2_TermList';
import M3_UpdateTerm from './pages/Manager/M3_UpdateTerm';
import M4_CoursesList from './pages/Manager/M4_CoursesList';
import M5_PreRegistration from './pages/Manager/M5_PreRegistration/indes';
import M6_AddCourse from './pages/Manager/M6_AddCourse';
import M7_PreRegStudentList from './pages/Manager/M7_PreRegStudentList';
import M8_Registration from './pages/Manager/M8_Registration';
import M9_RegistrationList from './pages/Manager/M9_RegistrationList';
import M10_StudentList from './pages/Manager/StudentsList';
import M11_ProfessorList from './pages/Manager/M11_ProfessorList';

//IT
import I5_NewStudent from './pages/IT/I5_NewStudent'


//test
import M2_CourseItem from './components/Manager/M2_CourseItem';
import Test from './pages/test';



function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path='/test' element={<Test/>}></Route>
            <Route path='/M2' element={<M2_TermList/>}></Route>
            <Route path='/M3' element={<M3_UpdateTerm/>}></Route>
            <Route path='/M4' element={<M4_CoursesList/>}></Route>
            <Route path='/M5' element={<M5_PreRegistration/>}></Route>
            <Route path='/M6' element={<M6_AddCourse/>}></Route>
            <Route path='/M7' element={<M7_PreRegStudentList/>}></Route>
            <Route path='/M8' element={<M8_Registration/>}></Route>
            <Route path="/M9" element={<M9_RegistrationList />}></Route>
            <Route path="/M10" element={<M10_StudentList />}></Route>
            <Route path="/M11" element={<M11_ProfessorList />}></Route>

            <Route path="/I5" element={<I5_NewStudent />}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
