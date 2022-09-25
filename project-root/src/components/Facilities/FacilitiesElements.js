import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom'

export const ServicesContainer = styled.div`
    height: 1450px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 0;
    /* background: #fffff0; */
    /* margin-bottom: -200px; */

    @media screen and (max-width: 1200px){
        height: 2200px;
    }

    @media screen and (max-width: 1000px){
        height: 2200px;
    }

    @media screen and (max-width: 768px){
        height: 3000px;
    }

    @media screen and (max-width: 480px){
        height: 3000px;
    }
`

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    } 

    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr;
    }

`

export const ServicesCard = styled.div`
    background: #96b7e6;
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

    @media screen and (max-width: 480px){
        width: 50%;
    }


`

export const ServicesIcon = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover; 
    object-fit: cover;
    background: #fff;

    @media screen and (max-width: 768px){
        width: 100%;
    }
` 

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 0px;
    padding: 50px 50px 50px 50px;
    border-radius: 33px;
    margin-bottom: 100px;

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
    text-align: left;
    display: flex;
    flex-direction: column;
    cursor: pointer;

    @media screen and (max-width: 480px){
        width: 130%;
    }
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

export const ElectroImageContainter = styled.div`
    font-size: 1rem;
    text-align: center;
    flex-direction: column;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    cursor: pointer;

    @media screen and (max-width: 768px){
        align-items: center;
        justify-content: center;
    }
`

export const ElectroImage = styled.img`
    height: 100px;
    width: 133px;
    margin-bottom: 16px;
    /* margin: 9px; */

    @media screen and (max-width: 768px){
        width: 100%;
    }
`


export const OurEquipment = styled.div`
    /* display: inline-table; */
    padding-left: 0;
    margin-left : 1em;
    list-style-position: inside;


`
export const OurFacilty = styled.ul`
    text-align: center;
    list-style-position: inside;
`

export const EquipmentItem = styled.div`
    display: list-item;
    list-style-position: inside;
    width: 100%;
`

export const FaciltySpace = styled.li`
    margin-top: -5px;
`

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
`

export const BgImage = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover; 
    object-fit: cover;
    background: #fff;
`