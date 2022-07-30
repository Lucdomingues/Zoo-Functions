const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  test('Verifica se ao receber o parametro `Tuesday` `09:00-AM` retorna `The zoo is open`!', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  test('Verifica se ao receber o parametro `Monday` `09:00-AM` retorna `The zoo is closed`!', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toEqual('The zoo is closed');
  });
  test('Verifica se ao receber o parametro `Tuesday` `09:00-AM` retorna `The zoo is open`!', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toEqual('The zoo is open');
  });
  test('Verifica se ao receber o parametro `Wednesday` `09:00-AM` retorna `The zoo is closed`!', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toEqual('The zoo is closed');
  });
});
