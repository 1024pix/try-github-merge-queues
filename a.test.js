import { describe, it, expect } from 'vitest';
import { a } from './a';

describe('#a', () => {
  it('should return e', () => {
    expect(a()).toEqual('e');
  });
});
