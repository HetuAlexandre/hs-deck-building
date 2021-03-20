import React from "react";
import styled from "styled-components";

const Filter = () => {
  return (
    <Wrapper>
      <h1>Hearthstone Filter</h1>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  background-color: gray;
  overflow: hidden;

  /* img {
    width: 100%;
    height: 200px;
    
  } */
`;
export default Filter;
