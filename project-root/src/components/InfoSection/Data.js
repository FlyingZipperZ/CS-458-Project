import img1 from '../../images/widget1.jpg'
import img2 from '../../images/widget1.jpg'
import HHD from '../../images/widget1.jpg'
import RP from '../../images/widget1.jpg'
import testing1 from './assets/testing1.jpg';
import testing2 from './assets/testing2.jpg';
import testing3 from './assets/testing3.jpg';
import testing4 from './assets/testing4.jpg';
import slide1 from '../../images/slide1.png'
import slide2 from '../../images/slide2.png'
import slide3 from '../../images/slide4.png'
import slide4 from '../../images/slide5.png'
import slide5 from '../../images/slide6.png'
import slide6 from '../../images/slide7.png'
import slide7 from '../../images/slide8.png'
import slide8 from '../../images/slide9.png'

export const homeObjOne = 
{
    id: 'testing',
    topLine: 'Testing',
    headLine: 'SVM\'s testing capabilites set us apart from other electronics manufacturers. Our policy is to test 100% and to use the latest state-of-the-art equipment to verify that all products meet our customers\' requirements.',
    description: 'We maintain a three meter RF shield room that contains a network analyzer (Agilent N5230C 10 Mhz to 20 Ghz), an impedence/material analyzer (HP 5291B 1Mhz to 1.8 Ghz) and a spectrum analyzer (Agilent E4402B 9 Khz to 3 Ghz).',
    alt: 'Guitarist',
    imgStart: true,
    img: HHD,
    buttonName: 'Learn More',
    to: 'heritage',
    items: [
        {
          image: testing2,
          caption: '',
        },
        {
          image: testing3,
          caption: '',
        },
        {
          image: testing4,
          caption: '',
        },
        {
          image: testing1,
          caption: '',
        }, ]
}


export const homeObjTwo = 
{
    id: 'heritage',
    topLine: 'Our heritage',
    headLine: 'SVM has a heritage of four decades of quality manufacturing and engineering solutions. Click through the slideshow to see some of our milestones.',
    description: '',
    alt: 'link',
    imgStart: false,
    img: RP,
    buttonName: 'Checkout our testimonials',
    to: 'testimonials',
    items: [
        {
          image: slide1,
          caption: '',
        },
        {
          image: slide2,
          caption: '',
        },
        {
          image: slide3,
          caption: '',
        },
        {
          image: slide4,
          caption: '',
        },
        {
            image: slide5,
            caption: '',
        },
        {
            image: slide6,
            caption: '',
        },
        {
            image: slide7,
            caption: '',
        },
        {
            image: slide8,
            caption: '',
        }, ]
}


