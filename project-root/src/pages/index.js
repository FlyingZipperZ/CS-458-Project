import React, {useState} from 'react'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import Footer from '../../src/components/Footer'
import Products from '../components/Products'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjTwo } from '../components/InfoSection/Data'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Navbar toggle={toggle}/>
      <HeroSection />
      <Products />
      <InfoSection {...homeObjOne}/>
      <InfoSection {...homeObjTwo}/>
      <Footer />
    </>
  )
}

export default Home
