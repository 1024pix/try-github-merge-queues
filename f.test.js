import { describe, it, expect } from 'vitest';
import { f } from './f';

describe('#f', () => {
  it('should return f', async () => {
    expect(f()).toEqual('f');
  });
});
