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
});
