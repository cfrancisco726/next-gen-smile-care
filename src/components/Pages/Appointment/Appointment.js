import React, { Component } from "react";

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
      <form className="appointment-form">
        <h1>Request an Appointment</h1>
        <label>
          Your name*
          <input
            type="text"
            id="name"
            name="name"
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Email*
          <input
            type="email"
            id="email"
            name="email"
            required
            value={this.state.email}
            onChange={this.handleChange}
          />
        </label>
        <label>
          phone
          <input
            type="tel"
            id="phone"
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Message
          <textarea
            id="message"
            name="message"
            value={this.state.message}
            onChange={this.handleChange}
            placeholder="Post some lorem ipsum here"
            required
          />
        </label>
        <input
          type="button"
          value="Request Appointment"
          className="btn btn-submit"
          onClick={this.handleSubmit}
        />
      </form>
    );
  }
}

export default Appointment;
