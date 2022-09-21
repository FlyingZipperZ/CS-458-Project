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
    OurEquipment,
EquipmentItem
} from './FacilitiesElements'
import Icon1 from '../../images/penny.png'
import Icon3 from '../../images/magnetics-hero.png'
import widget1 from '../../images/widget1.jpg'
import widget2 from '../../images/widget2.jpg'
import widget3 from '../../images/widget3.jpg'
import widget4 from '../../images/widget4.jpg'
import widget5 from '../../images/widget5.jpg'
import widget6 from '../../images/widget6.jpg'
import widget7 from '../../images/widget7.jpg'
import widget8 from '../../images/widget8.jpg'
import video1 from '../../videos/toroid-winder.mp4'

const Facilities = () => {
  return (<ServicesContainer id='facilities'>
  <ServicesH1>
      Facilities
  </ServicesH1>
  <ServicesWrapper>
      <ServicesCard>
          <ServicesH2>
              Resources
          </ServicesH2>
          <ServicesDiv>
          <ServicesP style={{textAlign: 'left'}}>
          Our resources enable us to manage the entire design to production cycle, from prototype runs to full turnkey production contracts. 
          We maintain long-term contracts with our suppliers to reduce cost for our customers.
            <br />
            <br />Our equipment includes:
           
            <OurEquipment> 
                <EquipmentItem/> Coil winding machines, toroid, and bobbin types
                <EquipmentItem/> Convection ovens
                <EquipmentItem/> Vacuum ovens
                <EquipmentItem />Vacuum impregnation system
                <EquipmentItem />Solder & wire stripping system
                <EquipmentItem />Fixture/prototype shop, lath, mill, drill press
                <EquipmentItem />ESD workstations - 85 total
                <EquipmentItem />Computer test stations, HP Vee software controlled
                <EquipmentItem />20 ton 4 oz. molding machine
                <EquipmentItem />Fully automated coax stripper
                <EquipmentItem />Hermetic tester, and Helium flow system
                <EquipmentItem />High voltage test system, up to 25 KV
                <EquipmentItem />20 KVA diesel generator, backup power & 50 Hz test system
                <EquipmentItem />High resolution video inspection system
                <EquipmentItem />Environmental/Altitude test chambers
                <EquipmentItem />Epoxy/Silicone automatic delivery system
                <EquipmentItem />Delivery 3/4 ton van, and 1/2 ton utility vehicle
                <EquipmentItem />Ultrasonic peg bonder, microprocessor control, and motorized Z-Axis
            </OurEquipment>
            
          </ServicesP>
          </ServicesDiv>
      </ServicesCard>
      <ServicesCard>
          <ServicesH2>
              Facilities
          </ServicesH2>
          <ServicesP style={{textAlign: 'left'}}>
          Our plant is located just minutes from the heart of Silicon Valley. 
          Engineering and manufacturing are located in the same facility. 
          We feel this provides an important interface link between the sales, production and technical staff.
          15,000 sq. feet facility
          10,000 sq. feet is ESD protected
          </ServicesP>
          <ServicesIcon autoPlay loop muted src={video1} type='video/mp4'/>
      </ServicesCard>
      <ServicesCard>
          <ServicesIcon src={Icon3} style={{ height: '300px', width: '300px' }} />
          <ElectroImageContainter>
              <ElectroImage src={widget1}></ElectroImage>
              <ElectroImage src={widget2}></ElectroImage>
              <ElectroImage src={widget3}></ElectroImage>
              <ElectroImage src={widget4}></ElectroImage>
              <ElectroImage src={widget5}></ElectroImage>
              <ElectroImage src={widget6}></ElectroImage>
              <ElectroImage src={widget7}></ElectroImage>
              <ElectroImage src={widget8}></ElectroImage>
          </ElectroImageContainter>
      </ServicesCard>
  </ServicesWrapper>
</ServicesContainer>
)

}

export default Facilities
