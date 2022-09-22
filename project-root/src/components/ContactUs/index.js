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

const ContactUs = () => {
  return (
    <ServicesContainer id="contact">
      <EmailForm>
        <CustomerInfo>
          <CustomerName>First Name:</CustomerName>
          <CustomerInput type="text" name="fname" />
        </CustomerInfo>
        <CustomerInfo>
          <CustomerName>Last Name:</CustomerName>
          <CustomerInput type="text" name="lname" />
        </CustomerInfo>
        <CustomerInfo>
          <CustomerName>Email:</CustomerName>
          <CustomerEmail type="text" name="email" />
        </CustomerInfo>
        <CustomerInfo>
          <CustomerName>Message:</CustomerName>
        </CustomerInfo>
        <CustomerInfo>
          <CustomerMessage type="text" name="message" />
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
};

export default ContactUs;
