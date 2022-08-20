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
          <CTALogoTwo src="/public/images/cta-logo-two.png" />
        </CTA>
      </Content>
    </Container>
  );
}

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
  width: 100%;
`;
const CTALogoTwo = styled.img`
  width: 100%;
`;
export default Login;
