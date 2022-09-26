import React from 'react'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink, SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
    } from './FooterElements'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop()
    }

  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>
                            About us
                        </FooterLinkTitle>
                            <FooterLink to='/signin'>
                            300 El Pueblo Road, Suite 107, Scotts Valley, CA 95066 USA
                            </FooterLink>
                            <FooterLink to='/signin'>
                            Phone:  831.438.3600
                            </FooterLink>
                            <FooterLink to='/signin'>
                            scottsvalleymagnetics@gmail.com
                            </FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>
                        Scotts Valley Magnetics
                    </SocialLogo>
                    <WebsiteRights>
                        PROUDLY MADE IN THE USA 
                    </WebsiteRights>
                    <WebsiteRights>
                        Scotts Valley Magnetics © {new Date().getFullYear()} All rights reserved.
                    </WebsiteRights>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
