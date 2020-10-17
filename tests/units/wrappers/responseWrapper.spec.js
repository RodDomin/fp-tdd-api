import { getExpressResponse } from '../../../src/utils/response';
import { expressMockResponse } from '../../mocks/expressMockResponse';

describe('ResponseWrapper', () => {
  it('should object with ', () => {

    const expressResponse = getExpressResponse({ statusCode: 200, body: [] }, expressMockResponse);

    expect(expressResponse.body).toEqual([]);
    expect(expressResponse.status).toBe(200);
  })
})