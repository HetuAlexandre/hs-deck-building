import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { CardsContext } from "../Provider/CardsContext";
import { classes } from "../components/cardsItems.json";

const SelectClasses = () => {
  const { cardsStatus } = useContext(CardsContext);
  const classIds = Object.keys(classes);

  if (cardsStatus === "loading") {
    return <div>Loading...</div>;
  } else {
    return (
      <Wrapper>
        <DivCover>
          <ImgCover />
          <Title>Select a class</Title>
        </DivCover>
        <Container>
          {classIds.map((classId) => {
            return (
              <ClassDiv to={`/deckbuilders/${classId}`}>
                <Img src={classes[classId].classImg} />
                <ClassOfDeck>{classes[classId].name}</ClassOfDeck>
                <FrameImg />
              </ClassDiv>
            );
          })}
        </Container>
      </Wrapper>
    );
  }
};
const Wrapper = styled.div`
  width: 100%;
  background-image: url(/images/bg_class_selector.png);
`;
const DivCover = styled.div`
  height: 400px;
  position: relative;
`;
const ImgCover = styled.div`
  background-image: url(/images/top_selectclasses.png);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 350px;
  /* object-fit: contain; */
`;

const Title = styled.h2`
  font-size: 38px;
  color: white;
  position: absolute;
  top: 230px;
  left: 42%;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: 100%;
  padding: 20px;
`;

const FrameImg = styled.div`
  display: none;
  background-image: url(/images/frame_class_portrait_hover.png);
  background-repeat: no-repeat;
  position: relative;
  top: 0;
  left: 0;
  width: 254px;
`;
const ClassDiv = styled(Link)`
  display: flex;
  justify-content: center;
  width: 254px;
  height: 225px;
  margin: 10px;
  position: relative;
  text-decoration: none;
  &:hover {
    ${FrameImg} {
      display: flex;
    }
  }
`;

const Img = styled.img`
  top: 0;
  left: 0;
  width: 254px;
  /* height: 100%; */
  position: absolute;
`;
const ClassOfDeck = styled.p`
  color: rgb(252, 209, 68);

  /* margin: 0 0 10px 0; */
  font-size: 20px;
  font-weight: bold;
  -webkit-text-stroke: 0.6px black;
  position: absolute;
  top: 130px;
  left: 85px;
`;
export default SelectClasses;
