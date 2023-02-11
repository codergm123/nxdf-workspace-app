import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const HeaderNav = styled.nav`
  width:100%;
  min-height:5rem;
  color:white;
  display:flex;
  position:fixed;
  background-color:#0E243C;
  top:0;
  left:0;
  justify-content:space-evenly;
  align-items:center;
  z-index: 100;
  padding-top: 5px;
  margin-bottom : 50px;
`

const MenuDiv=styled.div`
  font-size:1.5rem;
  font-weight:bold;
`
const MenuSpan=styled.span`
  margin: 0 20px;
  &:hover{
    color:#F78F1E;
  }
`
const NextDraw=styled.p`
  font-size:1.4rem;
  font-weight:bold;
  color:#F78F1E;
`

const LogoIcon = styled.div`
  width: 3rem;
  height: 3rem;
  margin-right: 10px;
  margin-bottom: 3px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("/img/icon-nxdflogo.png");
`

const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const Logo=styled.h1`
  font-size:1.7rem;
  font-weight:700;
`
function Header() {
  return (
    <HeaderNav>
      <Link href="/">
        <a>
          <LogoDiv>
            <LogoIcon></LogoIcon>
            <Logo>Artistella</Logo>
          </LogoDiv>
        </a>  
      </Link>
      <MenuDiv>
        <Link href="/about" >
          <a>
          <MenuSpan>ABOUT</MenuSpan>
          </a>
        </Link>
        <Link href="/nfts" >
          <a>
            <MenuSpan>NFTS</MenuSpan>
          </a>
        </Link>
        <Link href="/" >
          <a>
            <MenuSpan>Docs</MenuSpan>
          </a>
        </Link>
      </MenuDiv>
      <NextDraw></NextDraw>
    </HeaderNav>
  );
}

export default Header;