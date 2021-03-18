import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CardInDeck from "../components/CardInDeck";
const DeckBuilders = () => {
  const storeCards = useSelector((state) => state);

  return (
    <Wrapper>
      <ContainerCards></ContainerCards>
      <ContainerDeck>
        <Header>Create a deck</Header>
        <Deck>
          {storeCards &&
            Object.values(storeCards).map((card) => {
              return (
                <CardInDeck
                  key={card.id}
                  card={card}
                  id={card.id}
                  quantity={card.quantity}
                />
              );
            })}
        </Deck>
        <Footer>Copy deck</Footer>
      </ContainerDeck>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const ContainerCards = styled.div`
  width: 100%;
  /* background-color: lightgreen; */
`;
const ContainerDeck = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* position: sticky; */
  width: 450px;
  height: 700px;
  border: 2px solid brown;
`;
const Header = styled.div`
  justify-content: center;
  height: 100px;
  padding: 10px;
`;
const Deck = styled.div`
  justify-content: center;
  align-content: center;
  padding: 10px;
  width: 400px;
  height: 100%;
  border: 2px solid brown;
`;
// const Card = styled.div`
//   height: 40px;
//   border: 2px solid blue;
//   margin-bottom: 4px;
// `;
const Footer = styled.div`
  justify-content: center;
  height: 100px;
  padding: 10px;
`;
export default DeckBuilders;
