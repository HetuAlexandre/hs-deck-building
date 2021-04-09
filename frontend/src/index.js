import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/store.js";
import { CardsProvider } from "./Provider/CardsContext";
import { UserProvider } from "./Provider/UserContext";

import App from "./App";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <UserProvider>
        <CardsProvider>
          <App />
        </CardsProvider>
      </UserProvider>
    </Provider>
  </React.StrictMode>,

  document.getElementById("root")
);
