const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('é função', () => {
    expect(typeof getOpeningHours).toBe('function');
  });
  it('retorna os dias com os horários se o parâmetro for undefined', () => {
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
  it('retorna erro se dataHour não for number', () => {
    expect(() => { getOpeningHours('monday', 'eight'); }).toThrow('The hour should represent a number');
  });
  it('retorna erro se não for passado um dia válido', () => {
    expect(() => { getOpeningHours('one'); }).toThrow('The day must be valid. Example: Monday');
  });
  it('retorna erro se os minutos não estiverem entre 0 e 59', () => {
    expect(() => { getOpeningHours('monday', '08:61-AM'); }).toThrow('The minutes must be between 0 and 59');
  });
  it('retorna erro se as horas não estiverem entre 0 e 12', () => {
    expect(() => { getOpeningHours('monday', '15:54-AM'); }).toThrow('The hour must be between 0 and 12');
  });
  it('retorna erro se a abreviação não for AM ou PM', () => {
    expect(() => { getOpeningHours('monday', '10:54-6M'); }).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('retorna The zoo is closed quando o parâmetro for Monday', () => {
    expect(getOpeningHours('monday', '05:05-PM')).toBe('The zoo is closed');
  });
  it('retorna The zoo is open quando o parâmetro for "Sunday, 05:05-PM"', () => {
    expect(getOpeningHours('Sunday', '05:05-PM')).toBe('The zoo is open');
  });
  it('retorna The zoo is closed quando o parâmetro for "Sunday, 08:05-PM"', () => {
    expect(getOpeningHours('Sunday', '08:05-PM')).toBe('The zoo is closed');
  });
});
