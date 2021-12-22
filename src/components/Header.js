import React from 'react'
import styled from 'styled-components'

export const Header = () => {
  const Nav = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: center; 
  `

  const Link = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  color: white;
  margin: 4px;
  padding: 1rem;
  `
  const StyledImg = styled.img`
  display: flex;
  align-items: center;
  margin: 4px; 
  `
  const Logo = styled.div`
  display: flex;
  font-size: 36px;
  color: blueviolet;
  font-weight: 800px;
  `
  const Header = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  padding: 12px;
  position: relative;
  align-items: center;
   @media only screen and (max-width: 1024px){
        width: 90%;
    }
    @media only screen and (max-width: 512px){
        width: 100%;
    }
  
  `
  return (
    <Header>
    <Logo>
      {/* <div> Avni Bhatt </div> */}
    </Logo>
      <Nav>
        <Link href='#about'> <StyledImg src="https://img.icons8.com/material-outlined/24/000000/home--v2.png" alt="home"/> Home  </Link>
        <Link href='#skills'> <StyledImg src="https://img.icons8.com/ios-glyphs/24/000000/laptop.png" alt="laptop"/> About </Link>
        <Link href='#experience'> <StyledImg src="https://img.icons8.com/material-outlined/24/000000/briefcase.png" alt="briefcase"/> Experience </Link>
        <Link href='#contact'> <StyledImg src="https://img.icons8.com/material-outlined/24/000000/contact-card.png" alt="address book" /> Contact </Link>
    </Nav>
    </Header>
    )
}
