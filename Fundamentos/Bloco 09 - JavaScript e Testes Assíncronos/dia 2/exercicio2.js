const CRYPTO_API_URL = 'https://api.coincap.io/v2/assets';

const cryptoListUl = document.querySelector('#cryptoList');

const fetchCrypto = async () => {
  const cryptoList = await fetch(CRYPTO_API_URL)
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

  top10Coins.forEach(async (coin) => {
    const coinLi = document.createElement('li');
    const usdValue = parseFloat(coin.priceUsd);
    const currency = await fetchCurrency('brl');
    const convertedValue = usdValue*currency;
    coinLi.innerText = `${coin.name} (${coin.symbol}): R$${convertedValue.toFixed(2)}`;
    cryptoListUl.appendChild(coinLi);
  });
};

// Bônus
const fetchCurrency = async (currency) => {
  const CURRENCY_API_URL = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/${currency}.min.json`;

  const { [currency]: value } = await fetch(CURRENCY_API_URL)
    .then((response) => response.json())
    .then((data) => data);
    
  return value;
}

window.onload = () => {
  fetchCrypto();
  setList();
};
