import React from 'react'
import '../App.css';
import { Link } from "react-router-dom"
import ReactTooltip from "react-tooltip"
import { Container } from 'react-materialize'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Contact = () => {



  return (

    <>
      <Header />
      <Container>
        <div id="contactMeDesc">
          Connect with me!
        </div>

        <div id="contactMeContent">
          <ReactTooltip place="top" type="success" effect="solid" />
          <a href="mailto:mo.sherrill@outlook.com" target="_blank" rel="noreferrer" ><img src="assets/images/emailicon.png" alt="email icon" data-tip="Email" data-text-color="black" /></a>

          <a href="http://github.com/m-sherrill" target="_blank" rel="noreferrer" ><img src="assets/images/githubicon.png"
            data-tip="GitHub" alt="github icon" /></a>
          <a href="https://www.linkedin.com/in/morgan-sherrill-9a838b28/" target="_blank" rel="noreferrer" ><img
            src="assets/images/linkedinicon.png" data-tip="LinkedIn" alt="linkedin icon" /></a>
          <a href="msherrillresume.pdf" download rel="noreferrer" ><img src="assets/images/resume.png"
            data-tip="Resume" alt="resume icon" /></a><br /><br />
          <Link className="btn-floating btn-large introLink" to="/"><i className="material-icons" alt="home button">home</i></Link>
        </div>
      </Container>
      <Footer />
    </>

  )
}

export default Contact