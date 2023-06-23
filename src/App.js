import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Theme from "./Theme/ThemeGenerator";

import M10_StudentList from './pages/Manager/StudentsList';
import M11_ProfessorList from './pages/Manager/M11_ProfessorList';
import M9_RegistrationList from './pages/Manager/M9_RegistrationList';
import { ThemeProvider } from '@mui/material/styles';

//test
import M2_CourseItem from './components/Manager/M2_CourseItem';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/M10" element={<M10_StudentList />}></Route>
            <Route path="/M11" element={<M11_ProfessorList />}></Route>
            <Route path="/M9" element={<M9_RegistrationList />}></Route>
            <Route path='/test' element={<M2_CourseItem/>}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
