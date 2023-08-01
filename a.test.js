import { describe, it, expect } from 'vitest';
import { a } from './a';

describe('#a', () => {
  it('should return a', () => {
    expect(a()).toEqual('a');
  });
});
