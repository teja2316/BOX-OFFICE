import React from 'react';
import { useLocation } from 'react-router';
import { NavList, LinkStyled } from './Navs.styled';

const LINKS = [
  { to: '/', text: 'Homepage' },
  { to: '/favourites', text: 'Favourites' },
];

const Nav = () => {

  const location = useLocation();

  return (
    <NavList>      
        {LINKS.map(item => (
          <li key={item.to}>
            <LinkStyled to={item.to} className={item.to ===location.pathname ? "active" : ""} >{item.text}</LinkStyled>
          </li>
        ))}      
    </NavList>
  );
};

export default Nav;
