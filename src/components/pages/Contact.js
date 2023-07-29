import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../../styles/Contact.css";

import { validateEmail } from "../../utils/helpers";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    setErrorMessage("");
    const { target } = e;
    const inputType = target.id;
    const inputValue = target.value;

    if (inputType === "formBasicText") {
      setName(inputValue);
    } else if (inputType === "formBasicEmail") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleName = (e) => {
    e.preventDefault();
    setErrorMessage("");
    if (!name) {
      setErrorMessage("Name required");
      return;
    } else {
      if (!email) {
        setErrorMessage("Email required");
        return;
      } else if (!validateEmail(email)) {
        setErrorMessage("Email is invalid");
        return;
      } else if (!message) {
        setErrorMessage("Message required");
        return;
      }
    }
  };

  const handleEmail = (e) => {
    e.preventDefault();
    setErrorMessage("");
    if (!email) {
      setErrorMessage("Email required");
      return;
    } else {
      if (!validateEmail(email)) {
        setErrorMessage("Email is invalid");
        return;
      } else {
        if (!name) {
          setErrorMessage("Name required");
          return;
        } else if (!message) {
          setErrorMessage("Message required");
          return;
        }
      }
    }
  };

  const handleMessage = (e) => {
    e.preventDefault();
    setErrorMessage("");
    if (!message) {
      setErrorMessage("Message required");
      return;
    } else {
      if (!name) {
        setErrorMessage("Name required");
        return;
      } else if (!email) {
        setErrorMessage("Email required");
        return;
      } else if (!validateEmail(email)) {
        setErrorMessage("Email is invalid");
        return;
      }
    }
  };

  return (
    <section className="contact-detail">
      <h1>Let's Chat!</h1>
      <h3>
        Fill out the form below and I will get back to you as soon as I can!
      </h3>
      <article className="contact-form-wrapper">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              onChange={handleInputChange}
              onBlur={handleName}
              value={name}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              onChange={handleInputChange}
              onBlur={handleEmail}
              value={email}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formControlTextarea">
            <Form.Label>A brief message:</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Enter message"
              rows="5"
              onChange={handleInputChange}
              onBlur={handleMessage}
              value={message}
            />
            <Form.Text className="text-muted">{errorMessage}</Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </article>
    </section>
  );
}

export default Contact;
