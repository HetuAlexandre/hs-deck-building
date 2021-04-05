import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <Wrapper>
      <NavWrapper>
        <Home to={"/"}>
          <span>HEARTHSTONE</span> DECK BUILDER
        </Home>
        <ButtonContainer>
          {/* <ButtonNav to={"/news"}>NEWS</ButtonNav> */}
          <ButtonNav to={"/cards"}>CARDS</ButtonNav>
          <ButtonNav to={"/selectClasses"}>DECK BUILDERS</ButtonNav>
          <ButtonNav to={"/premadeDecks"}>DECKS</ButtonNav>
          <ButtonNav to={"/profile"}>PROFILE</ButtonNav>
        </ButtonContainer>
      </NavWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  background-color: rgba(21, 26, 35, 0.95);
`;

const NavWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  /* margin-bottom: 20px; */
  text-decoration: none;
`;
const Home = styled(Link)`
  color: lightgray;
  width: 260px;
  margin: 10px 40px 0 20px;
  font-size: 25px;
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  span {
    color: rgba(81, 203, 238, 1);
    font-weight: bold;
    font-size: 35px;
  }
`;
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  /* justify-content: center; */
  align-items: center;
`;
const ButtonNav = styled(Link)`
  color: rgb(252, 209, 68);
  display: flex;
  justify-content: center;
  width: 160px;
  font-size: 20px;
  text-decoration: none;
  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  &:hover {
    color: rgb(255, 240, 191);
  }
`;

export default NavBar;
