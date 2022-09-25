import React, { useState } from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements' 

const Sidebar = ({isOpen, toggle}) => {
    const [hover, setHover] = useState(false)
    const mouseEnter = () => {
        setHover(true)
    }
    const mouseLeave = () => {
        setHover(false)
    }

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='products' onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                    Products
                </SidebarLink>
                <SidebarLink to='testing' onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                    Testing
                </SidebarLink>
                <SidebarLink to='heritage' onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                    Our Heritage
                </SidebarLink>
                <SidebarLink to='facilities' onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                    Facilities
                </SidebarLink>
                <SidebarLink to='testimonials' onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                    Testimonials
                </SidebarLink>
                <SidebarLink to='contact' onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                    Contact us
                </SidebarLink>
            </SidebarMenu>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar