import { Router } from 'express';
import { ClientRoutes } from './clients/routes';

export class AppRoutes {

  static get routes():Router {

    const router = Router();

    router.use('/api/records', ClientRoutes.routes);

    return router;

  }

}