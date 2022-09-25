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
import fiberHero from '../../../images/fiber-hero.png'
import fiber1 from '../../../images/fiber1.jpg'
import fiber2 from '../../../images/fiber2.jpg'
import fiber3 from '../../../images/fiber3.jpg'
import fiber4 from '../../../images/fiber4.jpg'


const FiberopticCables = () => {
  return (
    <ServicesContainer id='products'>
        <ServicesH1>
            Fiber-Optic Cables
        </ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesH2>
                    Products               
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
                    Fiber-Optic Cables
                </ServicesH2>
                <ServicesP style={{textAlign: 'left'}}>
                    <p>
                        Scotts Valley Magnetics is a supplier of high-end large-core (100 mm-1 mm) custom glass fiber-optic cables. These cables are constructed using a glass core with a polymer clad in conjunction with a verity of high quality end connectors. The unique hard fluoropolymer cladding bonds to the silica core, providing higher fiber strength and superior static fatigue performance especially in humid environments. Typical cable assembly loss for a 25-meter assembly using ST-to-ST connectors is 0.95 db at 850 nm wavelength.
                    </p>
                    <p>
                        Fiber optic cable assemblies can be jacketed with numerous materials including PVC, and ETFE for high UV environments. Fiber optic cables assemblies are individually packaged in zip lock bags and labeled. For clean room applications, the fiber optic cable assemblies are cleaned and vacuum packaged in a class 1000 clean room environment.
                    </p>
                    <p>
                        SVM also manufactures low-cost plastic fiber-optic cable assemblies using various connector types. The plastic fiber assemblies range in size from 100 mm to 2.5 mm.
                    </p>                
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={fiberHero} style={{ height: '300px', width: '300px' }} />
                <ElectroImageContainter>
                    <ElectroImage src={fiber1}></ElectroImage>
                    <ElectroImage src={fiber2}></ElectroImage>
                    <ElectroImage src={fiber3}></ElectroImage>
                    <ElectroImage src={fiber4}></ElectroImage>
                </ElectroImageContainter>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default FiberopticCables
