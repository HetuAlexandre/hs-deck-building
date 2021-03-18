import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
// import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import { CardsContext } from "../Provider/CardsContext";
import Pagination from "../components/Pagination";

const Cards = () => {
  const { cards, cardsStatus, pageCount, setCurrentPage } = useContext(
    CardsContext
  );

  if (cardsStatus === "loading") {
    return <div>Loading...</div>;
  } else {
    return (
      <Wrapper>
        {/* <Pagination /> */}
        {cards.map((card) => {
          if (card.artistName != null)
            return (
              <CardContainer>
                <CardDiv to={`/cardDetail/${card.id}`}>
                  <Img src={card.image}></Img>
                </CardDiv>
              </CardContainer>
            );
        })}
      </Wrapper>
    );
  }
};
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const CardContainer = styled.div``;

const CardDiv = styled(Link)`
  margin-bottom: 20px;
`;
const Img = styled.img`
  height: 300px;
  max-width: 400px;
  filter: drop-shadow(rgba(0, 0, 0, 0.6) 0px 3px 3px);
`;

export default Cards;

// const [cards, setCards] = useState(null)
// const [filteredCards, setFilteredCards] = useState(cards);
// const [status, setStatus] = useState("loading");

// useEffect(() => {
//   fetch(
//     `https://us.api.blizzard.com/hearthstone/cards?locale=en_US&access_token=${accessToken}`
//   )
//     .then((res) => {
//       setCards(res.cards);

//       //res={cards: Array(40), cardCount: 3092, pageCount: 78, page: 1}

//       console.log(res, "CARDS");

//       setStatus("idle");
//     })
//     .catch((error) => {
//       console.error("unable to retrieve card", error);
//     });
// }, []);
// useEffect(() => {
//   setCurrentPage(0);
// }, [cards]);

// const Pagination = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   font-weight: 500;
//   .pagination {
//     display: flex;
//     flex-direction: row;
//     list-style: none;
//     padding: 0;
//     li.activeLink {
//       width: 100%;
//       height: 100%;
//       font-weight: bold;
//     }
//   }
//   .pagination a {
//     padding: 6px 12px;
//     margin: 0 2px;

//     &:hover {
//       border-radius: 25px;
//       border: 2px solid blue;
//       padding: 10px;
//       /* background-color: #b3cccc; */
//       cursor: pointer;
//     }
//   }
// `;

// console.log(cards, "OBJECT OF ALL CARDS");
// console.log(cards.length, "CARDCOUNT");

// const cardsPerPage = 39;
// const offset = currentPage * cardsPerPage;
// const currentPageCards = cards.slice(offset, offset + cardsPerPage);
// const numPages = Math.ceil(cards.length / cardsPerPage);
{
  /* {pageCount > 1 ? (
          <Pagination>
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              previousLinkClassName={"previousLink"}
              nextLinkClassName={"nextLink"}
              disabledClassName={"disabledLink"}
              activeClassName={"activeLink"}
              // currentPageCards={currentPageCards}
            />
          </Pagination>
        ) : null} */
}
