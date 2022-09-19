import img1 from '../../images/widget1.jpg'
import img2 from '../../images/widget1.jpg'
import HHD from '../../images/widget1.jpg'
import RP from '../../images/widget1.jpg'
import testing1 from './assets/testing1.jpg';
import testing2 from './assets/testing2.jpg';
import testing3 from './assets/testing3.jpg';
import testing4 from './assets/testing4.jpg';

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
    to: 'services',
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
    topLine: 'Hello',
    headLine: 'We offer technology that connects you with people that can help you create your dream music!',
    description: 'Sync is made for artists',
    alt: 'link',
    imgStart: false,
    img: RP,
    buttonName: 'Register',
    to: 'home',
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


