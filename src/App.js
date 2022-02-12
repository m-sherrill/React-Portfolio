
import './App.css';
import { useNavigate } from "react-router-dom"
import 'materialize-css'
import { Button, Card, Row, Col } from 'react-materialize'
import Header from './components/Header'

export default function App() {

  let navigate = useNavigate();

  const aboutPage = () => {
    navigate("/about");
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
          
            <Button onclick={aboutPage} className="btn waves-effect waves-green aboutMeLink">Learn More About
                Me</Button><br />
             <button  className="btn waves-effect waves-green workLink">Check out my latest
                projects</button><br />
            <button  className="btn waves-effect waves-green contactMeLink">How to Reach
                Me</button> 
              
            <br />
          </div>
        </div>
      </Row>
    </div>
        </main>
    </div>
  );
}

