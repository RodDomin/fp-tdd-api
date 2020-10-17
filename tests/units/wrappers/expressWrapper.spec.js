import { convertToExpressServer } from '../../../src/utils/expressMiddleware';
import { expressMockResponse } from '../../mocks/expressMockResponse';

describe('ExpressServerWrapper', () => {
  it('should return function that needs two arguments', () => {
    const expressMiddleware = convertToExpressServer(() => {});

    expect(typeof expressMiddleware).toBe('function');
    expect(expressMiddleware.length).toBe(2);
  });

  it('sould return express response after execute controller', async () => {
    const expressMiddleware = convertToExpressServer(() => ({ statusCode: 401, body: [] }));

    const response = await expressMiddleware({ body: [] }, expressMockResponse);

    expect(response.body).toEqual([]);
    expect(response.statusCode).toBe(401);
  });
});
