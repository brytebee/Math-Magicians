import operate from '../logic/operate';

describe('Check if operators are working', () => {
  const NumOne = 6;
  const NumTwo = 2;

  // Addition test
  test('check addition', () => {
    expect(parseInt(operate(NumOne, NumTwo, '+'))).toBe(8);
  });

  //   Subtraction test
  test('check subtraction', () => {
    expect(parseInt(operate(NumOne, NumTwo, '-'))).toBe(4);
  });

  //   Division test
  test('check Division', () => {
    expect(parseInt(operate(NumOne, NumTwo, '÷'))).toBe(3);
  });

  // Multiplication test
  test('check Multiplication', () => {
    expect(parseInt(operate(NumOne, NumTwo, 'x'))).toBe(12);
  });

  // Modulus test
  test('check Modulus', () => {
    expect(parseInt(operate(NumOne, NumTwo, '%'))).toBe(0);
  });

  //Modulus test 2
  test('check modulus with numbers passed', () => {
    expect(parseInt(operate(8, 3, '%'))).toBe(2);
  });
});
