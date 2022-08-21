import React from "react";
import styled from "styled-components";
import ImageSlider from "./ImageSlider";

const Home = () => {
  return (
    <Container>
      <ImageSlider />
    </Container>
  );
};

const Container = styled.main`
  background: url("/images/home-background.png");
  width: 100vw;
  height: 100vh;
  top: 120px;
  min-height: calc(100vh-250px);
  position: relative;
  background-repeat: no-repeat;
`;
export default Home;
