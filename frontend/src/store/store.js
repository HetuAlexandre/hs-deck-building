import { createStore } from "redux";
import reducer from "./reducers/auth-reducer";
import cardReducer from "./reducers/cardReducer";

export default function configureStore(initialState) {
  const store = createStore(
    reducer,
    cardReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
}
