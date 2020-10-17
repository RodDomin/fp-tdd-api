export function getExpressResponse(response, expressRes) {
  return expressRes
    .status(response.statusCode)
    .json(response.body);
}
