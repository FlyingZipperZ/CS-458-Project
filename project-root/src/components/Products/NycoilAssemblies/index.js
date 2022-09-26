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

import Icon2 from '../../../images/magnetics-fab2.jpg'
import Icon3 from '../../../images/magnetics-hero.png'
import widget1 from '../../../images/widget1.jpg'
import widget2 from '../../../images/widget2.jpg'
import widget3 from '../../../images/widget3.jpg'
import widget4 from '../../../images/widget4.jpg'
import widget5 from '../../../images/widget5.jpg'
import widget6 from '../../../images/widget6.jpg'
import widget7 from '../../../images/widget7.jpg'
import widget8 from '../../../images/widget8.jpg'
import ProductsNavbar from '../ProductsNavbar'
import car from '../../../images/nycoil-vehicle.jpg' 
import hero from '../../../images/nycoil-hero.png' 
import na1 from '../../../images/na1.jpg' 
import na2 from '../../../images/na2.jpg' 
import na3 from '../../../images/na3.jpg' 

const NycoilAssemblies = () => {
  return (
    <ServicesContainer id='products'>
        <ProductsNavbar />
        <ServicesH1>
         Nycoil™ Cable Assemblies
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
                    Nycoil™ Cable Assemblies
                </ServicesH2>
                <ServicesP style={{textAlign: 'left'}}>
                    <p>
                        Scotts Valley Magnetics has been building Nycoil™ assemblies for over 10 years. SVM supplies these assemblies for broadcast vehicles, military vehicles and any application where a self-coil assembly is required.
                    </p>
                    <p>
                        We can produce Nycoil™ assemblies in the following sizes: 1/2" ID - 8" OD, 3/4" ID - 13" OD, 1" ID - 151/2" OD, 11/4" ID - 211/2"OD.
                    </p>
                    <p>
                    We can install customer-supplied cables and/or build required RF or control power cable assemblies. We can also test RF cable assemblies up to 20 GHz after installation into the Nycoil™.
                    </p>
                </ServicesP>
                <ServicesIcon src={car}/>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={hero} style={{ height: '300px', width: '300px' }} />
                <ElectroImageContainter>
                    <ElectroImage src={na1}></ElectroImage>
                    <ElectroImage src={na2}></ElectroImage>
                    <ElectroImage src={na3}></ElectroImage>
                </ElectroImageContainter>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default NycoilAssemblies
