import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CardInDeck from "../components/CardInDeck";
import { CardsContext } from "../Provider/CardsContext";
import { addCard } from "../store/actions";

const DeckBuilders = () => {
  const storeCards = useSelector((state) => state.card);
  // const [card, setCard] = useState(null);
  const [quantityCard, setQuantityCard] = useState(1);
  const { cards, cardsStatus } = useContext(CardsContext);
  const dispatch = useDispatch();

  const addQuantity = (quantity) => {
    setQuantityCard(quantity);
  };
  const addToDeck = (card) => {
    const actionAddToDeck = addCard({ ...card, quantity: quantityCard });
    console.log(actionAddToDeck, "action");
    dispatch(actionAddToDeck);
  };

  if (cardsStatus === "loading") {
    return <div>Loading...</div>;
  } else {
    return (
      <Wrapper>
        <ContainerCards>
          {cards.map((card) => {
            if (card.artistName != null)
              return (
                <CardContainer>
                  <CardDiv>
                    <DetailIcon to={`/cardDetail/${card.id}`}>i</DetailIcon>
                    <Img
                      src={card.image}
                      onClick={() => {
                        if (quantityCard > 1) {
                          addQuantity(quantityCard - 1);
                        }
                        addToDeck(card);
                      }}
                    ></Img>
                    <div
                      value={quantityCard}
                      onChange={(ev) => addQuantity(parseInt(ev.target.value))}
                    ></div>
                  </CardDiv>
                </CardContainer>
              );
          })}
        </ContainerCards>
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
  }
};
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const CardContainer = styled.div``;

const CardDiv = styled(Link)`
  margin-bottom: 20px;
`;
const DetailIcon = styled(Link)`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid black;
  text-decoration: none;
  font-weight: bold;
`;

const Img = styled.img`
  height: 300px;
  max-width: 400px;
  filter: drop-shadow(rgba(0, 0, 0, 0.6) 0px 3px 3px);
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
