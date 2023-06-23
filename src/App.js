import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Theme from "./Theme/ThemeGenerator";
import Sidebar from "./components/Sidebar"

import StudentItem from './components/Manager/StudentItem';
import StudentList from './pages/Manager/StudentsList';
import { ThemeProvider } from '@mui/material/styles';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/test" element={<StudentItem />}></Route>
            <Route path="/test2" element={<StudentList />}></Route>
            <Route path="/test3" element={<Sidebar />}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
