import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'



export const Nav = styled.nav`
    background:  ${({scrollNav}) => (scrollNav ? 'black' : 'grey')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    min-width: 300px;
    margin: auto;
    width: 100%;

@media screen and (max-width: 960) {
    transition: 0.8 all ease
}
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
    color: ${({scrollNav}) => (scrollNav ? 'white' : 'white')};
    justify-self: flex-start;
    cursor: pointer;
    font-size: 2rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    
    text-decoration: none;
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px)
    {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;


    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkS)`
  color: ${({scrollNav}) => (scrollNav ? '#fff' : 'white')};
  display: flex;
  align-items: center;
  text-decoration: none; 
  padding: 0 1rem;
  height: 100%;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  top: 0;
  transition: top ease 0.3s;
 
  &.active {
      border-bottom: 6px solid #4169e1;
      top: -5px;
  }

  &:hover {
    color:#4169e1;
  }
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center; 

  @media screen and (max-with: 768px) {
    display: none;
  }
`
export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #FF5349;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 18px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #FF5349;
  }
`

export const CompanySlogan = styled.div`
  font-size: 24px;
  margin-bottom: 100px;
  text-align: center;
  position: sticky;
  z-index: 3;
  min-width: 300px;
  margin: auto;
  color: white;
`
export const CoLogo = styled.img`
  height: 100%;
  width: 100%;
`