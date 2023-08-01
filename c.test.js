import { describe, it, expect } from 'vitest';
import { c } from './c';

describe('#c', () => {
  it('should return c', () => {
    expect(c()).toEqual('c');
  });
});
