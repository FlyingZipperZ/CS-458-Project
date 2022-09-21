import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: 1700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  position: relative;
  z-index: 0;

  @media screen and (max-width: 1000px) {
    height: 1550px;
  }

  @media screen and (max-width: 768px) {
    height: 1550px;
  }

  @media screen and (max-width: 480px) {
    height: 1700px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  margin-top: 66px;
  z-index: 1;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: fit-content;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  color: #000;

  &:hover {
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 64px;
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 30px;
  z-index: 1;
  padding: 50px 50px 50px 50px;
  border-radius: 33px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 768px) {
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
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
  grid-template-columns: 1fr;
  position: sticky;
  background-color: white;
  padding: 1.5em;
  border-radius: 1em;
  justify-content: center;
  align-items: center;
`;

export const CustomerInfo = styled.label`
  margin: 15px;
  width: 50%;
  height: 25%;
`;

export const CustomerName = styled.label`
  width: 50%;
  height: 25%;
`;

export const SubmitEvent = styled.input`
  margin: 20px;
  width: 100px;
  height: 50px;
`;

export const CustomerNameInput = styled.input`
  width: 50;
  height: 100;
`;

export const CustomerEmail = styled.input`
  width: 50;
  height: 100;
`;