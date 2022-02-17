import React, { useEffect } from 'react'
import '../../ProjectStyles.css';
import { useNavigate, Link } from "react-router-dom"
import { Container, Button, Row, Col } from 'react-materialize'
import ProjectsHeader from '../../components/ProjectsHeader'
import ProjectsFooter from '../../components/ProjectsFooter'

const Scheduler = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
    <ProjectsHeader />
    <div>Scheduler</div>
    <ProjectsFooter />
    </>
  )
}

export default Scheduler