import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

ReactDOM.render(
  <React.StrictMode>
    <Router>
    
    <Routes>
      <Route path="/" element={<App />} />
        <Route path="/login" element={<About />} />
        <Route path="/about" element={<Projects />} />
        <Route path="/signup" element={<Contact />} />
      {/* <Route path="/forgot-password" element={<ForgotPassword/>} />
      <Route path="/calendar" element={<Calendar/>} /> */}
    </Routes>

</Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
