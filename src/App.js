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
import I2_StudentList from './pages/IT/I2_StudentList';
import I3_ProfessorList from './pages/IT/I3_ProfessorList';
import I4_ManagerList from './pages/IT/I4_ManagerList';
import I5_NewStudent from './pages/IT/I5_NewStudent'
import I8_NewManager from './pages/IT/I8_NewManager'
import I9_NewProfessor from './pages/IT/I9_NewProfessor';
import I10_NewFaculty from './pages/IT/I10_NewFaculty';

//Student
import S3_TermInfo from './pages/Student/S3_TermInfo';
import S1_Home from './pages/Student/S1_Home';


//test
import M2_CourseItem from './components/Manager/M2_CourseItem';
import Test from './pages/test';
import S4_PreRegCourseList from './pages/Student/S4_PreRegCoursesList';
import S5_PreRegistration from './pages/Student/S5_PreRegistrations';
import S6_RegCourseList from './pages/Student/S6_RegCoursesList';
import S7_Registrations from './pages/Student/S7_Registrations';
import S2_TermList from './pages/Student/S2_TermList';
import ErrorPage from './pages/404';
// import CreateMainCourse from './pages/IT/I7_CreateMainCourse';
// import MainCoursesList from './pages/IT/I6_MainCourseList';





function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path='/test' element={<Test />}></Route>
            <Route path='/M2' element={<M2_TermList />}></Route>
            <Route path='/M3' element={<M3_UpdateTerm />}></Route>
            <Route path='/M4' element={<M4_CoursesList />}></Route>
            <Route path='/M5' element={<M5_PreRegistration />}></Route>
            <Route path='/M6' element={<M6_AddCourse />}></Route>
            <Route path='/M7' element={<M7_PreRegStudentList />}></Route>
            <Route path='/M8' element={<M8_Registration />}></Route>
            <Route path="/M9" element={<M9_RegistrationList />}></Route>
            <Route path="/M10" element={<M10_StudentList />}></Route>
            <Route path="/M11" element={<M11_ProfessorList />}></Route>

            {/* <Route path="/I6" element={MainCoursesList}></Route>
            <Route path="/I7" element={CreateMainCourse}></Route> */}

            <Route path="/S1" element={<S1_Home />}></Route>
            <Route path="/S2" element={<S2_TermList />}></Route>
            <Route path="/S3" element={<S3_TermInfo />}></Route>
            <Route path="/S4" element={<S4_PreRegCourseList />}></Route>
            <Route path="/S5" element={<S5_PreRegistration />}></Route>
            <Route path="/S6" element={<S6_RegCourseList />}></Route>
            <Route path="/S7" element={<S7_Registrations />}></Route>

            <Route path="/P3" element={<S2_TermList />}></Route>
            <Route path="/P4" element={<S3_TermInfo />}></Route>
            <Route path="/P4" element={<S4_PreRegCourseList />}></Route>
            <Route path="*" component={ErrorPage} />


            <Route path="/I2" element={<I2_StudentList />}></Route>
            <Route path="/I3" element={<I3_ProfessorList/>}></Route>
            <Route path="/I4" element={<I4_ManagerList/>}></Route>
            <Route path="/I5" element={<I5_NewStudent />}></Route>
            <Route path="/I8" element={<I8_NewManager/>}></Route>
            <Route path="/I9" element={<I9_NewProfessor/>}></Route>
            <Route path="/I10" element={<I10_NewFaculty/>}></Route>


          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;


