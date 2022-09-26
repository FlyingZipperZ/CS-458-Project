import React, {useState, useEffect} from 'react'
import { FaBars } from 'react-icons/fa'
import { CoLogo ,Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, CompanySlogan} from './NavbarElements'
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll'
import logo from '../../../images/svm-logo.png'

//import Login from '../auth/Login/Login'
//import SignUp from '../auth/SignUp/SignUp'


const Navbar = ({toggle}) => {
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
    <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome} scrollNav={scrollNav}>
                    <CoLogo src={logo}/>
                </NavLogo>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='/' smooth={true}>
                            Home
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