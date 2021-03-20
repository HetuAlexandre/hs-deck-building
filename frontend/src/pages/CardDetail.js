import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import parse from "html-react-parser";
import cardsItems from "../components/cardsItems.json";
// import { CardsContext } from "../Provider/CardsContext";

const accessToken = process.env.REACT_APP_ACCESS_TOKEN;

const CardDetail = () => {
  // const { metaCards } = useContext(CardsContext);
  let currentId = useParams().id;
  const [card, setCard] = useState(null);

  useEffect(() => {
    fetch(
      `https://us.api.blizzard.com/hearthstone/cards/${currentId}?locale=en_US&access_token=${accessToken}`
    )
      .then((res) => res.json())
      .then((res) => {
        setCard(res);
        console.log(res, "res");
      })
      .catch((error) => {
        console.error("unable to retrieve card", error);
      });
  }, [currentId]);
  console.log(cardsItems, "cards items");
  if (!card) {
    return <p>Loading...</p>;
  }
  return (
    <Wrapper>
      <ExitButton to={"/cards"}>x</ExitButton>
      <Container>
        <Img src={card.image}></Img>
        <CardInfo>
          <h1>{card.name}</h1>
          <p>{card.flavorText}</p>
          <p>{parse(card.text)}</p>
          <TextUl>
            <TextLi>
              <span>Type:</span> {(cardsItems.types = card.cardTypeId)}
            </TextLi>
            <TextLi>
              <span>Minion Type:</span> {card.minionTypeId}
            </TextLi>
            <TextLi>
              <span>Rarity:</span> {card.rarityId}
            </TextLi>
            <TextLi>
              <span>Set:</span> {card.cardSetId}
            </TextLi>
            <TextLi>
              <span>Class:</span> {card.classId}
            </TextLi>
            <TextLi>
              <span>Artist:</span> {card.artistName}
            </TextLi>
            <TextLi>
              <span>{card.collectible}</span>
            </TextLi>
          </TextUl>
          <p>{card.keywordsIds}</p>
        </CardInfo>
      </Container>
    </Wrapper>
  );
  // }
};
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.9);
  -webkit-tap-highlight-color: transparent;
  top: 0;
  left: 0;
  position: absolute;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px;
`;
const Img = styled.img`
  height: 500px;
  max-width: 600px;
  margin-right: 50px;
`;
const CardInfo = styled.div`
  text-align: left;
  height: 440px;
  color: white;
  h1 {
    font-family: Georgia, "Times New Roman", Times, serif;
    font-weight: bold;
  }
`;
const TextUl = styled.ul`
  color: white;
  padding: 15px;
  font-size: 20px;
`;
const TextLi = styled.li`
  color: white;
  span {
    color: white;
  }
`;
const ExitButton = styled(Link)`
  font-size: 50px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fcd144;
  text-decoration: none;
  position: relative;
  top: 0px;
  /* right: -100px; */
`;

export default CardDetail;
