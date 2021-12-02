import calculate from '../logic/calculate';

describe('Calculate function', () => {
  let obj = {};
  let buttonName = '';
  test('AC button resets to null', () => {
    obj = { total: 200, next: null, operation: '+' };
    buttonName = 'AC';

    expect(calculate(obj, buttonName)).toStrictEqual({
      total: null,
      next: null,
      operation: null,
    });
  });
});
