import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import LogoLight from '../../assets/LogoLight.png'

const StyledLink = styled(Link)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.$isFullLink &&
    `color: white; 
    border-radius: 30px;  
    background-color: ${colors.primary};
    padding: 0 18px;
    width: 174px;
    height: 40px;
    `}
`
const StyledLogo = styled.img`
  width: 188px;
  height: 70px;
  flex-shrink: 0;
`

const StyledHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 33px;
`

const StyledNav = styled.nav`
  display: flex;
  gap: 35px;
`

function Header() {
  return (
    <StyledHeaderWrapper>
      <Link to={'/'}>
        <StyledLogo src={LogoLight} alt="logo" />
      </Link>
      <StyledNav>
        <StyledLink to={'/'}>Accueil</StyledLink>
        <StyledLink to={'/profiles'}>Profiles</StyledLink>
        <StyledLink to={'/survey/1'} $isFullLink>
          Faire le test
        </StyledLink>
      </StyledNav>
    </StyledHeaderWrapper>
  )
}

export default Header
