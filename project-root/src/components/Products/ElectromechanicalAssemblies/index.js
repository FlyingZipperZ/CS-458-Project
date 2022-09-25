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
} from './ElectromechanicalElements'

import emaIntro from '../../../images/mech-assembly.jpg'
import emaHero from '../../../images/mech-assembly-hero.png'
import ema1 from '../../../images/ema1.jpg'
import ema2 from '../../../images/ema2.jpg'
import ema3 from '../../../images/ema3.jpg'
import ema4 from '../../../images/ema4.jpg'
import ema5 from '../../../images/ema5.jpg'
import ema6 from '../../../images/ema6.jpg'

const ElectromechanicalAssemblies = () => {
  return (
    <ServicesContainer id='products'>
        <ServicesH1>
            Electro-Mechanical Assemblies
        </ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesH2>
                    Products
                </ServicesH2>
                <ServicesDiv>
                    <ServicesLinks to='/'>Magnetics</ServicesLinks>
                    <ServicesLinks to='/electro-mechanical-assemblies'>Electro-Mechanical Assemblies</ServicesLinks>
                    <ServicesLinks to='/fiber-optic-cables'>Fiber-Optic Cables</ServicesLinks>
                    <ServicesLinks to='/coaxial-cables'>Coaxial Cables</ServicesLinks>
                    <ServicesLinks to='/nycoil-cable-assemblies'>Nycoil™ Cable Assemblies</ServicesLinks>
                </ServicesDiv>
            </ServicesCard>
            <ServicesCard>
                <ServicesH2>
                    Electro-Mechanical Assemblies
                </ServicesH2>
                <ServicesP style={{textAlign: 'left'}}>
                    SVM focuses on both products and services within the electronics industry. Within our product focus, SVM maintains a leading edge in the assemblies and components markets. Along with these two detailed product areas, SVM also offers our customers specific services such as testing, customer design, procurement, quality control and specialized manufacturing.                </ServicesP>
                <ServicesIcon src={emaIntro}/>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={emaHero} style={{ height: '300px', width: '300px' }} />
                <ElectroImageContainter>
                    <ElectroImage src={ema1}></ElectroImage>
                    <ElectroImage src={ema2}></ElectroImage>
                    <ElectroImage src={ema3}></ElectroImage>
                    <ElectroImage src={ema4}></ElectroImage>
                    <ElectroImage src={ema5}></ElectroImage>
                    <ElectroImage src={ema6}></ElectroImage>
                </ElectroImageContainter>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default ElectromechanicalAssemblies