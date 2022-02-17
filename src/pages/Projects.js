import React from 'react'
import '../App.css';
import { Link } from "react-router-dom"
import { Container, Row } from 'react-materialize'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProjectsNav from '../components/ProjectsNav';
import ReturnToTop from '../components/ReturnToTop';

const Projects = () => {
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
            <div id="dailyTrackerContent"><a href="https://github.com/m-sherrill/work-day-planner" target="_blank" rel="noreferrer">GitHub
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
            <div id="weatherAppContent"><a href="https://github.com/m-sherrill/weather-app" target="_blank" rel="noreferrer">GitHub
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
            <div id="tuneSpaceContent"><a href="https://github.com/mjamesd/crispy-happiness" target="_blank" rel="noreferrer">GitHub
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
            <div id="lifetrackerContent"><a href="https://github.com/m-sherrill/Project-2" target="_blank" rel="noreferrer">GitHub
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
            <div id="techblogContent"><a href="https://github.com/m-sherrill/tech-blog" target="_blank" rel="noreferrer">GitHub
              Repo</a><br /><Link to="/techblog">Project Report</Link></div>
          </div>
        </Row>
        <ReturnToTop />
      </Container>
      <Footer />
    </>
  )
}

export default Projects