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
          <ButtonNav to={"/news"}>NEWS</ButtonNav>
          <ButtonNav to={"/cards"}>CARDS</ButtonNav>
          <ButtonNav to={"/deckbuilders"}>DECK BUILDERS</ButtonNav>
          <ButtonNav to={"/decks"}>DECKS</ButtonNav>
          <ButtonNav to={"/profile"}>PROFILE</ButtonNav>
        </ButtonContainer>
      </NavWrapper>
      <Filter></Filter>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  height: 300px;
  border: 2px solid pink;
`;
const Filter = styled.div`
  height: 200px;
  background-color: gray;
  overflow: hidden;

  /* img {
    width: 100%;
    height: 200px;
    
  } */
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;

  border: 2px solid black;
`;
const Home = styled(Link)`
  width: 260px;
  border: 2px solid red;
  margin: 10px 40px 0 20px;
  font-size: 25px;
  text-decoration: none;
  span {
    font-weight: bold;
    font-size: 35px;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid green;
`;
const ButtonNav = styled(Link)`
  display: flex;
  justify-content: center;
  width: 200px;
  font-size: 20px;
  border: 2px solid blue;
  text-decoration: none;
`;

export default NavBar;
