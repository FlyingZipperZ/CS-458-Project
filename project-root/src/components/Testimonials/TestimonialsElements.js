import styled from "styled-components";

export const ServicesContainer = styled.div`
    height: 1100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    position: relative;
    z-index: 0;

    @media screen and (max-width: 1200px){
        height: 1450px;
    }

    @media screen and (max-width: 1000px){
        height: 1650px;
    }
    
    @media screen and (max-width: 768px){
        height: 1550px;
    }

    @media screen and (max-width: 480px){
        height: 2100px;
    }
`

export const ServicesWrapper = styled.div`
    max-width: 1500px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;
    /* margin-top: 66px; */
    z-index: 1;

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
    max-height: fit-content;
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
    height: 160px;
    width: 160px;
    /* margin-bottom: 64px; */
` 

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 30px;
    z-index: 1;
    padding: 50px 50px 50px 50px;
    padding-bottom: 150px;
    border-radius: 33px;
    

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }


    @media screen and (max-width: 768px){
        
    }
`

export const ServicesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
    color: #000;

    @media screen and (max-width: 480px){
        width: 100%;
    }
`

export const ServicesP = styled.p`
    font-size: 1rem;
    text-align: center;
    color: #000;

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
`

export const BgImage = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover; 
    object-fit: cover;
    background: #fff;
`