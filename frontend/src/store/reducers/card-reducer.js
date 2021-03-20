const initialState = {};

export default function cardReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_CARD":
      return {
        ...state,
        [action.card.id]: {
          ...action.card,
          quantity: state[action.card.id]
            ? state[action.card.id].quantity + action.card.quantity
            : action.card.quantity,
        },
      };
    case "REMOVE_CARD": {
      const stateCopy = { ...state };
      delete stateCopy[action.id];
      return stateCopy;
    }
    case "UPDATE_CARD":
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          quantity: action.quantity,
        },
      };
    case "CLEAR_CARD":
      return { ...initialState };
    default:
      return state;
  }
}
export const getCards = (state) => state.cards;
