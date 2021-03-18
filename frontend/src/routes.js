import React from "react";

import { Switch, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import News from "./pages/News";
import Cards from "./pages/Cards";
import CardDetail from "./pages/CardDetail";
import DeckBuilders from "./pages/DeckBuilders";
import Decks from "./pages/Decks";
import Profile from "./pages/Profile";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route exact path="/news">
        <News />
      </Route>
      <Route exact path="/cards">
        <Cards />
      </Route>
      <Route exact path="/cardDetail/:id">
        <CardDetail />
      </Route>
      <Route exact path="/deckbuilders">
        <DeckBuilders />
      </Route>
      <Route exact path="/decks">
        <Decks />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
    </Switch>
  );
};

export default Routes;
