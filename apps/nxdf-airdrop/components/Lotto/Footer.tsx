import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll'
import LayoutProps from '../interface'

const FooterDiv=styled.div<{isMobile: boolean}>`
  width:${({isMobile}) => isMobile ? "auto" : "100vw"};
  height:45vh;
  background-color:#453C70;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;

`
const Title=styled.h1`
  font-size:2em;
  font-weight:bold;
  font-family:'neon';
  color:rgb(220, 52, 141);
  color: var(--color-override,rgb(244,134,193));
  text-shadow: 0 0 10px rgb(220, 52, 141), 0 0 10px #e6469b;
  margin-bottom:10px;
`
const Text=styled.p`
  font-size:1.5em;
  margin-top:15px;
  font-weight:700;
  color:white;
`
const LinkDiv=styled.div`

`
const Button=styled.button`
  border-radius:8px;
  width:200px;
  height:40px;
  margin:20px 0;
  font-size:1.2em;
  font-weight:bold;
  background-image: linear-gradient(45deg,pink,rgb(220,52,141));
  border:none;
  color:#1E293B;
`
function Footer({isMobile}:LayoutProps) {
  return (
    <FooterDiv isMobile={isMobile}>
      <Title>Feeling Lucky?</Title>
      <Text>BUY YOUR NXDF LOTTO TICKET NOW!</Text>
      <Link to="Main" spy={true} smooth={true} offset={-80}>
        <Button>Buy Tickets →</Button>
      </Link>
      <LinkDiv>
        <a href="https://discord.gg/5yPGKdgzTD" target="_blank" rel="noreferrer">
        <img style={{width:'50px'}} className="social" src="/img/discord.svg" alt="discord" /></a>
        <a href="https://twitter.com/NXDF16" target="_blank" rel="noreferrer">
        <img style={{width:'50px',marginLeft:'20px'}} className="social" src="/img/icon-twitter@3x.png" alt="twitter" /></a>
      </LinkDiv>
    </FooterDiv>
  );
}

export default Footer;
