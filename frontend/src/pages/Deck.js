import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { CardsContext } from "../Provider/CardsContext";
import CardInDeck from "../components/CardInDeck";
import { classes } from "../components/cardsItems.json";

const Deck = () => {
  const { classId } = useParams();
  const deckCards = useSelector((state) => state.card);
  const { cardsStatus } = useContext(CardsContext);
  const [total, setTotal] = useState();

  useEffect(() => {
    if (deckCards) {
      let sum = 0;
      Object.values(deckCards).map((card) => {
        sum += card.quantity;
      });
      setTotal(sum);
    }
  }, [deckCards]);

  if (cardsStatus === "loading") {
    return <div>Loading...</div>;
  } else {
    return (
      <ContainerDeck>
        <Header>
          <ClassOfDeck>{classes[classId].name} deck</ClassOfDeck>
          <TotalCards>{total}/30</TotalCards>
          <Img src={classes[classId].image} />
          <GradientDiv></GradientDiv>
        </Header>
        <DeckDiv>
          {deckCards &&
            Object.values(deckCards).map((card) => {
              return (
                <CardInDeck
                  key={card.id}
                  card={card}
                  id={card.id}
                  quantity={card.quantity}
                />
              );
            })}
        </DeckDiv>
        <Footer>Copy deck</Footer>
      </ContainerDeck>
    );
  }
};
const ContainerDeck = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
  height: 100%;
  border: 20px ridge #a86632;
  border-radius: 10px;
  z-index: 3;
`;
const Header = styled.div`
  color: white;
  font-size: 20px;
  font-weight: bold;
  justify-content: center;
  height: 110px;
  padding: 20px;
  border-bottom: 15px ridge #a86632;
  position: relative;
`;
const Img = styled.img`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -2;
`;
const GradientDiv = styled.div`
  background: linear-gradient(to right, rgba(41, 46, 60), transparent);
  position: absolute;
  top: 0px;
  left: 0px;
  width: 200px;
  height: 100%;
  z-index: -1;
`;
const ClassOfDeck = styled.p`
  color: white;
  height: 30px;
  margin: 0 0 10px 0;
  font-size: 30px;
  font-weight: bold;
  -webkit-text-stroke: 0.6px black;
`;
const TotalCards = styled.span`
  color: rgb(252, 209, 68);
  font-size: 30px;
  font-weight: 900;
  -webkit-text-stroke: 1px black;
`;
const DeckDiv = styled.div`
  justify-content: center;
  align-content: center;
  padding: 10px 18px 10px 10px;
  width: 350px;
  overflow: auto;
  height: 700px;
  background-color: #4b2861;
  /* &:-webkit-scrollbar-track {
    background-color: rgba(58, 40, 24, 0.7);
  } */
`;
const Footer = styled.div`
  justify-content: center;
  height: 80px;
  padding: 10px;
  border-top: 15px ridge #a86632;
  background-color: gray;
`;
export default Deck;
