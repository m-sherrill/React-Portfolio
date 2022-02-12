import React from 'react'
import { Container, Row } from 'react-materialize'
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <Container className="center-align" id="footer">
    <Row>
  &copy; 2021 by Morgan Sherrill<br/>
Icons made by <Link to="https://www.freepik.com" title="Freepik" target="_blank">Freepik</Link> from <Link
      to="https://www.flaticon.com/" title="Flaticon" target="_blank">www.flaticon.com</Link>
</Row>
  </Container>
  )
}

export default Footer