const accessToken = process.env.REACT_APP_ACCESS_TOKEN;
export function fetchCards() {
  const url = `https://us.api.blizzard.com/hearthstone/cards?locale=en_US&access_token=${accessToken}`;
  return fetch(url).then((response) => response.json());
}
