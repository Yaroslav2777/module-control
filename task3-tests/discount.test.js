const calculateDiscount = require('./discount');

describe('calculateDiscount', () => {
  it('applies a 20% discount for vip customers', () => {
    expect(calculateDiscount(100, 'vip')).toBe(80);
  });

  it('applies a 5% discount for regular customers', () => {
    expect(calculateDiscount(100, 'regular')).toBe(95);
  });

  it('returns the original price for unknown customer types', () => {
    expect(calculateDiscount(100, 'guest')).toBe(100);
  });

  it('handles the boundary case price === 0 without error', () => {
    expect(calculateDiscount(0, 'regular')).toBe(0);
  });

  it('throws an error for negative price values', () => {
    expect(() => calculateDiscount(-10, 'vip')).toThrow('Invalid price');
  });
});
