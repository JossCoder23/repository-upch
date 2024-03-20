import { CreateClientDto } from "../dtos";
import { ClientEntity } from "../entities/client.entity";

export abstract class ClientRepository {

  abstract create( createClientDto:CreateClientDto ):Promise<ClientEntity>;
  // abstract getAll():Promise<ClientEntity[]>;
  // abstract findById( id:number ):Promise<ClientEntity>;
  // abstract updateById( updateClientDto:UpdateClientDto ):Promise<ClientEntity>;
  // abstract deleteById( id:number ):Promise<ClientEntity>;

}