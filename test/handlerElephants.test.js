const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  test('Verifica se ao receber `count` retorna a quantidade de elefantes!', () => {
    expect(handlerElephants('count')).toEqual(4);
  });
  test('Verifica se ao receber `names` retorna um array com a relação dos nomes de todos os elefantes!', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  test('Verifica se ao receber `averageAge` retorna a média de idade dos elefantes!', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });
  test('Verifica se ao receber `location` retorna a localização dos elefantes dentro do Zoológico!', () => {
    expect(handlerElephants('location')).toEqual('NW');
  });
  test('Verifica se ao receber `popularity` retorna a popularidade dos elefantes!', () => {
    expect(handlerElephants('popularity')).toEqual(5);
  });
  test('Verifica se ao receber `availability` retorna um array com a relação de dias em que é possível visitar os elefantes!', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  test('Verifica se ao receber nenhum parametro retorna null!', () => {
    expect(handlerElephants('Renegade')).toBeNull();
  });
  test('Verifica se ao receber um parametro vázio retorna undefined!', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  test('Verifica se ao receber um parametro que não seja uma string retorna uma menssagem!', () => {
    expect(handlerElephants(4)).toEqual('Parâmetro inválido, é necessário uma string');
  });
});
