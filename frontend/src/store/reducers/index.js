import { combineReducers } from "redux";
import auth from "./auth-reducer";
import card from "./card-reducer";
export default combineReducers({ auth, card });
