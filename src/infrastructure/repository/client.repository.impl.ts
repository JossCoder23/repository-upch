import { ClientDatasource, ClientEntity, ClientRepository, CreateClientDto } from "../../domain";

export class ClientRepositoryImpl implements ClientRepository {

  constructor(
    private readonly datasource:ClientDatasource
  ){}

  create( createClientDto:CreateClientDto ):Promise<ClientEntity> {
    return this.datasource.create( createClientDto );
  }

  // getAll(): Promise<ClientEntity[]> {
  //   throw new Error("Method not implemented.");
  // }
  // findById(id: number): Promise<ClientEntity> {
  //   throw new Error("Method not implemented.");
  // }
  // deleteById(id: number): Promise<ClientEntity> {
  //   throw new Error("Method not implemented.");
  // }

}