import React, { useEffect } from 'react'
import './ProjectStyles.css';
import { Container, Button, Row, Col } from 'react-materialize'
import ProjectsHeader from '../../components/ProjectsHeader'
import Footer from '../../components/Footer';
import ReturnToTop from '../../components/ReturnToTop';

const TechBlog = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <><ProjectsHeader />

<Container className="center-align">
            <h1>Tech Blog</h1>
            <h4>Project Report</h4><br /><br />
            <Row className="center-align" id="btnContainer">
                <a href="https://msherrill-techblog.herokuapp.com/" target="_blank" rel="noreferrer"><Button className="teal darken-2">Live
                    Deployment</Button></a><br /><br />
                <a href="https://github.com/m-sherrill/tech-blog" target="_blank" rel="noreferrer"><Button className="teal darken-2">GitHub
                        Repo</Button></a><br /><br />
            </Row>
            <Row id="textContent">
               
                <Col s={12} m={6} className="center-align" id="languages">
                    <h5>Languages Used</h5>
                    HTML<br />
                    CSS<br />
                    JS<br />
                    <p>
                        <strong>With Help From...</strong>
                    </p>
                    Node.js<br />
                    Express<br/>
                    Express Handlebars<br/>
                    Express Sessions<br/>
                    Sequelize<br />
                    Materialize CSS<br />
                </Col>
                <Col s={12} m={6} className="col s12 m6 left-align" id="projectDesc">
                    <h5>Project Description</h5>
                    This is an application using Express which allows users to post tech blog posts and other users to comment on those posts. It requires user authentication, allowing the users to keep track of their blog posts and review comments. The user must be logged in to post new blog posts and to leave comments on the blog posts of others. It features a dashboard where the user can manage their blog posts including the ability to update and delete them. 
                </Col>

                <Col s={12} className="left-align" id="thoughts">
                    <br/><h5>Project Thoughts</h5>
                    This project was actually quite huge! This was really my first full stack application building out the front and back ends. It was the first time I had set up user authentication and that was a struggle at first. <br/><br/>
                    There were times where this felt overwhelming but in the end it was very satisfying to finish it and have it function exactly as I wanted and expected! In the end, I think this was one of my favorite assignments that I had to complete for bootcamp. <br/><br/>
                </Col>
                <Col s={12} id="screenshots">
                    <h5>Screenshots of Live Deloyment</h5>
                    <img className="responsive-img" src="assets/images/techblogscreenshot1.png" alt="screenshot of techblog app" /><br /><br />

                    <img className="responsive-img" src="assets/images/techblogscreenshot2.png" alt="screenshot of techblog app" /><br />
                </Col>
                
            </Row>
            <ReturnToTop />
        </Container>

    <Footer /> </>
  )
}

export default TechBlog