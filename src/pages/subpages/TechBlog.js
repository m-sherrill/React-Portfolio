import React, { useEffect } from 'react'
import '../../ProjectStyles.css';
import { useNavigate, Link } from "react-router-dom"
import { Container, Button, Row, Col } from 'react-materialize'
import ProjectsHeader from '../../components/ProjectsHeader'
import ProjectsFooter from '../../components/ProjectsFooter'

const TechBlog = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <><ProjectsHeader />

<Container>
            <h1>Tech Blog</h1>
            <h4>Project Report</h4><br /><br />
            <Row className="center-align" id="btnContainer">
                <a href="https://msherrill-techblog.herokuapp.com/" target="_blank"><Button>Live
                    Deployment</Button></a><br /><br />
                <a href="https://github.com/m-sherrill/tech-blog" target="_blank"><Button>GitHub
                        Repo</Button></a><br /><br />
            </Row>
            <Row id="textContent">
               
                <div className="col s12 m6 center-align" id="languages">
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
                </div>
                <div className="col s12 m6 left-align" id="projectDesc">
                    <h5>Project Description</h5>
                    This is an application using Express which allows users to post tech blog posts and other users to comment on those posts. It requires user authentication, allowing the users to keep track of their blog posts and review comments. The user must be logged in to post new blog posts and to leave comments on the blog posts of others. It features a dashboard where the user can manage their blog posts including the ability to update and delete them. 
                </div>

                <div className="col s12 left-align" id="thoughts">
                    <br/><br/><h5>Project Thoughts</h5>
                    This project was actually quite huge! This was really my first full stack application building out the front and back ends. It was the first time I had set up user authentication and that was a struggle at first. <br/><br/>
                    There were times where this felt overwhelming but in the end it was very satisfying to finish it and have it function exactly as I wanted and expected! In the end, I think this was one of my favorite assignments that I had to complete for bootcamp. <br/><br/>
                </div>
                <div className="col s12" id="screenshots">
                    <h5>Screenshots of Live Deloyment</h5>
                    <img className="responsive-img" src="assets/images/techblogscreenshot1.png" /><br /><br />

                    <img className="responsive-img" src="assets/images/techblogscreenshot2.png" /><br />
                </div>
                
            </Row>
        </Container>

    <ProjectsFooter /> </>
  )
}

export default TechBlog