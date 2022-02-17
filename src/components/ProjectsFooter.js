import React from 'react'
import { Button } from 'react-materialize'
import { useNavigate } from "react-router-dom"

const ProjectsFooter = () => {
    let navigate = useNavigate();
    const returnHome = () => {
        navigate("/");
      };

    return (
        <>
            
                <Button className="fixed-action-btn btn-floating btn-large" onClick={returnHome}><i className="material-icons">home</i></Button>
        
        </>
    )
}

export default ProjectsFooter