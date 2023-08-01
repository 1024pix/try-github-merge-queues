import { describe, it, expect } from 'vitest';
import { e } from './e';

describe('#e', () => {
  it('should return e', () => {
    expect(e()).toEqual('e');
  });
});
