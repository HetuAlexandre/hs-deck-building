import React from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { updateQuantity, removeCard } from "../store/actions";

const CardInDeck = ({ card, id, quantity }) => {
  const dispatch = useDispatch();

  const updateQuantityInDeck = (id, quantity) => {
    const actionUpdate = updateQuantity(id, quantity);
    dispatch(actionUpdate);
  };
  const removeCardInDeck = (card, id) => {
    const actionRemove = removeCard(id, card);
    dispatch(actionRemove);
  };
  return (
    <Wrapper>
      <Container>
        <Img src={card.cropImage}></Img>
        <QuantityButton onClick={() => updateQuantityInDeck(id, quantity - 1)}>
          -
        </QuantityButton>
        <QuantityButton onClick={() => updateQuantityInDeck(id, quantity + 1)}>
          +
        </QuantityButton>
        <DeleteButton onClick={() => removeCardInDeck(id, card)}>
          x
        </DeleteButton>
        <Quantity
          value={quantity}
          onChange={(ev) => updateQuantityInDeck(id, parseInt(ev.target.value))}
        ></Quantity>
      </Container>
    </Wrapper>
  );
};
const Wrapper = styled.div``;
const Container = styled.div``;
const Img = styled.img``;
const QuantityButton = styled.button``;
const DeleteButton = styled.button``;
const Quantity = styled.div``;
export default CardInDeck;
