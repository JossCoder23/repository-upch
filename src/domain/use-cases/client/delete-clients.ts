import { ClientEntity } from '../../entities/client.entity';
import { ClientRepository } from '../../repositories/client.repository';


export interface DeleteAllUseCase {
  execute(): Promise<null>
}


export class DeleteAll implements DeleteAllUseCase {
  
  constructor(
    private readonly repository: ClientRepository,
  ) {}
  
  execute():Promise<null> {
    return this.repository.deleteAll();
  }

}