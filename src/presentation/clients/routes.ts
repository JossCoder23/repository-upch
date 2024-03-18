import { Router } from 'express';
import { CLientsController } from './controller';

export class ClientRoutes {

  static get routes():Router {

    const router = Router();
    const clientController = new CLientsController();

    // router.get('/', clientController.getClients);
    // router.get('/:id', clientController.getClientsById);
    router.post('/', clientController.createClient);

    return router;

  }
  
}