import { Router } from 'express';
import { ClientsController } from './controller';
import { ClientDatasourceImpl } from '../../infrastructure/datasource/client.datasource.impl';
import { ClientRepositoryImpl } from '../../infrastructure/repository/client.repository.impl';

export class ClientRoutes {

  static get routes():Router {

    const router = Router();
    const datasource = new ClientDatasourceImpl();
    const clientRepository = new ClientRepositoryImpl( datasource );
    const clientController = new ClientsController( clientRepository );
    
    router.post('/', clientController.createClient);
    // router.get('/', clientController.getClients);
    // router.get('/:id', clientController.getClientsById);

    return router;

  }
  
}