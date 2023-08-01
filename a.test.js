import { describe, it, expect } from 'vitest';
import { a } from './a';

// first commit

describe('#a', () => {
  it('should return a', () => {
    expect(a()).toEqual('c');
  });
});
