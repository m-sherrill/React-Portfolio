import React from 'react'
import { Button } from 'react-materialize'

const ReturnToTop = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <Button className="waves-effect waves-green btn-floating btn-large introLink" onClick={scrollToTop}><i
            class="material-icons">arrow_upward</i></Button>
    )
}

export default ReturnToTop