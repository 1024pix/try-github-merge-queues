import { describe, it, expect } from 'vitest';
import { d } from './d';

describe('#d', () => {
  it('should return d', () => {
    expect(d()).toEqual('d');
  });
});
