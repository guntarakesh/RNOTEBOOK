
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';

import NoteState from './context/notes/NoteState';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import About from './components/About'
import Login from "./components/login";
import Signup from "./components/signup";
import ErrorPage from "./components/ErrorPage";
function App() {
  return (
   <>
   <NoteState>
   <Router>
    <Routes>
      <Route path="/" element={<Navbar/>}>
      <Route index element={<Home/>}></Route>
      <Route path="about" element={<About/>}></Route>
      <Route path="login" element={<Login/>} ></Route>
      <Route path="signup" element={<Signup/>} ></Route>
      <Route path="*" element={<ErrorPage/>} ></Route>
      </Route>
    </Routes>
   </Router>
   </NoteState>
   </>
  );
}

export default App;
