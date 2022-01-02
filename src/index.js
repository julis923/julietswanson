import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Projects from './pages/projects';
import reportWebVitals from './reportWebVitals';


//basename={process.env.PUBLIC_URL}
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App page={'homepage'} />}></Route>
      <Route path="/projects" element={<Projects page={'projects'} />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
