import React, { useEffect } from "react";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";

import NavBar from "./components/NavBar";
import { useDispatch } from "react-redux";
import {
  requestAccessToken,
  receiveAccessToken,
  receiveAccessTokenError,
} from "./store/actions";
import Routes from "./routes";

const App = () => {
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
  width: 100%;
  height: 100%;
  margin: 20px;
`;
export default App;
