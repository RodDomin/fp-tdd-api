export function getRequest(expressRequest) {
  return {
    body: expressRequest.body,
    query: expressRequest.query,
    params: expressRequest.params,
  }
}
