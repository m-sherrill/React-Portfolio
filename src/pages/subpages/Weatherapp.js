import React, { useEffect } from 'react'
import '../../ProjectStyles.css';
import { Container, Button, Row, Col } from 'react-materialize'
import ProjectsHeader from '../../components/ProjectsHeader'
import Footer from '../../components/Footer';
import ReturnToTop from '../../components/ReturnToTop';

const Weatherapp = () => {

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
                <a href="https://m-sherrill.github.io/weather-app/" target="_blank" rel="noreferrer"><Button className="teal darken-2">Live
                    Deployment</Button></a><br /><br />
                <a href="https://github.com/m-sherrill/weather-app" target="_blank" rel="noreferrer"><Button className="teal darken-2">GitHub
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
                    Materialize CSS<br />
                    OpenWeatherApp API<br />
                </div>
                <div className="col s12 m6 left-align" id="projectDesc">
                    <h5>Project Description</h5>
                    This is a weather dashboard where the user can search for a city and be provided with a report of weather data. They will receive the forecast for the current weather conditions and a 5-day forecast representing future weather conditions. Their searched city will be added to their search history list. If the user needs to toggle back to a previously searched city, they can click the city from their search history to re-display that data. To clear our their search history, the "clear search history" button can be clicked.
                </div>

                <div className="col s12 left-align" id="thoughts">
                    <h5>Project Thoughts</h5>
                    This was my first time using a web API and the OpenWeatherApp API is very stable and user friendly. This was overall a wonderful project to get my feet wet with. I also took the time to learn Materialize CSS with this project, which I love. <br /><br />
                    For future development, I would be interest in adding a hourly forcast to this. Since I created this application, I actually use it constantly for easy weather information access. I hope to continue to expand it so when I need to check weather conditions, this will have all I need. Kind of fun to have created a personally useable system. 
                </div>
                <div className="col s12" id="screenshots">
                    <h5>Screenshots of Live Deloyment</h5>
                    <img className="responsive-img" src="assets/images/weatherAppLandingSS.PNG" alt="screenshot of weather app" /><br /><br />
                    <img className="responsive-img" src="assets/images/weatherAppDailySS.PNG" alt="screenshot of weather app"/><br /><br />
                    <img className="responsive-img" src="assets/images/weatherapp5daySS.PNG" alt="screenshot of weather app"/><br /><br />
                </div>
                
            </Row>
            <ReturnToTop />
        </Container>


    <Footer />
    </>
  )
}

export default Weatherapp