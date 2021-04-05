import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { CardsContext } from "../Provider/CardsContext";

const Cards = () => {
  const { cards, cardsStatus } = useContext(CardsContext);
  const [searchCards, setSearchCards] = useState("");
  const nonHerosCards = cards.filter((card) => card.cardTypeId !== 3);
  console.log(cards, "CARDS");
  if (cardsStatus === "loading") {
    return <div>Loading...</div>;
  } else {
    return (
      <Wrapper>
        <Search>
          <Input
            type="search"
            placeholder="Search..."
            placeholderTextColor="white"
            onChange={(event) => {
              setSearchCards(event.target.value);
            }}
          />
        </Search>
        {nonHerosCards
          .filter((card) => {
            if (searchCards == "") {
              return card;
            } else if (
              card.name.toLowerCase().includes(searchCards.toLocaleLowerCase())
            )
              return card;
          })
          .map((card, key) => {
            return (
              <Container>
                <CardContainer>
                  <CardDiv to={`/cardDetail/${card.id}`}>
                    <Img src={card.image}></Img>
                  </CardDiv>
                </CardContainer>
              </Container>
            );
          })}
      </Wrapper>
    );
  }
};
const Wrapper = styled.div`
  background-color: #fff5d0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0;
`;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0;
`;
const CardContainer = styled.div`
  display: flex;
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

const CardDiv = styled(Link)`
  margin-bottom: 20px;
`;
const Img = styled.img`
  height: 300px;
  max-width: 400px;
  filter: drop-shadow(rgba(0, 0, 0, 0.6) 0px 3px 3px);
`;

export default Cards;

//highlight blue
// &:hover {
//   box-shadow: 0 0 30px rgba(81, 203, 238, 1);
//   border: 3px solid rgba(81, 203, 238, 1);
// }

// box-shadow: 0 0 5px rgba(81, 203, 238, 1);
//   padding: 3px 0px 3px 3px;
//   margin: 5px 1px 3px 0px;
//   border: 1px solid rgba(81, 203, 238, 1);

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
