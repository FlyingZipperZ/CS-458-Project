<<<<<<< HEAD
import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Footer from "../../src/components/Footer";
import Products from "../components/Products";
import InfoSection from "../components/InfoSection";
import { homeObjOne, homeObjTwo } from "../components/InfoSection/Data";
import Testimonials from "../components/Testimonials";
import Sidebar from "../components/Sidebar";
import ContactUs from "../components/ContactUs";
=======
import React, {useState} from 'react'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import Footer from '../../src/components/Footer'
import Products from '../components/Products'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjTwo } from '../components/InfoSection/Data'
import Testimonials from '../components/Testimonials'
import Sidebar from '../components/Sidebar'
import Facilities from '../components/Facilities '
>>>>>>> morgan-dev

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
<<<<<<< HEAD
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
=======
      <InfoSection {...homeObjOne}/>
      <InfoSection {...homeObjTwo}/>
      <Facilities />
>>>>>>> morgan-dev
      <Testimonials />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
