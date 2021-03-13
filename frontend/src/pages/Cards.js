import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchCards } from "../helpers/api-helpers";

const Cards = () => {
  const [card, setCard] = useState(null);

  useEffect(() => {
    // fetch(
    //   `https://us.api.blizzard.com/hearthstone/cards?locale=en_US&access_token=US`
    // )
    //   .then((res) => res.json())
    fetchCards()
      .then((res) => {
        setCard(res.data);
        console.log(res, "CARDS");
      })
      .catch((error) => {
        console.error("unable to retrieve card", error);
      });
  }, []);
  return <div>Hearthstone Cards{card}</div>;
};

export default Cards;
