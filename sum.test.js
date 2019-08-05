import { sum } from './sum.js';

describe('sum', () => {
  it('cal 1+2', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
