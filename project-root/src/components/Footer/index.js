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
                                How it works
                            </FooterLink>
                            <FooterLink to='/signin'>
                                Testimonials
                            </FooterLink>
                            <FooterLink to='/signin'>
                                Careers
                            </FooterLink>
                            <FooterLink to='/signin'>
                                Meet the team
                            </FooterLink>
                            <FooterLink to='/signin'>
                                Terms of Service
                            </FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>
                            Contact Us
                        </FooterLinkTitle>
                            <FooterLink to='/signin'>
                                Contact
                            </FooterLink>
                            <FooterLink to='/signin'>
                                Support
                            </FooterLink>
                            <FooterLink to='/signin'>
                                Destinations
                            </FooterLink>
                            <FooterLink to='/signin'>
                                Sponsorships
                            </FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>
                            Products
                        </FooterLinkTitle>
                            <FooterLink to='/signin'>
                                Post
                            </FooterLink>
                            <FooterLink to='/signin'>
                                Ambassadors
                            </FooterLink>
                            <FooterLink to='/signin'>
                                Agency
                            </FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>
                            Social Media
                        </FooterLinkTitle>
                            <FooterLink to='/signin'>
                                Instagram
                            </FooterLink>
                            <FooterLink to='/signin'>
                                Facebook
                            </FooterLink>
                            <FooterLink to='/signin'>
                                Youtube
                            </FooterLink>
                            <FooterLink to='/signin'>
                                Twitter
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
                        Scotts Valley Magnetics © {new Date().getFullYear()} All rights reserved.
                    </WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                            <FaInstagram />    
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                            <FaFacebook />    
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='Youtube'>
                            <FaYoutube />    
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
                            <FaTwitter />    
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='Linkedin'>
                            <FaLinkedin />    
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
