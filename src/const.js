export const API_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&sparkline=false&price_change_percentage=24h%2C7d";

const rowDataSample = {
  id: "bitcoin",
  symbol: "btc",
  name: "Bitcoin",
  image:
    "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
  current_price: 1327139,
  market_cap: 25521474681918,
  market_cap_rank: 1,
  fully_diluted_valuation: 27886254274846,
  total_volume: 1987172654783,
  circulating_supply: 19219181,
  price_change_percentage_24h_in_currency: -1.7478670822634994,
  price_change_percentage_7d_in_currency: -0.14832919797121835,
};
