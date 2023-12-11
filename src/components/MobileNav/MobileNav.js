import React from 'react';
import { MobileButtonsContainer } from './MobileNav.styled';
import { NavLogo, NavLinkStyled } from '../NavBar/NavBar.styled';
import Logo from '../../images/logo.png';

export const MobileButtons = () => {

  return (
    <>
      <NavLogo to={'/'} >
        <img src={Logo} alt="logo" />
      </NavLogo>
      <MobileButtonsContainer >
        <NavLinkStyled to={'/'} style={{ textDecoration: 'none' }}>
          Home
        </NavLinkStyled>
        <NavLinkStyled to={'/catalog'} style={{ textDecoration: 'none' }}>
          Catalog
        </NavLinkStyled>
        <NavLinkStyled to={'/favorites'} style={{ textDecoration: 'none' }}>
          Favorite
        </NavLinkStyled>
      </MobileButtonsContainer>
    </>
  );
};