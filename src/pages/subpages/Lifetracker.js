import React, { useEffect } from 'react'
import './ProjectStyles.css';
import { Container, Button, Row, Col } from 'react-materialize'
import ProjectsHeader from '../../components/ProjectsHeader'
import Footer from '../../components/Footer';
import ReturnToTop from '../../components/ReturnToTop';

const Lifetracker = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <><ProjectsHeader />

      <Container className="center-align">
        <h1>LifeTracker</h1>
        <h4>Project Report</h4><br /><br />
        <Row id="btnContainer">
          <a href="https://lifetracker-project2.herokuapp.com/" target="_blank" rel="noreferrer"><Button className="teal darken-2">Live
            Deployment</Button></a><br /><br />
          <a href="https://github.com/m-sherrill/Project-2" target="_blank" rel="noreferrer"><Button className="teal darken-2">GitHub
            Repo</Button></a><br /><br />
        </Row>
        <Row id="textContent">
          <Row>
          <Col s={12} m={4} id="languages">
            <h5>Languages Used</h5>
            HTML<br />
            CSS<br />
            JS<br />
            </Col>
          <Col s={12} m={4} id="languages">
            <h5>With Help From...</h5>
          Node.js<br />
          Express<br />
          FullCalendar.io<br />
          TailwindCSS<br />
          Sequelize<br />
            </Col>
        

            <Col s={12} m={4} id="languages">
          <h5>Project Developers</h5>
          <a href="https://github.com/m-sherrill" target="_blank" rel="noreferrer">Morgan Sherrill</a><br />
          <a href="https://github.com/Maykanwara" target="_blank" rel="noreferrer">Kanwara Moore</a><br />
          <a href="https://github.com/JonkHunkle" target="_blank" rel="noreferrer">David Czerwinski</a><br />
          <a href="https://github.com/FatimaFBZ" target="_blank" rel="noreferrer">Fatima Baluch</a><br />
          <a href="https://github.com/Matthewwalker333" target="_blank" rel="noreferrer">Matthew Walker</a><br />
        </Col>
        </Row>
        <Col s={12} className="left-align" id="projectDesc">
          <h5>Project Description</h5>
          This is application was built for the everyday person in mind, meant to provide structure and aid a busy schedule. The application comes fully equipped with Notes, ToDo, Calendar, and Contacts features. This project utilizes a database to store user information and full authentication.
        </Col>

        <Col s={12} className="left-align" id="thoughts">
        <br/><h5>Project Thoughts</h5>
          This was my second group project for bootcamp! It was again really fun to pull together. Our team collaborated well and worked together to pull off our idea.<br /><br />
          My person success was deploying the calendar module for this application. I spent hours reading the FullCalendar.io documentation and was successful in getting events to pull and delete from the database. When I originally had my event information populate onto the calendar, it was a true blissful moment!
        </Col>
        <Col s={12} id="screenshots">
          <h5>Screenshots of Live Deloyment</h5>
          <img className="responsive-img" src="assets/images/lifetrackerscreenshot.png" alt="screenshot of lifetracker app"/><br /><br />

          </Col>
          </Row>
      <ReturnToTop />
      </Container>
    <Footer /></>
  
  )
}

export default Lifetracker