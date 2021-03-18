import React, { createContext, useEffect, useState } from "react";

const accessToken = process.env.REACT_APP_ACCESS_TOKEN;

export const CardsContext = createContext(null);

export const CardsProvider = ({ children }) => {
  const [cards, setCards] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsStatus, setCardsStatus] = useState("loading");

  useEffect(() => {
    setCardsStatus("loading");
    fetch(
      `https://us.api.blizzard.com/hearthstone/cards?locale=en_US&access_token=${accessToken}}`
    )
      .then((res) => res.json())
      .then((res) => {
        setCards(Object.values(res.cards));
        // setPageCount(res.pageCount);
        setCardsStatus("idle");
      })
      .catch((error) => {
        console.error("Unable to retrieve cards", error);
        setCardsStatus("error");
      });
  }, []);

  return (
    <CardsContext.Provider
      value={{
        cards,
        cardsStatus,
        pageCount,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </CardsContext.Provider>
  );
};
