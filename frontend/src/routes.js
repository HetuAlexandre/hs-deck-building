import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
// import News from "./pages/News";
import Cards from "./pages/Cards";
import CardDetail from "./pages/CardDetail";
import DeckBuilders from "./pages/DeckBuilders";
import PremadeDecks from "./pages/PremadeDecks";
import Profile from "./pages/Profile";
import SelectClasses from "./pages/SelectClasses";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      {/* <Route exact path="/news">
        <News />
      </Route> */}
      <Route exact path="/cards">
        <Cards />
      </Route>
      <Route exact path="/cardDetail/:id">
        <CardDetail />
      </Route>
      <Route exact path="/selectClasses">
        <SelectClasses />
      </Route>
      <Route exact path="/deckbuilders/:classId">
        <DeckBuilders />
      </Route>
      <Route exact path="/premadeDecks">
        <PremadeDecks />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
    </Switch>
  );
};

export default Routes;
