import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: 850px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  position: relative;
  z-index: 0;

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
  position: sticky;
  background-color: white;
  padding: 1.5em;
  border-radius: 1em;
  justify-content: center;
  align-items: center;
  border: 5px solid;
  border-color: black;
  background-color: lightgray;
`;

export const CustomerInfo = styled.label`
  margin: 15px;
`;

export const CustomerName = styled.label`
  width: 50%;
  height: 25%;
`;

export const CustomerInput = styled.input`
  width: 100%;
  height: 25px;
  font-size: 20;
`;

export const CustomerEmail = styled.input`
  width: 100%;
  height: 25px;
`;

export const CustomerMessage = styled.textarea`
  width: 100%;
  height: 100px;
  margin-top: -30px;
`;

export const SubmitEvent = styled.input`
  width: 100px;
  height: 50px;
`;
