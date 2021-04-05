import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { updateQuantity, removeCard } from "../store/actions";
// import { CardsContext } from "../Provider/CardsContext";

const CardInDeck = ({ card, id, quantity }) => {
  // const { cards } = useContext(CardsContext);
  const dispatch = useDispatch();

  const updateQuantityInDeck = (id, quantity) => {
    const actionUpdate = updateQuantity(id, quantity);
    dispatch(actionUpdate);
    console.log(updateQuantityInDeck, "onclick");
  };
  const removeCardInDeck = (quantity) => {
    const actionRemove = removeCard(id, quantity);
    dispatch(actionRemove);
  };

  return (
    <Wrapper>
      <Container>
        <ManaDiv>{card.manaCost}</ManaDiv>
        <CardName>{card.name}</CardName>
        <Img src={card.cropImage} />
        <GradientDiv />
        <ChangeNumber>
          <Button
            onClick={() => updateQuantityInDeck(id, quantity + 1)}
            disabled={
              quantity == 2
                ? true
                : false && (card.rarityId === 5 && quantity == 1 ? true : false)
            }
          >
            +
          </Button>
          <Button
            onClick={() => {
              updateQuantityInDeck(id, quantity - 1);
              // removeCardInDeck(quantity === 0);
            }}
          >
            -
          </Button>
          {/*onClick={() => { func1(); func2();}}>Test Link</> */}
          {/* <button onClick={() => console.log("clicking")}>+</button> */}
          <Button onClick={removeCardInDeck}>x</Button>
        </ChangeNumber>
        <Quantity>{quantity}</Quantity>
      </Container>
    </Wrapper>
  );
};
const ChangeNumber = styled.div`
  display: none;
  height: 100%;
  padding-left: 0;
  margin-left: 0;
  z-index: -2;
  position: absolute;
  top: 0;
  right: 30px;
  z-index: 3;
`;

const Button = styled.button`
  width: 50px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  color: rgb(252, 209, 68);
  -webkit-tap-highlight-color: transparent;
  font-size: 30px;
  &:disabled {
    cursor: not-allowed;
    color: #666666;
  }
`;

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 2px;
  width: 100%;
  border: 4px solid black;
  &:hover {
    border: 4px solid rgb(252, 209, 68);
    ${ChangeNumber} {
      display: flex;
    }
  }
`;
const ManaDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #1f64e5;
  font-size: 25px;
  width: 30px;
  height: 100%;
`;

const Container = styled.div`
  text-align: left;
  width: 350px;
  max-width: 100%;
  height: 45px;
  /* z-index: -2; */
  background-color: rgba(41, 46, 60);
  position: relative;
`;
const CardName = styled.div`
  display: flex;
  align-items: center;
  color: white;
  font-size: 23px;
  font-weight: bold;
  width: 100%;
  height: 100%;
  padding-left: 15px;
  position: absolute;
  top: 0;
  left: 20px;
  z-index: 1;
  -webkit-text-stroke: 0.6px black;
`;
const GradientDiv = styled.div`
  background: linear-gradient(to right, rgba(41, 46, 60), transparent);
  position: absolute;
  /* z-index: -1; */
  top: 0px;
  right: 30px;
  width: 150px;
  height: 100%;
`;
const Img = styled.img`
  display: flex;
  width: 150px;
  height: 100%;
  padding-left: 0;
  margin-left: 0;
  /* z-index: -2; */
  position: absolute;
  top: 0;
  right: 30px;
  background-position: center center;
  background-size: cover;
`;

const Quantity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(41, 46, 60);
  color: rgb(252, 209, 68);
  font-size: 25px;
  padding-top: 8px;
  width: 30px;
  position: absolute;
  top: 0;
  right: 0;
  /* z-index: -3; */
`;
export default CardInDeck;
