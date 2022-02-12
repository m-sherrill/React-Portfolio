import React from 'react'
import '../App.css';
import { Link } from "react-router-dom"
import { Container, Button, Row, Col } from 'react-materialize'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Contact = () => {
  return (
  
      <><Header /><Container id="contactMe">
      <div id="contactMeDesc">
        Connect with me!
      </div>
      <div id="contactMeContent">
        <Link to="mailto:mo.sherrill@outlook.com" target="_blank"><img src="assets/images/emailicon.png"
          class="tooltipped" data-position="top" data-tooltip="Email" alt="email icon" /></Link>
        <Link to="http://github.com/m-sherrill" target="_blank"><img src="assets/images/githubicon.png"
          class="tooltipped" data-position="top" data-tooltip="GitHub" alt="github icon" /></Link>
        <Link to="https://www.linkedin.com/in/morgan-sherrill-9a838b28/" target="_blank"><img
          src="assets/images/linkedinicon.png" class="tooltipped" data-position="top" data-tooltip="LinkedIn" alt="linkedin icon" /></Link>
        <Link to="msherrillresume.pdf" download="morgansherrillresume"><img src="assets/images/resume.png"
          class="tooltipped" data-position="top" data-tooltip="Resume" alt="resume icon" /></Link><br /><br />
        <Link class="btn-floating btn-large introLink" to="/"><i class="material-icons" alt="home button">home</i></Link>
      </div>
    </Container>
    <Footer />
    </>
  
  )
}

export default Contact