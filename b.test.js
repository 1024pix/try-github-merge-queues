import { describe, it, expect } from 'vitest';
import { b } from './b';

describe('#b', () => {
  it('should return b', () => {
    expect(b()).toEqual('b');
  });
});
