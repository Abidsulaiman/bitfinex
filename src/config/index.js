export const PUBLIC_CHANNEL = "wss://api-pub.bitfinex.com/ws/2";
export const AUTH_CHANNEL = "wss://api.bitfinex.com/ws/2";

export const MESSAGE = JSON.stringify({
  event: "subscribe",
  channel: "ticker",
  symbol: "tBTCUSD",
});
