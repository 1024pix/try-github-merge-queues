import { describe, it, expect } from 'vitest';
import { a } from './a';

// first commit
// second commit

describe('#a', () => {
  it('should return e', () => {
    expect(a()).toEqual('e');
  });
});
