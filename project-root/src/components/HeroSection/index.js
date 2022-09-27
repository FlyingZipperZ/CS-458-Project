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
import './TextLoop.css'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

  return (
    <HeroContainer id='home' style={{backgroundSize: '100% 100%'}}>
        <HeroBg>
                <VideoBg autoPlay loop muted src={MagneticBg} type='video/mp4' />
        </HeroBg>
        <ServicesContainer id='home'>
        <div style={{color: 'white', fontSize: '32px', marginTop: '-300px', width: '77%', marginTop: 'auto'}}>
            Welcome to Scotts Valley Magnetics
        </div>
        <ServicesP>
                    <p>
                        Scotts Valley Magnetics (SVM) was founded in 1971 with the purpose of supplying the electronics industry with superior products at competitive prices. SVM has the highest regard for customer service and quality. To uphold our standards, SVM maintains a staff of electronic engineers who actively participate in all stages of product design and assembly.
                    </p>

                    <p>
                        Our 15,000 Sq. Ft. facility, just minutes from the heart of Silicon Valley, provides both engineering and manufacturing at the same location. This establishes that all-important interface link between the sales, production, and technical staff.
                    </p>
                    
                    <p>
                        Our technical and manufacturing staff, together with state-of-the-art test facilities, enables SVM to respond quickly and effectively to customer requirements. A corporate commitment to customer service and implementation of Just-In-Time (JIT) philosophies ensure timely deliveries to customer-required schedules.
                    </p>
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

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};