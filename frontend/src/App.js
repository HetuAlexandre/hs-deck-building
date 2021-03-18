import React, { useContext, useEffect } from "react";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { CardsContext } from "./Provider/CardsContext";
import NavBar from "./components/NavBar";
import { useDispatch } from "react-redux";
import {
  requestAccessToken,
  receiveAccessToken,
  receiveAccessTokenError,
} from "./store/actions";

import Routes from "./routes";

const App = () => {
  const { cards, cardStatus } = useContext(CardsContext);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestAccessToken());
    fetch("/battle.net_access_token")
      .then((res) => res.json())
      .then((json) => {
        dispatch(receiveAccessToken(json.access_token));
      })

      .catch((err) => {
        console.log(err);
        dispatch(receiveAccessTokenError(err));
      });
  }, []);
  if (cardStatus === "loading") {
    return <p>Loading...</p>;
  }
  return (
    <BrowserRouter>
      <GlobalStyles />
      <NavBar />
      <Container>
        <Routes />
      </Container>
    </BrowserRouter>
  );
};
const Container = styled.div`
  height: 100%;
  margin: 20px;
`;
export default App;
