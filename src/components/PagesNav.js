import React from 'react'
import { Button, Container } from 'react-materialize'

const PagesHeader = () => {

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
        <Button waves="green" style={styles.button}>Home</Button>
        <Button waves="green" style={styles.button}>About</Button>
        <Button waves="green" style={styles.button}>Work</Button>
        <Button waves="green" style={styles.button}>Contact</Button>
    </Container>
  )
}

export default PagesHeader