// 1

// const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
//   `${name} is ${value} ${measurementUnit} apart from the Sun`;

// const mars = {
//   name: "Mars",
//   distanceFromSun: {
//     value: 227900000,
//     measurementUnit: "kilometers",
//   },
// };

// const venus = {
//   name: "Venus",
//   distanceFromSun: {
//     value: 108200000,
//     measurementUnit: "kilometers",
//   },
// };

// const jupiter = {
//   name: "Jupiter",
//   distanceFromSun: {
//     value: 778500000,
//     measurementUnit: "kilometers",
//   },
// };

// console.log(planetDistanceFromSun(mars)); // A
// console.log(planetDistanceFromSun(venus)); // B
// console.log(planetDistanceFromSun(jupiter)); // C

// 2

// const planetDistanceFromSun = ({
//   name,
//   distanceFromSun: { value, measurementUnit },
// }) => `${name} is ${value} ${measurementUnit} apart from the Sun`;

// const mars = {
//   name: 'Mars',
//   distanceFromSun: {
//     value: 227900000,
//     measurementUnit: 'kilometers',
//   },
// };

// const venus = {
//   name: 'Venus',
//   distanceFromSun: {
//     value: 108200000,
//     measurementUnit: 'kilometers',
//   },
// };

// const jupiter = {
//   name: 'Jupiter',
//   distanceFromSun: {
//     value: 778500000,
//     measurementUnit: 'kilometers',
//   },
// };

// console.log(planetDistanceFromSun(mars)); // A
// setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // B
// setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); // C

// // 3

// const getPlanet = () => {
//   const mars = {
//     name: 'Mars',
//     distanceFromSun: {
//       value: 227900000,
//       measurementUnit: 'kilometers',
//     },
//   };
//   setTimeout(() => console.log('Returned planet: ', mars), 4000);
// };

// getPlanet(); // imprime Marte depois de 4 segundos

// 4

// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

// const sendMarsTemperature = () => {
// const delay = messageDelay();
// const temp = getMarsTemperature();
// const message = `Mars temperature is: ${temp} degree celsius`;
// setTimeout(() => console.log(message),delay);
// };

// sendMarsTemperature();

// 5

// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

// const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9) / 5 + 32;

// const temperatureInFahrenheit = (temperature) =>
//   console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

// const greet = (temperature) =>
//   console.log(
//     `Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`
//   );

// const sendMarsTemperature = (callback) => {
//   const delay = messageDelay();
//   const temp = getMarsTemperature();
//   const message = callback(temp);
//   setTimeout(() => console.log(message), delay);
// };

// sendMarsTemperature(temperatureInFahrenheit); // imprime "It is currently 47ºF at Mars", por exemplo
// sendMarsTemperature(greet); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo

// 6

// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const success = Math.floor(Math.random() * 10) + 1;
//   const maxTemperature = 58;
//   const result = Math.floor(Math.random() * maxTemperature);
//   if (success <= 6) return result
//   throw new Error('Robot is busy!');
// };

// const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9) / 5 + 32;

// const temperatureInFahrenheit = (temperature) =>
//   console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

// const greet = (temperature) =>
//   console.log(
//     `Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`
//   );

// const handleError = (errorReason) =>
//   console.log(`Error getting temperature: ${errorReason}`);

// const sendMarsTemperature = (callback, errorHandler) => {
//   const delay = messageDelay();
//   let message = '';
//   try {
//     const temp = getMarsTemperature();
//     setTimeout(() => callback(temp), delay);
//   } catch (e) {
//     setTimeout(() => errorHandler(e.message), delay);
//     return;
//   }
// };
// // imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
// sendMarsTemperature(temperatureInFahrenheit, handleError);

// // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
// sendMarsTemperature(greet, handleError);

// 7

// const uppercase = (str, callback) => {
//   setTimeout(() => {
//     callback(str.toUpperCase());
//   }, 500);
// };

// 8

const pokemons = [
  {
    name: 'Bulbasaur',
    type: 'Grass',
    ability: 'Razor Leaf',
  },
  {
    name: 'Charmander',
    type: 'Fire',
    ability: 'Ember',
  },
  {
    name: 'Squirtle',
    type: 'Water',
    ability: 'Water Gun',
  },
];

function getPokemonDetails(filter, callback) {
  setTimeout(() => {
    if (pokemons.find(filter) === undefined) {
      return callback(new Error('Não temos esse pokemon para você :('), null);
    }
    const pokemon = pokemons.find(filter);

    const { name, type, ability } = pokemon;

    const messageFromProfOak = `Olá, seu pokemon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;

    callback(null, messageFromProfOak);
  }, 2000);
}

module.exports = {
  getPokemonDetails,
};
// module.exports = uppercase;
