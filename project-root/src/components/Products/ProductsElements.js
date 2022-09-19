import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom'

export const ServicesContainer = styled.div`
    height: 1250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fffff0;

    @media screen and (max-width: 768px){
        height: 1100px;
    }

    @media screen and (max-width: 480px){
        height: 1300px;
    }
`

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    } 
`

export const ServicesCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-width: fit-content;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    color: #000;

    &:hover {
        transform: scale(1.1);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const ServicesIcon = styled.img`
    height: 500px;
    width: 333px;
    margin-bottom: 64px;
` 

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #000;
    margin-bottom: 64px;
    padding: 50px 50px 50px 50px;
    border-radius: 33px;
    

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`

export const ServicesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`

export const ServicesDiv = styled.div`
    font-size: 1rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    cursor: pointer;
`

export const ServicesLinks = styled(LinkR)`
    border-radius: 50px;
    background: #4169e1;
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center; 
    transition: all 0.2s ease-in-out;
    margin: 12px;

    &:hover {
        background-color: white;
        color: #4169e1;
    }
`

export const ServicesP = styled.p`
    font-size: 1rem;
    text-align: justify;
`