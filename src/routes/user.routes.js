import { Router } from 'express';
import { convertToServer } from '../utils/expressMiddleware';
import { getUsers } from '../app/controllers/users';

export function getUserRoutes(router) {
  router.get('/users', convertToServer(getUsers));

  return router;
}
