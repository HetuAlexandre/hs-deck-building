import React from "react";
import styled from "styled-components";

const Homepage = () => {
  return (
    <Wrapper>
      <DivCover>
        <ImgCover />
        <H1>WELCOME</H1>
      </DivCover>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff5d0;
`;
const DivCover = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
const ImgCover = styled.div`
  background-image: url(/images/bg_home.png);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
`;
const H1 = styled.h1`
  font-size: 100px;
  position: absolute;
  top: 230px;
  left: 35%;
  color: white;
`;
export default Homepage;
