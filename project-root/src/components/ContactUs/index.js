import React from "react";
import {
  ServicesContainer,
  BgContainer,
  BgImage,
  EmailForm,
  CustomerInfo,
  CustomerName,
  SubmitEvent,
  CustomerEmail,
  CustomerInput,
  CustomerMessage,
} from "./ContactUsElements";
import testBg from "../../images/contactbkg.jpeg";

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.state = { value1: "" };
    this.state = { value2: "" };
    this.state = { value3: "" };

    this.handleChangeFirst = this.handleChangeFirst.bind(this);
    this.handleChangeLast = this.handleChangeLast.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeFirst(event) {
    this.setState({ value: event.target.value });
  }

  handleChangeLast(event) {
    this.setState({ value1: event.target.value });
  }

  handleChangeEmail(event) {
    this.setState({ value2: event.target.value });
  }

  handleChangeMessage(event) {
    this.setState({ value3: event.target.value });
  }

  /*
    Add SQL statments for the react in order to add more functionallity
  */
  handleSubmit(event) {
    alert(
      "First name: " +
        this.state.value +
        "\nLast name: " +
        this.state.value1 +
        "\nEmail: " +
        this.state.value2 +
        "\nEmail: " +
        this.state.value3
    );
    event.preventDefault();
  }

  // const ContactUs = () => {
  render() {
    return (
      <ServicesContainer id="contact">
        <EmailForm onSubmit={this.handleSubmit}>
          <CustomerInfo>
            <CustomerName>First Name:</CustomerName>
            <CustomerInput
              type="text"
              value={this.state.value}
              onChange={this.handleChangeFirst}
              name="fname"
            />
          </CustomerInfo>
          <CustomerInfo>
            <CustomerName>Last Name:</CustomerName>
            <CustomerInput
              type="text"
              value1={this.state.value1}
              onChange={this.handleChangeLast}
              name="lname"
            />
          </CustomerInfo>
          <CustomerInfo>
            <CustomerName>Email:</CustomerName>
            <CustomerEmail
              type="text"
              value2={this.state.value2}
              onChange={this.handleChangeEmail}
              name="email"
            />
          </CustomerInfo>
          <CustomerInfo>
            <CustomerName>Message:</CustomerName>
          </CustomerInfo>
          <CustomerInfo>
            <CustomerMessage
              type="text"
              value2={this.state.value3}
              onChange={this.handleChangeMessage}
              name="message"
            />
          </CustomerInfo>
          <CustomerInfo>
            <SubmitEvent type="submit" value="Submit" />
          </CustomerInfo>
        </EmailForm>
        <BgContainer>
          <BgImage src={testBg} type="image/jpg"></BgImage>
        </BgContainer>
      </ServicesContainer>
    );
  }
}

export default ContactUs;
