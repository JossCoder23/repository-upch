import { Router } from 'express';
import { ClientsController } from './controller';

export class ClientRoutes {

  static get routes():Router {

    const router = Router();
    const clientController = new ClientsController();
    
    router.post('/', clientController.createClient);
    router.get('/', clientController.getClients);
    router.get('/:id', clientController.getClientsById);

    return router;

  }
  
}