import React from "react";
import styled from "styled-components";

const PremadeDecks = () => {
  return (
    <Wrapper>
      <Container>
        <Table>
          <Slot>
            <SpanTable>Deck Name</SpanTable>
          </Slot>
          <Slot>
            <SpanTable>Class</SpanTable>
          </Slot>
          <Slot>
            <SpanTable>View</SpanTable>
          </Slot>
          <Slot>
            <SpanTable>User</SpanTable>
          </Slot>
          <Slot>
            <SpanTable>Date</SpanTable>
          </Slot>
        </Table>
        <InsertDeck>
          <Slot>
            <Span>Dh Aggro</Span>
          </Slot>
          <Slot>
            <Span>Demon Hunter</Span>
          </Slot>
          <Slot>
            <Span>42</Span>
          </Slot>
          <Slot>
            <Span>Tiff</Span>
          </Slot>
          <Slot>
            <Span>01-04-2021</Span>
          </Slot>
        </InsertDeck>
        <InsertDeck>
          <Slot>
            <Span>Control Warrior</Span>
          </Slot>
          <Slot>
            <Span>Warrior</Span>
          </Slot>
          <Slot>
            <Span>64</Span>
          </Slot>
          <Slot>
            <Span>Kevin</Span>
          </Slot>
          <Slot>
            <Span>01-04-2021</Span>
          </Slot>
        </InsertDeck>
        <InsertDeck>
          <Slot>
            <Span>Face Hunter</Span>
          </Slot>
          <Slot>
            <Span>Hunter</Span>
          </Slot>
          <Slot>
            <Span>67</Span>
          </Slot>
          <Slot>
            <Span>Diana</Span>
          </Slot>
          <Slot>
            <Span>01-04-2021</Span>
          </Slot>
        </InsertDeck>
        <InsertDeck>
          <Slot>
            <Span>Taunt Druid</Span>
          </Slot>
          <Slot>
            <Span>Druid</Span>
          </Slot>
          <Slot>
            <Span>87</Span>
          </Slot>
          <Slot>
            <Span>Alex</Span>
          </Slot>
          <Slot>
            <Span>01-04-2021</Span>
          </Slot>
        </InsertDeck>
        <InsertDeck>
          <Slot>
            <Span>Barrens Combo</Span>
          </Slot>
          <Slot>
            <Span>Rogue</Span>
          </Slot>
          <Slot>
            <Span>49</Span>
          </Slot>
          <Slot>
            <Span>Rich</Span>
          </Slot>
          <Slot>
            <Span>01-04-2021</Span>
          </Slot>
        </InsertDeck>
        <InsertDeck>
          <Slot>
            <Span>Secret Paly</Span>
          </Slot>
          <Slot>
            <Span>Paladin</Span>
          </Slot>
          <Slot>
            <Span>132</Span>
          </Slot>
          <Slot>
            <Span>Bryce</Span>
          </Slot>
          <Slot>
            <Span>01-04-2021</Span>
          </Slot>
        </InsertDeck>
      </Container>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  align-items: center;
  background-color: #fff5d0;
`;
const Container = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin-top: 50px;
  border: 2px solid black;
`;
const Table = styled.div`
  display: flex;
  text-align: center;
  width: 100%;
  height: 60px;
  color: white;
  background-color: rgba(21, 26, 35, 0.95);
`;

const InsertDeck = styled.div`
  display: flex;
  text-align: center;
  width: 100%;
  height: 60px;
`;
const Slot = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid black;
  padding-top: 15px;
  /* padding: 10px; */
  align-items: center;
`;
const SpanTable = styled.div`
  font-size: 18px;
  color: lightgray;
`;
const Span = styled.div`
  font-size: 18px;
`;

export default PremadeDecks;
