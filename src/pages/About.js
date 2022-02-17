import React from 'react'
import '../App.css';
import { useNavigate } from "react-router-dom"

import { Container, Button, Row, Col } from 'react-materialize'
import PagesNav from '../components/PagesNav'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FixedMenu from '../components/FixedMenu'

const About = () => {

    let navigate = useNavigate();

    const returnHome = () => {
      navigate("/");
    };

  return (
    <>
    <Header />
    <PagesNav />
    <Container id="aboutme">
    <Row id="aboutMeDesc">
        <Col s={12} id="aboutMeTitle">
          Who is the woman behind the computer?
        </Col>
        <Col s={12} className="center-align" id="aboutMePhoto">
          <br /><img src="assets/images/msherrill2.png" alt="Morgan Sherrill" />
          </Col>
          <Col s={12} className="left-align" id="aboutMeText">I have worked as an Operations Manager for a small business for 13 years
          in the printer cartridge industry. As much as I enjoy business operations, it is not my true passion. I am currently making a switch into the world of web development, which I have found I love and crave. It is pretty exciting taking an idea and making it a reality. <br /><br />I am enrolled in the University of Washington coding bootcamp and really look forward to a career in an industry I wake up every day <strong>WANTING</strong> to be apart of. 
          <br />
          <br />On a personal level, I enjoy spending time with my husband, our son, and our mini dachshund. I have participated in several endurance trail runs and love being in the mountains. 
          <br />
          <br />
        </Col>
        
        <Col s={12} className="center-align">
          <Button className="waves-effect waves-green btn-floating btn-large introLink" onClick={returnHome}><i
              class="material-icons">home</i></Button>
        </Col>
      </Row>    
      
    </Container>
    <FixedMenu/>
    <Footer/>
    </>
  
  )
}

export default About