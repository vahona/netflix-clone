import React, {useState}from "react";
// import { Inner } from "../jumbotron/styles/jumbotron";
// import { useState } from "react";
import {Container, Inner, Title, Header, Body, Item} from './styles/accordion'

export default function Accordion({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  return <Body {...restProps}>{children}</Body>;
};
