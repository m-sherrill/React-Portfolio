import React from 'react'
import { Container, Row } from 'react-materialize'

const Footer = () => {
  const styles = {
    emailLink: {
      padding: "15px",
      width: "250px",
    }
  }

  return (
    <Container className="center-align" id="footer">
      <Row style={styles.emailLink}>

        &copy; 2021 by Morgan Sherrill<br />
        <a href="mailto:mo.sherrill@outlook.com" target="_blank" rel="noreferrer">mo.sherrill@outlook.com</a>
        <br /><br />
        <a href="http://github.com/m-sherrill" target="_blank" rel="noreferrer" ><img src="assets/images/githubsmall.png"
          alt="github icon" /></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://www.linkedin.com/in/morgan-sherrill-9a838b28/" target="_blank" rel="noreferrer" ><img
          src="assets/images/linkedinsmall.png" alt="linkedin icon" /></a>

      </Row>
    </Container>
  )
}

export default Footer