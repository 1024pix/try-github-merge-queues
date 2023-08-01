import { describe, it, expect } from 'vitest';
import { f } from './f';

describe('#f', () => {
  it('should return f', async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        expect(f()).toEqual('f');
        resolve();
      }, 4_000);
    });
  });
});
