import React, { useState, useRef } from 'react';
import { validateEmail } from '../utils/helpers';
import { Button, Container } from 'react-materialize'
import { init, sendForm } from '@emailjs/browser';
init("user_uFPYu9J5RzJC8NGR7VOo0");

function ContactForm() {
    const form = useRef();
    const styles = {
        title: {
            textAlign: "center",
            fontSize: "25px",
            fontWeight: "bold",
            fontFamily: "'Ink Free', sans-serif",
            color: "rgb(211, 211, 211)",
        },
        form: {
            textAlign: "left",
            border: "1px solid rgba(255, 255, 255, 0.466)",
            backgroundColor: "rgba(0, 0, 0, 0.329)",
            padding: "20px",
            marginBottom: "25px",
        },
        input: {
            border: "1px solid rgba(255, 255, 255, 0.466)",
            color: "lightgreen",
            paddingLeft: "5px",
        },
        textarea: {
            color: "lightgreen",
            height: "150px",
            padding: "5px",
        },
        submit: {
            textAlign: "center",
        },
        error: {
            color: "red",
            fontWeight: "bold",
            fontSize: "20px;"
        }
    }

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('')

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;


        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {

        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        if (!name) {
            setErrorMessage('Please enter your name');
            return;
        }

        if (!validateEmail(email)) {
            setErrorMessage('Please enter a valid email address');
            return;
        }

        if (!message) {
            setErrorMessage(
                `You must enter a message`
            );
            return;
        }

        if (message && email && name) {
            setSuccessMessage(
                `Your request has been submitted! Thank you!`
            )
        }


        sendForm('service_w55fovs', 'template_2pwrlie', form.current, 'user_uFPYu9J5RzJC8NGR7VOo0')


        // If everything goes according to plan, we want to clear out the input after a successful registration.
        setName('');
        setMessage('');
        setEmail('');
        setErrorMessage('');

    };

    return (
        <>
            <Container className="center-align">
                <span style={styles.title}>Send me a message!</span><br /><br />
                <form className="form" style={styles.form} ref={form} onSubmit={handleFormSubmit}>

                    <label>Name</label>
                    <input
                        value={name}
                        name="name"
                        onChange={handleInputChange}
                        type="text"
                        style={styles.input}
                    /><br /><br />
                    <label>Email</label>
                    <input
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                        type="email"
                        style={styles.input}
                    /><br /><br />
                    <label>What would you like to discuss today?</label>
                    <textarea
                        value={message}
                        name="message"
                        onChange={handleInputChange}
                        type="text"
                        style={styles.textarea}
                    /><br /><br />
                    <div style={styles.submit}>
                        <Button className="center-align" type="submit" value="send">Submit</Button>
                        {errorMessage && (

                            <p style={styles.error}>{errorMessage}</p>

                        )}
                        {successMessage && (

                            <p>{successMessage}</p>

                        )}
                    </div>
                </form>

            </Container>
            <br />
        </>
    );
}

export default ContactForm;
