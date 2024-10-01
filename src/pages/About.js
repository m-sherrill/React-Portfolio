import React from 'react'
import '../App.css';
import { Container, Row, Col } from 'react-materialize'
import AboutNav from '../components/AboutNav'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ReturnToTop from '../components/ReturnToTop';

const About = () => {

  return (
    <>
      <Header />
      <AboutNav />
      <Container id="aboutme">
        <Row id="aboutMeDesc">
          <Col s={12} id="aboutMeTitle">
            Who is the woman behind the computer?
          </Col>
          <Col s={12} className="center-align" id="aboutMePhoto">
            <br /><img src="assets/images/msherrill2.png" alt="Morgan Sherrill" />
          </Col>
        </Row>
        <Container className="left-align" id="aboutMeText">I have worked as an Operations Manager for a small business for 16 years
          in the printer cartridge industry. I enjoy business and web development equally. The real passion lies in building something. Whether that is a new process for important business activies or an entirely new application. I enjoy building things and improving the world around me. 
          <br />
          <br />On a personal level, I enjoy spending time with my husband, our son, and our mini dachshund. I have participated in several endurance trail runs and love being in the mountains.
          <br />
          <br />
        </Container>

        <Col s={12} className="center-align">
          <ReturnToTop />
        </Col>


      </Container>
      <Footer />
    </>

  )
}

export default About
