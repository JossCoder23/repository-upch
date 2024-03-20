import { CreateClientDto } from "../../dtos";
import { ClientEntity } from "../../entities/client.entity";
import { ClientRepository } from "../../repositories/client.repository";

export interface CreateClientUseCase {
  execute( dto:CreateClientDto ):Promise<ClientEntity>
}

export class CreateClient implements CreateClientUseCase {

  constructor(
    private readonly repository:ClientRepository
  ){}

  execute( dto:CreateClientDto ):Promise<ClientEntity> {
    return this.repository.create( dto );
  }

}