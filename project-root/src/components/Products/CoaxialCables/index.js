import React from 'react'
import { 
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP, 
    ServicesDiv,
    ServicesLinks,
    ElectroImageContainter,
    ElectroImage,
} from './ProductsElements'
import ProductsNavbar from '../ProductsNavbar'
import fab2 from '../../../images/coaxial-fab2.jpg'
import Hero from '../../../images/coaxial-hero.png'
import cc1 from '../../../images/cc1.jpg'
import cc2 from '../../../images/cc2.jpg'
import cc3 from '../../../images/cc3.jpg'
import cc4 from '../../../images/cc4.jpg'
import cc5 from '../../../images/cc5.jpg'
import cc6 from '../../../images/cc6.jpg'

const CoaxialCables = () => {
  return (
    <ServicesContainer id='products'>
        <ProductsNavbar />
        <ServicesH1>
            Coaxial Cables
        </ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesH2>
                    Our Products
                </ServicesH2>
                <ServicesDiv>
                    <ServicesLinks to='/magnetics'>Magnetics</ServicesLinks>
                    <ServicesLinks to='/electro-mechanical-assemblies'>Electro-Mechanical Assemblies</ServicesLinks>
                    <ServicesLinks to='/fiber-optic-cables'>Fiber-Optic Cables</ServicesLinks>
                    <ServicesLinks to='/coaxial-cables'>Coaxial Cables</ServicesLinks>
                    <ServicesLinks to='/nycoil-cable-assemblies'>Nycoil™ Cable Assemblies</ServicesLinks>
                </ServicesDiv>
            </ServicesCard>
            <ServicesCard>
                <ServicesH2>
                    Coaxial Cables
                </ServicesH2>
                <ServicesP style={{textAlign: 'left'}}>
                    SVM provides a full range of RF cables, including semi-rigid and flexible with type N, SMA, SMB, SMC, BNC, MCX, TNC and other types of terminations for the wireless and military markets. Our automated process supports prototype, short runs, and high-volume production requirements with the same efficiency. SVM has the equipment, facilities and technical expertise to perform phase matching, electrical length, SWR and attenuation/loss measurements from 30 Khz to 20 Ghz.                </ServicesP>
                <ServicesIcon src={fab2}/>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Hero} style={{ height: '300px', width: '300px' }} />
                <ElectroImageContainter>
                    <ElectroImage src={cc1}></ElectroImage>
                    <ElectroImage src={cc2}></ElectroImage>
                    <ElectroImage src={cc3}></ElectroImage>
                    <ElectroImage src={cc4}></ElectroImage>
                    <ElectroImage src={cc5}></ElectroImage>
                    <ElectroImage src={cc6}></ElectroImage>
                </ElectroImageContainter>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default CoaxialCables
