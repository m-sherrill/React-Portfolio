import React, { useEffect } from 'react'
import './ProjectStyles.css';
import { Container, Button, Row, Col } from 'react-materialize'
import ProjectsHeader from '../../components/ProjectsHeader'
import Footer from '../../components/Footer';
import ReturnToTop from '../../components/ReturnToTop';

const CodeQuiz = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
    <ProjectsHeader />
    
    <Container className="center-align">
            <h1>Weather App</h1>
            <h4>Project Report</h4><br /><br />
            <Row id="btnContainer">
                <a href="https://m-sherrill.github.io/code-quiz/" target="_blank" rel="noreferrer"><Button className="teal darken-2">Live
                    Deployment</Button></a><br /><br />
                <a href="https://github.com/m-sherrill/code-quiz" target="_blank" rel="noreferrer"><Button className="teal darken-2">GitHub
                        Repo</Button></a><br /><br />
            </Row>
            <Row id="textContent">
               
                <Col s={12} m={6} id="languages">
                    <h5>Languages Used</h5>
                    HTML<br />
                    CSS<br />
                    JS<br />
                    <p>
                        <strong>With Help From...</strong>
                    </p>
                    Jquery<br />
                </Col>
                <Col s={12} m={6} className="left-align" id="projectDesc">
                    <h5>Project Description</h5>
                    This is a fun little javascript code quiz. The quiz includes a start button and then moves through a series of questions for the user to answer. If the user answers correct it adds to the score. It has a countdown timer which offers a penalty if a question is aswered wrong. Additionally, the can enter their initials and save to high scores. Saved high scores should be visible in a list and clearing high scores sould be available.
                </Col>

                <Col s={12} className="left-align" id="thoughts">
                <br/><h5>Project Thoughts</h5>
                    This was my first really javascript intensive project. With that, it even still feels like one of the most difficult projects I did during my bootcamp experiance. When I started, I felt very unsure about my javascript capabilities and honestly had very little idea how to even pull this together. But I dug my heals in and studied and researched until it started to become clear. <br/><br/>
                    Looking back, it seems crazy how challenging this assignment was for me at the time, but it was a very important turning point in my coding journey. This is when javascript started to click! I often think about going back and trying this again with the more in depth experiance I have now. I just may do that some day soon! <br/>
                </Col>
                <Col s={12} id="screenshots">
                    <h5>Screenshots of Live Deloyment</h5>
                    <img className="responsive-img" src="assets/images/codequizscreenshot.jpg" alt="screenshot of code quiz" /><br /><br />
                    
                </Col>
                
            </Row>
            <ReturnToTop />
        </Container>


    <Footer />
    </>
  )
}

export default CodeQuiz