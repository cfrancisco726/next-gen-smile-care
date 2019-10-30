import React from "react";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", phone: "", message: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
            required
            value={this.state.email}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <textarea
            id="test-mailing"
            name="test-mailing"
            onChange={this.handleChange}
            placeholder="Post some lorem ipsum here"
            required
            value={this.state.message}
            style={{ width: "100%", height: "150px" }}
          />
        </label>
        <input
          type="button"
          value="Submit"
          className="btn btn--submit"
          onClick={this.handleSubmit}
        />
      </form>
    );
  }

  handleChange(event) {
    const { value } = event.target;

    this.setState({ [event.target.name]: value });
  }

  handleSubmit(event) {
    const templateId = "template_qWttzqDG";

    this.sendFeedback(templateId, {
      message_html: this.state.feedback,
      from_name: this.state.name,
      reply_to: this.state.email
    });
  }

  sendFeedback(templateId, variables) {
    window.emailjs
      .send("nextgensmilecare", templateId, variables)
      .then(res => {
        console.log("Email successfully sent!");
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error("failed:", err));
  }
}
