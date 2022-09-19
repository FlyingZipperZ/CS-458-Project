import React, {useState} from 'react'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import Footer from '../../src/components/Footer'
import Products from '../components/Products'

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
      <Footer />
    </>
  )
}

export default Home
