import React, { useState } from 'react'
import { HeroContainer, HeroBg, VideoBg, ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP 
        } from './HeroElements'
import MagneticBg from '../../videos/circuitboard.mp4'
import { Button } from '../ButtonElement'
import Icon1 from '../../images/toroid-winding.jpg'
import Icon2 from '../../images/penny.png'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

  return (
    <HeroContainer id='home'>
        <HeroBg>
            <VideoBg autoPlay loop muted src={MagneticBg} type='video/mp4' />
        </HeroBg>
        <ServicesContainer id='services'>
        <div style={{color: 'white', fontSize: '24px', marginTop: '-300px'}}>
            Welcome to Scotts Valley Magnetics
        </div>
        <ServicesP>
                    Scotts Valley Magnetics (SVM) was founded in 1971 with the purpose of supplying the electronics industry with superior products at competitive prices. SVM has the highest regard for customer service and quality. To uphold our standards, SVM maintains a staff of electronic engineers who actively participate in all stages of product design and assembly.

                    Our 15,000 Sq. Ft. facility, just minutes from the heart of Silicon Valley, provides both engineering and manufacturing at the same location. This establishes that all-important interface link between the sales, production, and technical staff.

                    Our technical and manufacturing staff, together with state-of-the-art test facilities, enables SVM to respond quickly and effectively to customer requirements. A corporate commitment to customer service and implementation of Just-In-Time (JIT) philosophies ensure timely deliveries to customer-required schedules.
                </ServicesP>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
    </HeroContainer>
  )
}

export default HeroSection
