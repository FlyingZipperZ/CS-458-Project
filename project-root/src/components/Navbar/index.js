import React, {useState, useEffect} from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, CompanySlogan} from './NavbarElements'
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll'
//import Login from '../auth/Login/Login'
//import SignUp from '../auth/SignUp/SignUp'


const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)
    
    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
    <>
    <CompanySlogan>
        A Heritage of Solving Problems Others Couldn't.
    </CompanySlogan>
    <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}>
                    SVM
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='products' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                            Products
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='testing' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                            Testing
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='heritage' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                            Our Heritage
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='testimonials' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                            Testimonials
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='contact us' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                            Contact Us
                        </NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar