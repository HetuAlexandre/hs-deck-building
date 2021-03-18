//token section

export const requestAccessToken = () => ({
  type: "REQUEST_ACCESS_TOKEN",
});
export const receiveAccessToken = (token) => ({
  type: "RECEIVE_ACCESS_TOKEN",
  token,
});
export const receiveAccessTokenError = (err) => ({
  type: "RECEIVE_ACCESS_TOKEN_ERROR",
  err,
});
//card section

export const addCard = (card) => ({
  type: "ADD_CARD",
  card,
});

export const removeCard = (id, card) => ({
  type: "REMOVE_CARD",
  card,
  id,
});
export const updateQuantity = (id, quantity) => ({
  type: "UPDATE_CARD",
  id,
  quantity,
});
export const clearCard = () => ({
  type: "CLEAR_CARD",
});
