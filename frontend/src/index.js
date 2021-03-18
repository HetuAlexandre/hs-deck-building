import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/store.js";
import { CardsProvider } from "./Provider/CardsContext";
import App from "./App";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CardsProvider>
        <App />
      </CardsProvider>
    </Provider>
  </React.StrictMode>,

  document.getElementById("root")
);
