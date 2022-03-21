// const uppercase = require('./script.js');

// it('testa uppercase', (done) => {
//   uppercase('a', (result) => {
//     try{
//       expect(result).toEqual('A');
//       done();
//     } catch (e) {
//       done(e);
//     }
//   });

//   uppercase('caio', (result) => {
//     try{
//       expect(result).toEqual('CAIO');
//       done();
//     } catch (e) {
//       done(e);
//     }
//   });
// });

// Verifique se a importação do arquivo correto está sendo feita.
// const { it, expect} = require('@jest/globals');
// const { getPokemonDetails } = require("./script.js");

// describe("A função getPokemonDetails", () => {
//   it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
//     const expectedError = new Error('Não temos esse pokemon para você :(');

//     function callback(error, result) {
//       expect(error).toEqual(expectedError);
//       done();
//     }

//     getPokemonDetails((pokemon) => pokemon.name === 'Pikachu', callback);
//   });

//   it("retorna um pokemon que existe no banco de dados", (done) => {
//     const expectedString = 'Olá, seu pokemon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember';

//     function callback(err, result) {
//       expect(result).toBe(expectedString);
//       done();
//     }

//     getPokemonDetails((pokemon) => pokemon.name === 'Charmander', callback);
//   });
// });

// beforeEach(() => console.log('1 - beforeEach'));
// afterEach(() => console.log('1 - afterEach'));

// test('', () => console.log('1 - test'));

// describe('Scoped / Nested block', () => {
//   beforeEach(() => console.log('2 - beforeEach'));
//   afterEach(() => console.log('2 - afterEach'));

//   test('', () => console.log('2 - test'));
// });