import React, { SFC } from 'react'

import logo from './../../assets/images/logo.jpg'
import styled from 'styled-components'

interface Props {}

const Header: SFC<Props> = () => {
  return (
    <HeaderContainer>
      <HeaderLogo data-no-instant>
        <a href="/"><LogoImage src={logo} alt="" /></a>
      </HeaderLogo>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.header`
  background-color: #fc625a;
  align-items: stretch;
  display: flex;
  width: 100%;
  min-height: 4.7rem;
  @media (max-width: 998px) {
    justify-content: center;
  }
`

const HeaderLogo = styled.div`
  display: flex;
  padding-left: 5rem;
  align-items: center;
  justify-content: center;
  @media (max-width: 998px) {
    padding-left: 0rem
  }
`

const LogoImage = styled.img`
  width: 4rem;
  border-radius: 50%;
`
