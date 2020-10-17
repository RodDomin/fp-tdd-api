import { getRequest } from '../../../src/utils/request';

describe('RequestWrapper', () => {
  it('should object with ', () => {
    const request = getRequest({
      body: { name: 'example'  },
      query: { page: 2 },
      params: { id: 2 }
    })

    expect(request.body).toEqual({ name: 'example' });
    expect(request.query).toEqual({ page: 2 });
    expect(request.params).toEqual({ id: 2 });
  })
})