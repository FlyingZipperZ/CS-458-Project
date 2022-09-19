import React from 'react'
import { 
ServicesContainer,
ServicesH1,
ServicesWrapper,
ServicesCard,
ServicesIcon,
ServicesH2,
ServicesP,
BgContainer,
BgImage,
 } from './TestimonialsElements'
import testBg from '../../images/toroid1-bg.jpg'


const testimonials = () => {
  return (
    <ServicesContainer id='testimonials'>
        <BgContainer>
            <BgImage src={testBg} type='image/jpg'></BgImage>
        </BgContainer>
        <ServicesH1>
            A Few Of Our Testimonials
        </ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesH2>
                    "SVM provides great engineering support for both "prototype" parts and "production" parts. They consistently notify both buyer and engineer of any issues that arise for both lower level and assembled parts. SVM takes the time to identify issues and drives them to closure with appropriate people."
                </ServicesH2>
                <ServicesP>
                    - Component Engineer, Agilent Technologies
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesH2>
                    "We worked with them on several design related problems that required either a design change, or special tooling to deal with the problem. SVM met with production engineering and resolved the problems as soon as we made the request."
                </ServicesH2>
                <ServicesP>
                    - Procurement Manager, Agilent Technologies
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesH2>
                    "SVM is the best vendor that I have worked with in my tenure at Agilent. Jack and Jerry are very broadly skilled in many areas. I have the utmost confidence in their abilities and their commitment to excellence. I have worked with them on several key modules that were considered "dirty and labor intensive." Phasing in SVM to assemble these modules and developing a manufacturing process was painless. They were instrumental in the development of the manufacturing assembly process and provided excellent tips for improvement – many of which were incorporated in the product. In a little less than a year they fabricated over 15,000 oven mass assemblies. They continue to be instrumental in the process by reworking old units returned from customer. Over the years, I have had many good experiences working with them.

                    I like working with SVM because they have considerable experience in many areas of manufacturing. I look to them to assemble high technology products where a high degree of technical expertise is required. They have demonstrated this many times in the products that they assemble for SCD. I have kept my eyes open for other vendors with this skill set, but I have yet to identify one. They truly have a unique skill set. I will continue to recommend SVM as a vendor in many future projects."
                </ServicesH2>
                <ServicesP>
                    - Project Engineer, Agilent Technologies
                </ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default testimonials
