import React from 'react'
import '../App.css';
import { useNavigate } from "react-router-dom"
import ReactTooltip from "react-tooltip"
import { Container, Col } from 'react-materialize'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ReturnToTop from '../components/ReturnToTop';
import ContactNav from '../components/ContactNav';

const Contact = () => {

  let navigate = useNavigate();

  const returnHome = () => {
    navigate("/");
  };

  return (

    <>
      <Header />
      <ContactNav />
      <Container>
        <div id="contactMeDesc">
          Connect with me!
        </div>

        <div id="contactMeContent">
          <ReactTooltip place="top" type="success" effect="solid" />
          <a href="mailto:mo.sherrill@outlook.com" target="_blank" rel="noreferrer" ><img src="assets/images/emailicon.png" alt="email icon" data-tip="Email" data-text-color="black" /></a>

          <a href="http://github.com/m-sherrill" target="_blank" rel="noreferrer" ><img src="assets/images/githubicon.png"
            data-tip="GitHub" alt="github icon" data-text-color="black"/></a>
          <a href="https://www.linkedin.com/in/morgan-sherrill-9a838b28/" target="_blank" rel="noreferrer" ><img
            src="assets/images/linkedinicon.png" data-tip="LinkedIn" alt="linkedin icon" data-text-color="black"/></a>
          <a href="msherrillresume.pdf" download rel="noreferrer" ><img src="assets/images/resume.png"
            data-tip="Resume" alt="resume icon" data-text-color="black" /></a><br /><br />
        </div>
        
        <Col s={12} className="center-align">
          <ReturnToTop />
        </Col>
              
      </Container>
      <Footer />
    </>

  )
}

export default Contact