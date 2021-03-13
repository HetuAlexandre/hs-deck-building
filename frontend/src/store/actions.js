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
