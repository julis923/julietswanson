import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import ProjectPage from './pages/projectPage';
import reportWebVitals from './reportWebVitals';

//basename={process.env.PUBLIC_URL}
ReactDOM.render(
  <Router>
    <Routes>
      <Route
        path="/project/*"
        element={<ProjectPage />}
      ></Route>
      <Route
        path="/project"
        element={<App page={'homepage'} />}
      ></Route>
      <Route path="*" element={<App page={'homepage'} />}></Route>
    </Routes>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
