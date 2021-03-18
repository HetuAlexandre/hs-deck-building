import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { CardsContext } from "../Provider/CardsContext";

const accessToken = process.env.REACT_APP_ACCESS_TOKEN;

const CardDetail = () => {
  // const { cards } = useContext=(CardsContext)
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

  if (!card) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Single card detail</h1>
      <Div>
        <Img src={card.image}></Img>
      </Div>
    </div>
  );
  // }
};
const Div = styled.div``;
const Img = styled.img`
  height: 300px;
  max-width: 400px;
`;

export default CardDetail;
