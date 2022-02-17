import React from 'react'
import { Button } from 'react-materialize'
import { useNavigate } from "react-router-dom"

const FixedMenu = () => {
    let navigate = useNavigate();
    const returnHome = () => {
        navigate("/");
      };

    return (
        <>
            <div className="fixed-action-btn" id="fixedMenu">
      <Button className="btn-floating btn-large">
        <i className="large material-icons">menu</i>
      </Button>
      <ul>
        <li><Button classNames="btn-floating btn-large aboutMeLink">About</Button>
        </li>
        <li><Button className="btn-floating btn-large workLink">Work</Button>
        </li>
        <li><Button className="btn-floating btn-large contactMeLink">Contact</Button></li>
        <li><Button className="btn-floating btn-large introLinkfixed"><i className="material-icons">home</i></Button></li>
      </ul>
    </div>
        
        </>
    )
}

export default FixedMenu