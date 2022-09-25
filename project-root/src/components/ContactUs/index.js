import React, { useState } from "react";
import { ContactContainer,
  BgImage,
  EmailForm,
  CustomerInfo,
  CustomerInput,
  CustomerMessage,
  SubmitEvent,
  BgContainer,
  InputWrapper } from "./ContactUsElements";

  import testBg from '../../images/contactbkg.jpeg'


const ContactUs = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:3000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <ContactContainer id="contact">
      <EmailForm onSubmit={handleSubmit}>
        <InputWrapper>
          <CustomerInfo htmlFor="name">Name:</CustomerInfo>
          <CustomerInput type="text" id="name" required />
        </InputWrapper>
        <InputWrapper>
          <CustomerInfo htmlFor="email">Email:</CustomerInfo>
          <CustomerInput type="email" id="email" required />
        </InputWrapper>
        <InputWrapper>
          <CustomerInfo htmlFor="message">Message:</CustomerInfo>
          <CustomerMessage type="message" id="message" required />
        </InputWrapper>
        <button type="submit">{status}</button>
      </EmailForm>
      <BgContainer>
        <BgImage src={testBg} type="image/jpg"></BgImage>
      </BgContainer>
    </ContactContainer>
  )
};

export default ContactUs;