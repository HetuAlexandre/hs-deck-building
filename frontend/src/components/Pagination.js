import React, { useContext } from "react";
import { CardsContext } from "../Provider/CardsContext";

const Pagination = () => {
  const { cards, cardsStatus, pageCount, setCurrentPage } = useContext(
    CardsContext
  );
  const handlePageClick = ({ selected }) => {
    // window.scrollTo(0, 0);
    setCurrentPage(selected);
    console.log(selected, "selected");
  };
  return (
    <div>
      <ul>
        {pageCount.map((number) => (
          <li key={number}>
            <button onClick={handlePageClick}>{number}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Pagination;
