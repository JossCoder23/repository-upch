import { prisma } from '../../data/postgres';
import { CreateClientDto, ClientEntity, ClientDatasource } from '../../domain';

export class ClientDatasourceImpl implements ClientDatasource {

  async create(createClientDto: CreateClientDto): Promise<ClientEntity> {
    const client = await prisma.repository.create({
      data: createClientDto! 
    });
    return ClientEntity.fromObject( client );
  }

  // getAll(): Promise<ClientEntity[]> {
  //   throw new Error('Method not implemented.');
  // }

  // findById(id: number): Promise<ClientEntity> {
  //   throw new Error('Method not implemented.');
  // }

  // deleteById(id: number): Promise<ClientEntity> {
  //   throw new Error('Method not implemented.');
  // }

}