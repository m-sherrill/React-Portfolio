import React from 'react'
import '../App.css';
import { Link } from "react-router-dom"
import { Container, Row } from 'react-materialize'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProjectsNav from '../components/ProjectsNav';
import ReturnToTop from '../components/ReturnToTop';

const Projects = () => {
  const styles = {
    cardLinks: {
      border: "1px solid",
      padding: "5px",
      marginLeft: "15px",
      marginRight: "15px",
      marginBottom: "10px",
      backgroundColor: "rgba(0, 0, 0, 0.329)",
    }
  }

  return (
    <>
      <Header />
      <ProjectsNav />
      <Container className="center-align">
        <Row id="workDesc">
          Latest Projects
        </Row>
        <Row className="center-align" id="workRow">
          <div>
            <div id="dailyPlanner">
              <img src="./assets/images/dailyplanner2.png" useMap="#dailyPlanner" alt="screenshot of a daily planner" />
              <map name="dailyPlanner">
                <area shape="rect" coords="15,15,228,232" alt="Computer"
                  href="https://m-sherrill.github.io/work-day-planner/" target="_blank" rel="noreferrer" />
              </map>
            </div>
            <div id="dailyTrackerContent" style={styles.cardLinks}><a href="https://m-sherrill.github.io/work-day-planner/" target="_blank" rel="noreferrer">Live Deployment</a><br /><a href="https://github.com/m-sherrill/work-day-planner" target="_blank" rel="noreferrer">GitHub
              Repo</a><br /><Link to="/scheduler">Project Report</Link></div>
          </div>

          <div>
            <div id="weatherApp">
              <img src="./assets/images/weatherapp2.png" useMap="#weatherApp" alt="screenshot of weather app" />
              <map name="weatherApp" id="weatherMap">
                <area shape="rect" coords="15,15,228,232" alt="Computer" href="https://m-sherrill.github.io/weather-app/"
                  target="_blank" rel="noreferrer" />
              </map>
            </div>
            <div id="weatherAppContent" style={styles.cardLinks}>
            <a href="https://m-sherrill.github.io/weather-app/" target="_blank" rel="noreferrer">Live Deployment</a><br /><a href="https://github.com/m-sherrill/weather-app" target="_blank" rel="noreferrer">GitHub
              Repo</a><br /><Link to="/weatherapp">Project Report</Link></div>
          </div>

          <div>
            <div id="tuneSpace">
              <img src="./assets/images/tunespace.png" useMap="#tuneSpace" alt="screenshot of tunespace" />
              <map name="tuneSpace">
                <area shape="rect" coords="15,15,228,232" alt="Computer"
                  href="https://mjamesd.github.io/crispy-happiness/" target="_blank" rel="noreferrer" />
              </map>
            </div>
            <div id="tuneSpaceContent" style={styles.cardLinks}><a href="https://mjamesd.github.io/crispy-happiness/" target="_blank" rel="noreferrer">Live Deployment</a><br /><a href="https://github.com/mjamesd/crispy-happiness" target="_blank" rel="noreferrer">GitHub
              Repo</a><br /><Link to="/tunespace">Project Report</Link></div>
          </div>

          <div>
            <div id="lifetracker">
              <img src="assets/images/lifetracker.png" useMap="#lifetracker" alt="screenshot of lifetracker" />
              <map name="lifetracker">
                <area shape="rect" coords="15,15,228,232" alt="Computer"
                  href="https://lifetracker-project2.herokuapp.com/" target="_blank" rel="noreferrer" />
              </map>
            </div>
            <div id="lifetrackerContent" style={styles.cardLinks}><a href="https://lifetracker-project2.herokuapp.com/" target="_blank" rel="noreferrer">Live Deployment</a><br/><a href="https://github.com/m-sherrill/Project-2" target="_blank" rel="noreferrer">GitHub
              Repo</a><br /><Link to="/lifetracker">Project Report</Link></div>
          </div>

          <div>
            <div id="techblog">
              <img src="assets/images/techblog.png" useMap="#techblog" alt="screenshot of tech blog" />
              <map name="techblog">
                <area shape="rect" coords="15,15,228,232" alt="Computer"
                  href="https://msherrill-techblog.herokuapp.com/" target="_blank" rel="noreferrer" />
              </map>
            </div>
            <div id="techblogContent" style={styles.cardLinks}><a href="https://msherrill-techblog.herokuapp.com" target="_blank" rel="noreferrer">Live Deployment</a><br/><a href="https://github.com/m-sherrill/tech-blog" target="_blank" rel="noreferrer">GitHub
              Repo</a><br /><Link to="/techblog">Project Report</Link></div>
          </div>

          <div>
            <div id="techblog">
              <img src="assets/images/codequiz.png" useMap="#codequiz" alt="screenshot of code quiz" />
              <map name="codequiz">
                <area shape="rect" coords="15,15,228,232" alt="Computer"
                  href="https://m-sherrill.github.io/code-quiz/" target="_blank" rel="noreferrer" />
              </map>
            </div>
            <div id="techblogContent" style={styles.cardLinks}><a href="https://m-sherrill.github.io/code-quiz/" target="_blank" rel="noreferrer">Live Deployment</a><br/><a href="https://github.com/m-sherrill/code-quiz" target="_blank" rel="noreferrer">GitHub
              Repo</a><br /><Link to="/codequiz">Project Report</Link></div>
          </div>
        </Row>
        <ReturnToTop />
      </Container>
      <Footer />
    </>
  )
}

export default Projects