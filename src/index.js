import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import 'materialize-css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Lifetracker from './pages/subpages/Lifetracker'
import Weatherapp from './pages/subpages/Weatherapp'
import Scheduler from './pages/subpages/Scheduler'
import Tunespace from './pages/subpages/Tunespace'
import TechBlog from './pages/subpages/TechBlog'
// import Page404 from '/pages/Page404.js'

ReactDOM.render(
  <React.StrictMode>
{/* Routes for all the pages within the application */}
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/weatherapp" element={<Weatherapp />} />
        <Route path="/scheduler" element={<Scheduler />} />
        <Route path="/tunespace" element={<Tunespace />} />
        <Route path="/lifetracker" element={<Lifetracker />} />
        <Route path="/techblog" element={<TechBlog />} />
        {/* <Route path="/*" element={<Page404 />} /> */}
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
