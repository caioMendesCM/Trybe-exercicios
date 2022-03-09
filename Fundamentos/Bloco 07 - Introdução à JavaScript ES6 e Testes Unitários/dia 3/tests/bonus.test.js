const searchEmployee = require('./bonus');

describe('searchEmployee testSuite',() => {
  it('testa se a função retorna um detalhe de um determinado funcionario',() => {
    expect(searchEmployee('4678-2','firstName')).toMatch('Paul')
    expect(searchEmployee('4678-2','specialities')).toEqual(['Backend']);
  });

  it('deve retornar erro correspondente a id inexistente', () => {
    expect(() => {searchEmployee('b', 'firstName')}).toThrow();
    expect(() => {searchEmployee('b', 'firstName')}).toThrowError('ID não identificada');
  });
  
  it('deve retornar erro correspondente a informação inexistente', () => {
    expect(() => {searchEmployee('4678-2', 'a')}).toThrow();
    expect(() => {searchEmployee('4678-2', 'a')}).toThrowError('Informação indisponível');
  });
});