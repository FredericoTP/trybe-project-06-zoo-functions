const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('é função', () => {
    expect(typeof handlerElephants).toBe('function');
  });
  it('retorna undefined se parâmetro é undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('retorna "Parâmetro inválido, é necessário uma string" se o parâmetro não for uma string', () => {
    expect(handlerElephants(2)).toEqual('Parâmetro inválido, é necessário uma string');
  });
  it('retorna o resultado esperado se parâmetro for id', () => {
    expect(handlerElephants('id')).toBe('bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5');
  });
  it('retorna 4 se o parâmetro for "count"', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('retorna o resultado esperado se o parâmetro for "names"', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('retorna 10.5 se o parâmetro for "averageAge"', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('retorna null se o parâmetro for "avera"', () => {
    expect(handlerElephants('avera')).toBeNull();
  });
});
