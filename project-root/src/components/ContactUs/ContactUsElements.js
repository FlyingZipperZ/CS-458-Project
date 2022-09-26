import styled from "styled-components";

export const ContactContainer = styled.div`
  height: 850px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  position: relative;
  z-index: 0;
  text-align: center;

  @media screen and (max-width: 1000px) {
    height: 700px;
  }

  @media screen and (max-width: 768px) {
    height: 700;
  }

  @media screen and (max-width: 480px) {
    height: 850;
  }
`;

export const BgContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -999;
`;

export const BgImage = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #fff;
`;

export const EmailForm = styled.form`
  display: grid;
  grid-template-columns: auto;
  position: relative;
  background-color: white;
  padding: 1.5em;
  border-radius: 1em;
  justify-content: center;
  align-items: center;
  border: 5px solid;
  border-color: black;
  background-color: lightgray;
  height: auto;
  width: auto;
  color: black;
  text-align: center;
`;

export const CustomerInfo = styled.label`
  margin: 15px;
  width: 50%;
  height: 25%;
`;

export const CustomerInput = styled.input`
  width: 100%;
  height: 25px;
  font-size: 20px;
  margin-bottom: 12px;
  color: black;
`;

export const CustomerEmail = styled.input`
  width: 100%;
  height: 20%;
`;

export const CustomerMessage = styled.textarea`
  width: 100%;
  height: 60px;
  margin-bottom: 20px;
  color: black;
`;

export const SubmitEvent = styled.button`
  border: 1px solid white;
  border-radius: 33px;
  background-color: #4169e1;
  height: 150%;
  width: 50%;
  align-items: center;
  text-align: center;
  color: white;
  margin-left: 25%;
`;

export const InputWrapper = styled.div`
  text-align: center;
  width: 100%;
`
