import React from "react";
import JumbontronContainer from "../containers/jumbotron";
import FooterContainer from '../containers/footer'
import FaqsContainer from '../containers/faqs'
import HeaderContainer from '../containers/header'
import { Feature, OptForm } from "../components";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited films, TV program and more</Feature.Title>
          <Feature.SubTitle>Watch anywhere, cancel anytime</Feature.SubTitle>
          <OptForm>
            <OptForm.Input placeholder="Email Address" />
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Text>
              ready to watch Enter your email to create or re
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbontronContainer></JumbontronContainer>
      <FaqsContainer></FaqsContainer>
      <FooterContainer></FooterContainer>
    </>
  );
}
