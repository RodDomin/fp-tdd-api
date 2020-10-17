import { convertToExpressServer } from '../../../src/utils/expressMiddleware.js';

describe('ExpressServerWrapper', () => {
  it('should return function that needs two arguments', () => {
    const expressMiddleware = convertToExpressServer((request) => {});

    expect(typeof expressMiddleware).toBe('function');
    expect(expressMiddleware.length).toBe(2)
  })
})