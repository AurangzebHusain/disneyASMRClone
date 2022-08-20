import React from "react";
import styled from "styled-components";
const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 1rem;
`;

const Content = styled.div`
  width: 100%;
  position: relative;
  box-sizing: border-box;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 40px;
  height: 100%;
  justify-content: center;
`;

function Login() {
  return (
    <Container>
      <Content>
        <BgImage />
        <CTA>
          <CTALogoOne src="/public/images/cta-logo-one.svg" />
          <SignUp>GET ALL THERE</SignUp>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </Description>
          <CTALogoTwo src="/public/images/cta-logo-two.png" />
        </CTA>
      </Content>
    </Container>
  );
}
const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 0.9rem;
  line-height: 1.5;
  letter-spacing: 5px;
  margin: 0 1rem;
`;
const SignUp = styled.a`
  outline: none;
  font-weight: bold;
  border: none;
  width: 100%;
  padding: 1rem;
  text-align: center;
  letter-spacing: 1.5px;
  font-size: 1.1rem;
  background-color: #0063e5;
  border-radius: 5px;
  border: 1px solid transparent;
  &:hover {
    background-color: #0483ee;
  }
`;
const BgImage = styled.div`
  background-image: url("/images/login-background.jpg");
  height: 100%;
  width: 100%;
  position: absolute;
  background-size: cover;
  background-repeat: no-repeat;
  top: 0;
  left: 0;
  z-index: -1;
`;

const CTA = styled.div`
  max-width: 60%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  transition-timing-function: ease-out;
  transition: opacity 2s;
`;
const CTALogoOne = styled.img`
  cursor: pointer;
  width: 100%;
  max-width: 600px;
`;
const CTALogoTwo = styled.img`
  width: 100%;
  cursor: pointer;
  max-width: 600px;
`;
export default Login;
