import React from 'react'
import { Button, Container } from 'react-materialize'
import { useNavigate } from "react-router-dom"

const ContactNav = () => {

  let navigate = useNavigate();

  const returnHome = () => {
    navigate("/");
  };
  const aboutPage = () => {
    navigate("/about")
  }
  const projectPage = () => {
    navigate("/projects")
  }
  const contactPage = () => {
    navigate("/contact")
  }

  const styles = {
    button: {
      fontWeight: 400,
    },
    container: {
      paddingBottom: "35px",
      borderBottom: "1px solid rgba(255, 255, 255, 0.466)",
      marginBottom: "25px",
    }
  };

  return (
    <Container className="center-align" style={styles.container}>
      <Button waves="green" style={styles.button} onClick={returnHome}>Home</Button>
      <Button waves="green" style={styles.button} onClick={aboutPage}>About</Button>
      <Button waves="green" style={styles.button} onClick={projectPage}>Projects</Button>
      <Button disabled waves="green" style={styles.button} onClick={contactPage}>Contact</Button>
    </Container>
  )
}

export default ContactNav