import { describe, it, expect } from 'vitest';
import { e } from './e';

// mon commentaire

describe('#e', () => {
  it('should return e', async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        expect(e()).toEqual('e');
        resolve();
      }, 4_000);
    });
  });
});
