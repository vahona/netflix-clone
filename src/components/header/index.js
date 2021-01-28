import React from 'react'

import { Link as ReachRouterLink} from 'react-router-dom'
// import { Container } from '../accordion/styles/accordion';
import {Background, Container, Logo, ButtonLink} from './styles/header'


export default function Header({bg = true, children, ...restProps}) {
    return bg ? <Background {...restProps}>{children}</Background> : children;

}

Header.Fram = function HeaderFram({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};


Header.Logo = function HeaderLogo({to, ...restProps}) {
    return (
      <ReachRouterLink to={to}>
        <Logo {...restProps}/>
      </ReachRouterLink>
    );
}

//Create a new element called logo