import React, {useState} from 'react'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import Footer from '../../src/components/Footer'
import Products from '../components/Products'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjTwo } from '../components/InfoSection/Data'
import Testimonials from '../components/Testimonials'
import Sidebar from '../components/Sidebar'
import Facilities from '../components/Facilities'
import ContactUs from "../components/ContactUs";


const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <Products />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Facilities />
      <Testimonials />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
