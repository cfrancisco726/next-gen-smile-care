import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Appointment.css";

class Appointment extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", phone: "", message: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;

    this.setState({ [event.target.name]: value });
    console.log("handle");
  }

  handleSubmit(event) {
    event.preventDefault();
    const templateId = "template_qWttzqDG";

    this.sendFeedback(templateId, {
      message_html: this.state.message,
      from_name: this.state.name,
      reply_to: this.state.email,
      phone_num: this.state.phone
    });
    console.log("submit");
  }

  sendFeedback(templateId, variables) {
    window.emailjs
      .send("nextgensmilecare", templateId, variables)
      .then(res => {
        console.log("Email successfully sent!");
      })
      .catch(err => console.error("failed:", err));
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <h1>Request an Appointment</h1>
        <Form.Group controlId="formName">
          <Form.Label>Your name*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            name="name"
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email*</Form.Label>
          <Form.Control
            type="email"
            name="email"
            required
            value={this.state.email}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formPhone">
          <Form.Label>phone number</Form.Label>
          <Form.Control
            type="tel"
            name="phone"
            required
            value={this.state.phone}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formTextArea">
          <Form.Label> Message</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            name="message"
            value={this.state.message}
            onChange={this.handleChange}
            placeholder="Post some lorem ipsum here"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default Appointment;
