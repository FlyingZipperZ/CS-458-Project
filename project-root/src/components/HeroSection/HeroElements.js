import styled from 'styled-components'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

export const HeroContainer = styled.div`
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 1500px;
    position: relative;
    z-index: 3;
    /* min-width: 300px;
    margin: auto; */

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }
    
    @media screen and (max-width: 768px){
        height: 1800px;
        
    }

    @media screen and (max-width: 480px){
        height: 2600px;
    }

`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover; 
    object-fit: cover;
    background: #fff;

    @media screen and (max-width: 768px){
        height: 100%;
        
    }

    @media screen and (max-width: 480px){
        height: 100%;
    }
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    /* position: relative;  */
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 33px;
`

export const HeroH1 = styled.div`
    color: #fff;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`
export const HeroP = styled.p`
    color: #fff;
    font-size: 28px;
    text-align: justify;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`

export const HeroBtnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`

export const ImagesContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #ff5349;

    @media screen and (max-width: 768px){
        height: 1100px;
    }

    @media screen and (max-width: 480px){
        height: 1300px;
    }
`

export const ServicesContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 2;
    width: 166%;
`

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;
    z-index: 1;
    /* width: fit-content; */

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    } 

    @media screen and (max-width: 480px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    } 
`

export const ServicesCard = styled.div`
    background: black;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: auto;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    color: #fff;
    margin: auto;

    &:hover {
        transform: scale(1.1);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    @media screen and (max-width: 480px) {
        width: 77%;
    } 

`

export const ServicesIcon = styled.img`
    height: 320px;
    width: 320px;
    margin-bottom: 12px;

    @media screen and (max-width: 480px) {
        width: 100%;
    } 
` 

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    /* margin-bottom: 64px; */
   
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

export const ServicesP = styled.p`
    font-size: 24px;
    text-align: left;
    color: white;
    margin-left: 66px;
    margin-right: 66px;
    width: 66%;
    margin-bottom: 100px;
    margin-top: 100px;

    @media screen and (max-width: 480px) {
        width: 90%;
    } 

    @media screen and (max-width: 768px){
        width: 90%;
    }
`