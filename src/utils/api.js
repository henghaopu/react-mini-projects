const URL = 'https://deckofcardsapi.com';
export const SHUFFLED_DECK_URI = `${URL}/api/deck/new/shuffle/?deck_count=1`;

export async function fetchAsync(endpoint) {
  // await response of fetch call
  const response = await fetch(endpoint);
  // only proceed once promise is resolved
  const data = await response.json();
  // only proceed once second promise is resolved
  return data;
}

export function getDrawACardURI(deckId) {
  return `${URL}/api/deck/${deckId}/draw/?count=1`;
}
