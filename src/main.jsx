import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Course from './components/Cursos/course1/Course';
import App from './App.jsx'
import Tema1 from './components/Cursos/course1/tema1/Tema1.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' Component={App}></Route>
        <Route path='/curso1' Component={Course}></Route>
        <Route path='/curso1-tema1' Component={Tema1}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
)
