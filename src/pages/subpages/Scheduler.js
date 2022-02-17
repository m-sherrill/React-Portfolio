import React, { useEffect } from 'react'
import '../../ProjectStyles.css';
import { useNavigate, Link } from "react-router-dom"
import { Container, Button, Row, Col } from 'react-materialize'
import ProjectsHeader from '../../components/ProjectsHeader'
import Footer from '../../components/Footer';
import ReturnToTop from '../../components/ReturnToTop';

const Scheduler = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
    <ProjectsHeader />
    
    <Container className="center-align">
            <h1>Daily Planner</h1>
            <h4>Project Report</h4><br /><br />
            <Row id="btnContainer">
                <a href="https://m-sherrill.github.io/work-day-planner/" target="_blank" rel="noreferrer"><Button className="teal darken-2">Live
                    Deployment</Button></a><br /><br />
                <a href="https://github.com/m-sherrill/work-day-planner" target="_blank" rel="noreferrer"><Button className="teal darken-2">GitHub
                        Repo</Button></a><br /><br />
            </Row>
            <Row id="textContent">
                
                <div className="col s12 m6" id="languages">
                    <h5>Languages Used</h5>
                    HTML<br />
                    CSS<br />
                    JS<br />
                    <p>
                        <strong>With Help From...</strong>
                    </p>
                    Jquery<br />
                    Bootstrap<br />
                </div>
                <div className="col s12 m6 left-align" id="projectDesc">
                    <h5>Project Description</h5>
                    Create a simple work day calendar which shows normal business hours. The user should be able to add
                    content to each hour block and save it to local storage to keep track of their day. When they open
                    the page, the current day's date should display at the top of the page. Additionally, the time
                    blocks should be color coded to represent past, present, and future. For this application, the color
                    coding is on the column with the time of day display.
                </div>

                <div className="col s12 left-align" id="thoughts">
                    <h5>Project Thoughts</h5>
                    This project was really fun. We were provided starter code, which I nearly removed all of it and
                    started over. I really enjoy the CSS styling of any project I work on and the original code would
                    create a project that physically looked like every other student's in the class. I wanted mine to be
                    unique and more geared towards my individual style.
                    <br />
                    <br />
                    The hardest part of this assignment for me was using local storage. When I was first starting in
                    JavaScript and was required to begin using Local Storage, it look me a moment to really understand
                    it. Through the course of this project, I really spent the time learning it and being able to use it
                    successfully.
                    <br />
                    <br />
                    Although not a part of the specific assignment description, I also challenged myself to use
                    Javascript to populate a lot of my page verses relying on HTML. I got it to work exactly as I
                    anticipated and this was really an exciting moment for me in my Javascript journey.
                </div>
                <div className="col s12" id="screenshots">
                    <h5>Screenshots of Live Deloyment</h5>
                    <img className="responsive-img" src="assets/images/plannerScreenshot.PNG" />
                </div>
                
            </Row>
            <ReturnToTop />
        </Container>

    <Footer />
    </>
  )
}

export default Scheduler