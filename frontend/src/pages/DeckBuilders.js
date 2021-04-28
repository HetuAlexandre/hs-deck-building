import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { CardsContext } from "../Provider/CardsContext";
import { addCard } from "../store/actions";
import Deck from "./Deck";
import { classes } from "../components/cardsItems.json";

const DeckBuilders = () => {
  const { classId } = useParams();
  const [quantityCard, setQuantityCard] = useState(1);
  const [searchCards, setSearchCards] = useState("");

  const { cards, cardsStatus } = useContext(CardsContext);
  const nonHerosCards = cards && cards.filter((card) => card.cardTypeId !== 3);
  const dispatch = useDispatch();

  const addQuantity = (quantity) => {
    setQuantityCard(quantity);
  };
  const addToDeck = (card) => {
    const actionAddToDeck = addCard({ ...card, quantity: quantityCard });
    dispatch(actionAddToDeck);
  };

  if (cardsStatus === "loading") {
    return <div>Loading...</div>;
  } else {
    return (
      <Wrapper>
        <DivCover>
          <ImgCover src={classes[classId].cover} />
        </DivCover>
        <Search>
          <Input
            type="text"
            placeholder="Search..."
            placeholderTextColor="white"
            onChange={(event) => {
              setSearchCards(event.target.value);
            }}
          />
        </Search>
        <Container>
          <CardsWrapper>
            {nonHerosCards
              .filter((card) => {
                if (searchCards === "") {
                  return card;
                } else if (
                  card.name
                    .toLowerCase()
                    .includes(searchCards.toLocaleLowerCase())
                )
                  return card;
              })
              .map((card) => {
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
                        onChange={(ev) =>
                          addQuantity(parseInt(ev.target.value))
                        }
                      ></div>
                    </CardDiv>
                  </CardContainer>
                );
              })}
          </CardsWrapper>
          <Deck />
        </Container>
      </Wrapper>
    );
  }
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: -999;
  background-color: #fff5d0;
`;
const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;
  background-color: #fff5d0;
`;
const DivCover = styled.div`
  height: 300px;
`;
const ImgCover = styled.img`
  width: 100%;
  height: 300px;
`;
const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  background-color: darkred;
  border-top: 3px solid #c92626;
  border-bottom: 3px solid #c92626;
`;
const Input = styled.input`
  width: 250px;
  height: 30px;
  font-size: 18px;
  padding-left: 30px;
  color: lightgray;
  font-weight: 900;
  border: 3px solid rgb(252, 209, 68);
  border-radius: 20px;
  background-color: darkred;
  &:hover {
    box-shadow: 0 0 30px rgb(252, 209, 68);
    border: 3px solid rgb(252, 209, 68);
  }
  &::-webkit-input-placeholder {
    color: lightgray;
    /* text-decoration: none; */
  }
`;
const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;
const CardContainer = styled.div`
  height: 300px;
  max-width: 400px;
`;

const DetailIcon = styled(Link)`
  display: none;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid black;
  text-decoration: none;
  font-weight: bold;
  z-index: 5;
  position: absolute;
  color: white;
  background-color: black;
  font-size: 35px;
`;
const CardDiv = styled(Link)`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
  &:hover {
    ${DetailIcon} {
      display: flex;
    }
  }
`;

const Img = styled.img`
  height: 300px;
  max-width: 400px;
  filter: drop-shadow(rgba(0, 0, 0, 0.6) 0px 3px 3px);
`;

export default DeckBuilders;
