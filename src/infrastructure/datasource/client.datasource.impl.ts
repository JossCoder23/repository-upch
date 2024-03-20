import { prisma } from '../../data/postgres';
import { DateTime } from 'luxon';
import { CreateClientDto, ClientEntity, ClientDatasource } from '../../domain';

export class ClientDatasourceImpl implements ClientDatasource {

  async create(createClientDto: CreateClientDto): Promise<ClientEntity> {
    let fecha = DateTime.now();
    let date = `${fecha.year}/${fecha.month}/${fecha.day}T${fecha.hour}:${fecha.minute}:${fecha.second}`;
    const client = await prisma.repository.create({
      data: { ...createClientDto!, completedAt: date }
    });

    return ClientEntity.fromObject( client );
  }

  // getAll(): Promise<ClientEntity[]> {
  //   throw new Error('Method not implemented.');
  // }

  // findById(id: number): Promise<ClientEntity> {
  //   throw new Error('Method not implemented.');
  // }

  async deleteAll():Promise<any> {
    await prisma.repository.deleteMany();
    return "Se elimino con exito"
  }

}