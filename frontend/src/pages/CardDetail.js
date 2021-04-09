import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import parse from "html-react-parser";
import {
  types,
  minionTypes,
  rarities,
  sets,
  classes,
  keywords,
  spellSchools,
} from "../components/cardsItems.json";
// import { CardsContext } from "../Provider/CardsContext";

const accessToken = process.env.REACT_APP_ACCESS_TOKEN;

const CardDetail = () => {
  // const { metaCards } = useContext(CardsContext);
  const currentId = useParams().id;
  const [card, setCard] = useState(null);
  const history = useHistory();

  useEffect(() => {
    fetch(
      `https://us.api.blizzard.com/hearthstone/cards/${currentId}?locale=en_US&access_token=${accessToken}`
    )
      .then((res) => res.json())
      .then((res) => {
        setCard(res);
        console.log(res, "response");
      })
      .catch((error) => {
        console.error("unable to retrieve card", error);
      });
  }, [currentId]);

  if (!card) {
    return <p>Loading...</p>;
  }
  console.log(card.keywordsIds, "keywords");
  return (
    <Wrapper>
      <ExitContainer onClick={() => history.push("/cards")}>
        <ExitButton to={"/cards"}>x</ExitButton>
        <Container onClick={(event) => event.stopPropagation()}>
          <Img src={card.image}></Img>
          <CardInfo>
            <CardName>{card.name}</CardName>
            <FlavorText>{card.flavorText}</FlavorText>
            <CardText>{parse(card.text)}</CardText>
            <TextUl>
              <TextLi>
                Type: <span>{types[card.cardTypeId]}</span>
              </TextLi>
              {card.minionTypeId !== undefined && (
                <TextLi>
                  Minion Type: <span>{minionTypes[card.minionTypeId]}</span>
                </TextLi>
              )}
              {/* { count && <h1>Messages: {count}</h1>} */}
              {card.spellSchoolId && (
                <TextLi>
                  Spell School: <span>{spellSchools[card.spellSchoolId]} </span>
                </TextLi>
              )}
              <TextLi>
                Rarity: <span> {rarities[card.rarityId]}</span>
              </TextLi>
              <TextLi>
                Set: <span>{sets[card.cardSetId]}</span>
              </TextLi>
              <TextLi>
                Class: <span>{classes[card.classId].name}</span>
              </TextLi>
              <TextLi>
                Artist: <span>{card.artistName}</span>
              </TextLi>
            </TextUl>
            <span>{keywords[card.keywordsIds]}</span>
          </CardInfo>
        </Container>
      </ExitContainer>
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
const ExitContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const ExitButton = styled(Link)`
  font-size: 60px;
  color: #fcd144;
  text-decoration: none;
  position: fixed;
  top: 50px;
  right: 45px;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Img = styled.img`
  height: 500px;
  max-width: 600px;
  margin-right: 50px;
`;
const CardInfo = styled.div`
  text-align: left;
  height: 440px;
  width: 500px;
  color: white;
`;
const CardName = styled.h1`
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: 700;
  margin-bottom: 0px;
`;
const CardText = styled.p`
  font-size: 25px;
`;
const FlavorText = styled.p`
  font-size: 25px;
  opacity: 0.5;
  font-style: italic;
  margin: 5px 0;
`;
const TextUl = styled.ul`
  color: #ffe5ac;
  padding: 15px;
  font-size: 20px;
`;
const TextLi = styled.li`
  color: #ffe5ac;
  margin-bottom: 5px;
  span {
    color: white;
  }
`;

export default CardDetail;
