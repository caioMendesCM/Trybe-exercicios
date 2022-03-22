const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {
  const config = {
    method: 'GET',
    headers: { Accept: 'application/json' },
  };

  const { joke } = await fetch(API_URL, config)
    .then((response) => response.json())
    .then((data) => data)
    .catch((e) => console.log(`Something went wrong: ${e}`));

  document.getElementById('jokeContainer').innerText = joke;
};

window.onload = () => fetchJoke();
