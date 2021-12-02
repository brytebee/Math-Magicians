import calculate from '../logic/calculate';

describe('Calculate function', () => {
  let obj = {};
  let buttonName = '';

  // Test 'AC' button
  test('AC button resets to null', () => {
    obj = { total: 200, next: null, operation: '+' };
    buttonName = 'AC';
    expect(calculate(obj, buttonName)).toStrictEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  // Test '=' button
  test('"=" button returns operation', () => {
    obj = { total: 200, next: 2, operation: '+' };
    buttonName = '=';
    expect(calculate(obj, buttonName)).toStrictEqual({
      total: '202',
      next: null,
      operation: null,
    });
  });

  // Test '=' button
  test('"=" button returns operation', () => {
    obj = { total: 100, next: 150, operation: '+' };
    buttonName = '=';
    expect(calculate(obj, buttonName)).not.toBe({
      total: 150,
      next: null,
      operation: null,
    });
  });

  // Test '+/-' button
  test('"+/-" button reverses negative/positive number', () => {
    obj = { total: 100, next: null, operation: null };
    buttonName = '+/-';
    expect(calculate(obj, buttonName)).toStrictEqual({ total: '-100' });
  });

  // Test '+/-' button
  test('"+/-" button reverses negative/positive number', () => {
    obj = { total: -180, next: null, operation: null };
    buttonName = '+/-';
    expect(calculate(obj, buttonName)).toStrictEqual({ total: '180' });
  });
});
