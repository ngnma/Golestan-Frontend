import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Theme from "./Theme/ThemeGenerator";

import M10_StudentList from './pages/Manager/StudentsList';
import M11_ProfessorList from './pages/Manager/M11_ProfessorList';
import M6_AddCourse from './pages/Manager/M6_AddCourse';
import M9_RegistrationList from './pages/Manager/M9_RegistrationList';
import { ThemeProvider } from '@mui/material/styles';
import M2_TermList from './pages/Manager/M2_TermList';


//test
import M2_CourseItem from './components/Manager/M2_CourseItem';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            {/* <Route path='/test' element={</>}></Route> */}
            <Route path='/M2' element={<M2_TermList/>}></Route>
            <Route path='/M6' element={<M6_AddCourse/>}></Route>
            <Route path="/M9" element={<M9_RegistrationList />}></Route>
            <Route path="/M10" element={<M10_StudentList />}></Route>
            <Route path="/M11" element={<M11_ProfessorList />}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
