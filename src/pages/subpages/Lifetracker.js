import React from 'react'
import '../../ProjectStyles.css';
import { useNavigate, Link } from "react-router-dom"
import { Container, Button, Row, Col } from 'react-materialize'
import ProjectsHeader from '../../components/ProjectsHeader'
import ProjectsFooter from '../../components/ProjectsFooter'

const Lifetracker = () => {
  return (
    <><><ProjectsHeader />

      <Container>
        <h1>LifeTracker</h1>
        <h4>Project Report</h4><br /><br />
        <div class="row" id="btnContainer">
          <a href="https://lifetracker-project2.herokuapp.com/" target="_blank"><button class="btn">Live
            Deployment</button></a><br /><br />
          <a href="https://github.com/m-sherrill/Project-2" target="_blank"><button class="btn">GitHub
            Repo</button></a><br /><br />
        </div>
        <div class="row" id="textContent">

          <div class="col s12 m4" id="languages">
            <h5>Languages Used</h5>
            HTML<br />
            CSS<br />
            JS<br />
            <p>
            </></div>
          <div class="col s12 m4" id="languages">
            <h5>With Help From...</h5>
          </p>
          Node.js<br />
          Express<br />
          FullCalendar.io<br />
          TailwindCSS<br />
          Sequelize<br />
        </div>

        <div class="col s12 m4" id="languages">
          <h5>Project Developers</h5>
          <a href="https://github.com/m-sherrill" target="_blank">Morgan Sherrill</a><br />
          <a href="https://github.com/Maykanwara" target="_blank">Kanwara Moore</a><br />
          <a href="https://github.com/JonkHunkle" target="_blank">David Czerwinski</a><br />
          <a href="https://github.com/FatimaFBZ" target="_blank">Fatima Baluch</a><br />
          <a href="https://github.com/Matthewwalker333" target="_blank">Matthew Walker</a><br />
        </div>
        <div class="col s12 left-align" id="projectDesc">
          <h5>Project Description</h5>
          This is application was built for the everyday person in mind, meant to provide structure and aid a busy schedule. The application comes fully equipped with Notes, ToDo, Calendar, and Contacts features. This project utilizes a database to store user information and full authentication.
        </div>

        <div class="col s12 left-align" id="thoughts">
          <h5>Project Thoughts</h5>
          This was my second group project for bootcamp! It was again really fun to pull together. Our team collaborated well and worked together to pull off our idea.<br /><br />
          My person success was deploying the calendar module for this application. I spent hours reading the FullCalendar.io documentation and was successful in getting events to pull and delete from the database. When I originally had my event information populate onto the calendar, it was a true blissful moment!
        </div>
        <div class="col s12" id="screenshots">
          <h5>Screenshots of Live Deloyment</h5>
          <img class="responsive-img" src="assets/images/lifetrackerscreenshot.png"><br /><br />

          </></div>

      
      </Container>
    <ProjectsFooter /></>
  
  )
}

export default Lifetracker