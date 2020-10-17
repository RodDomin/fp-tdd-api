import { convertToExpressServer } from '../utils/expressMiddleware';
import { getUsers } from '../app/controllers/users';

export function getUserRoutes(router) {
  router.get('/users', convertToExpressServer(getUsers));

  return router;
}
