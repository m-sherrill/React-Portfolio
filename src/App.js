
import './App.css';
import { useNavigate } from "react-router-dom"
import 'materialize-css'
import { Button, Row } from 'react-materialize'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {

  let navigate = useNavigate();

  const aboutPage = () => {
    navigate("/about");
  };
  const projectPage = () => {
    navigate("/projects");
  };
  const contactPage = () => {
    navigate("/contact");
  };

  return (

    <div className="App">
     
      <Header />
       <main id="main">

    <div id="intro">
      <Row id="heroRow">
        <div className="col s12 m6 center-align" id="heroCol1">
          <img id="myPhotoImg" src="./assets/images/msherrill.png" alt="Morgan Sherrill" />
        </div>
        <div className="col s12 m6" id="heroCol2">
          <div>
            <p id="introSubtitle">Hi, I'm Morgan. A Web Developer. </p>

            Thank you for stopping by my little "home" on the web! Stay awhile, look around, and enjoy your stay!
            <p></p>
          
            <Button onClick={aboutPage}>Learn More About
                Me</Button><br />
             <Button onClick={projectPage}>Check out my latest
                projects</Button><br />
            <Button onClick={contactPage}>How to Reach
                Me</Button> 
              
            <br />
          </div>
        </div>
      </Row>
    </div>
        </main>
        <Footer/>
    </div>
  );
}

