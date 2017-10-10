const expect = require('expect');

const { isRealString } = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    var name = 1;
    var res = isRealString(name);

    expect(res).toBe(false);
  });

  it('should reject string with only spaces', () => {
    var name = '';
    var res = isRealString(name);

    expect(res).toBe(false);
  });

  it('should allow string with non-space characters', () => {
    var name = 'test';
    var res = isRealString(name);

    expect(res).toBe(true);
  });
});
