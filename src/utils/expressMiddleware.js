import { getRequest } from './request';
import { getExpressResponse } from './response';

export function convertToExpressServer(cb) {
  return async function(request, response) {
    const controllerResult = await cb(getRequest(request));

    return getExpressResponse(controllerResult, response);
  }
}
