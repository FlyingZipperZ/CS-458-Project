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
ServicesLinks} from './ProductsElements'
import Icon1 from '../../images/penny.png'
import Icon2 from '../../images/magnetics-fab2.jpg'
import Icon3 from '../../images/penny.png'

const services = () => {
  return (
    <ServicesContainer id='products'>
        <ServicesH1>
            Products
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
                <ServicesIcon src={Icon2}/>
                <ServicesH2>
                    Magnetics
                </ServicesH2>
                <ServicesP>
                    SVM offers a full range of services from design and prototype manufacturing, to full production for all types of magnetic components. From universal progressive-wound high-voltage transformers, to high-frequency resonators, SVM can provide the assembly to meet your requirements. Toroid inductors and transformers are our specialty, ranging from high-frequency output transformers to high-power filter inductors. Both thru-hole and surface mount designs are available.                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>
                    Messaging
                </ServicesH2>
                <ServicesP>
                    Secure private messaging.
                </ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default services
