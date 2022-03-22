const API_URL = 'https://api.coincap.io/v2/assets';
const cryptoListUl = document.querySelector('#cryptoList');

const fetchCrypto = async () => {
  const cryptoList = await fetch(API_URL)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((e) => console.log(`Something went wrong: ${e}`));

  return cryptoList;
};

const setList = async () => {
  const coins = await fetchCrypto();
  const top10Coins = coins
    .filter((coin) => coin.rank <= 10)
    .sort((a, b) => a.rank - b.rank);

  top10Coins.forEach((coin) => {
    const coinLi = document.createElement('li');
    coinLi.innerText = `${coin.name} (${coin.symbol}): $${parseFloat(coin.priceUsd).toFixed(2)}`;
    cryptoListUl.appendChild(coinLi);
  });
};

window.onload = () => {
  fetchCrypto();
  setList();
};
