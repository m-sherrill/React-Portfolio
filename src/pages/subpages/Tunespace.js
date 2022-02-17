import React, { useEffect } from 'react'
import '../../ProjectStyles.css';
import { useNavigate, Link } from "react-router-dom"
import { Container, Button, Row, Col } from 'react-materialize'
import ProjectsHeader from '../../components/ProjectsHeader'
import Footer from '../../components/Footer';
import ReturnToTop from '../../components/ReturnToTop';

const Tunespace = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <ProjectsHeader />
      <Container className="center-align">
        <h1>TuneSpace</h1>
        <h4>Project Report</h4><br /><br />
        <Row id="btnContainer">
          <a href="https://mjamesd.github.io/crispy-happiness/" target="_blank" rel="noreferrer"><Button className="teal darken-2">Live
            Deployment</Button></a><br /><br />
          <a href="https://github.com/mjamesd/crispy-happiness" target="_blank" rel="noreferrer"><Button className="teal darken-2">GitHub
            Repo</Button></a><br /><br />
        </Row>
        <Row id="textContent">

          <div className="col s12 m4" id="languages">
            <h5>Languages Used</h5>
            HTML<br />
            CSS<br />
            JS<br />
            <p>
              <strong>With Help From...</strong>
            </p>
            Jquery<br />
            Ajax<br />
            Materialize CSS<br />
            Readmore.js <br />
          </div>
          <div className="col s12 m4" id="languages">
            <h5>APIs Used</h5>
            Giphy API<br />
            Happi.dev API <br />
            Wiki API <br />
            The AudioDB API <br />
          </div>
          <div className="col s12 m4" id="languages">
            <h5>Project Developers</h5>
            <a href="https://github.com/m-sherrill" target="_blank" rel="noreferrer">Morgan Sherrill</a><br />
            <a href="https://github.com/mjamesd" target="_blank" rel="noreferrer">Mark Drummond</a><br />
            <a href="https://github.com/DanPGolden" target="_blank" rel="noreferrer">Dan Golden</a><br />
            <a href="https://github.com/JefreyColegrove" target="_blank" rel="noreferrer">Jefrey Colegrove</a><br />
            <a href="https://github.com/Maykanwara" target="_blank" rel="noreferrer">Kanwara Moore</a><br />
          </div>
          <div className="col s12 left-align" id="projectDesc">
            <h5>Project Description</h5>
            TuneSpace is a guide that provides biographies, discographies, and lyrics of musicians in all genres pulling data from various databases into one convenient location. By bringing multiple data streams into one centralized hub our goal is to create a communal website where users can explore their favorite artists and discover new music. The site features dynamically updated HTML and CSS with local storage used for search results and other relevant parameters.
          </div>

          <div className="col s12 left-align" id="thoughts">
            <h5>Project Thoughts</h5>
            This was my first real collaborative coding project. I found the group dynamic of designing together <strong>AMAZING</strong>. Having a group of people to bounce ideas off of and aid in times where you may be stuck was so valuable. It is also interesting to have a group with a variety of different strengths and weeknesses. There was room for each person to shine in their strong skills while being encouraged in improving areas that needed work. <br /><br />
            There were several obsticles we faced while designing this project, but we never gave up on any of them. We pushed through and made our vision a reality. <br /><br />
            While this was a group project with a deadline in place -- we do plan to continue development and make it even better than it is now. Stay tuned for updates in the future.
          </div>
          <div className="col s12" id="screenshots">
            <h5>Screenshots of Live Deloyment</h5>
            <img className="responsive-img" src="assets/images/tunespaceArtistScreenshot.PNG" /><br /><br />

            <img className="responsive-img" src="assets/images/tunespaceTracksScreenshot.PNG" /><br />
          </div>

        </Row>
        <ReturnToTop />
      </Container>
      <Footer />
    </>
  )
}

export default Tunespace