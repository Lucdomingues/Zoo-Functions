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
  test('Verifica se ao receber o parametro `Terça` e não `Tuesday` retorna um Error!', () => {
    expect(() => getOpeningHours('Terça')).toThrowError(new Error('The day must be valid. Example: Monday'));
  });
  test('Verifica se ao receber o parametro `Tuesday` `09:00-a` retorna Error!', () => {
    expect(() => getOpeningHours('Tuesday', '9:00-a')).toThrowError(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });
  test('Verifica se ao receber o parametro `Tuesday` `c9:00-AM` retorna Error!', () => {
    expect(() => getOpeningHours('Tuesday', 'c9:00-AM')).toThrowError(new Error('The hour should represent a number'));
  });
  test('Verifica se ao receber o parametro `Tuesday` `09:c0-AM` retorna Error!', () => {
    expect(() => getOpeningHours('Tuesday', '09:c0-AM')).toThrowError(new Error('The minutes should represent a number'));
  });
  test('Verifica se ao receber o parametro `Tuesday` `13:00-PM` retorna Error!', () => {
    expect(() => getOpeningHours('Tuesday', '13:00-PM')).toThrowError(new Error('The hour must be between 0 and 12'));
  });
  test('Verifica se ao receber o parametro `Tuesday` `9:60-AM` retorna Error!', () => {
    expect(() => getOpeningHours('Tuesday', '09:60-AM')).toThrowError(new Error('The minutes must be between 0 and 59'));
  });
});
