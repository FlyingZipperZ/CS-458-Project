import React from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
  BgContainer,
  BgImage,
  EmailForm,
  CustomerInfo,
  CustomerName,
  SubmitEvent,
  CustomerEmail,
  CustomerNameInput,
} from "./ContactUsElements";
import testBg from "../../images/contactbkg.jpeg";

const ContactUs = () => {
  return (
    <ServicesContainer id="contact">
      <EmailForm>
        <CustomerInfo>
          <CustomerName>First Name:</CustomerName>
          <CustomerNameInput type="text" name="name" />
        </CustomerInfo>
        <CustomerInfo>
          <CustomerName>Last Name:</CustomerName>
          <CustomerNameInput type="text" name="name" />
        </CustomerInfo>
        <CustomerInfo>
          <CustomerName>Email:</CustomerName>
          <CustomerEmail type="text" name="name" />
        </CustomerInfo>
        <SubmitEvent type="submit" value="Submit" />
      </EmailForm>
      <BgContainer>
        <BgImage src={testBg} type="image/jpg"></BgImage>
      </BgContainer>
    </ServicesContainer>
  );
};

export default ContactUs;
