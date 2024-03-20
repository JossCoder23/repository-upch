import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { ClientRepository, CreateClientDto } from '../../domain';

export class ClientsController {

  //* Dependency Injections * DI
  constructor(
    private readonly clientRepository:ClientRepository
  ) {}

  public createClient = async(req:Request, res:Response) => {
    
    // const createClientDto = CreateClientDto.create( req.body )
    const [ error, createClientDto ] = CreateClientDto.create( req.body );
    if( error ) return res.status(400).json({ error })
    const client = await this.clientRepository.create( createClientDto! );
    res.json( client );

  }

  // public getClients = (req:Request, res:Response) => {
  //   res.json("GET clients")
  // }

  // public getClientsById = (req:Request, res:Response) => {
  //   res.json("GET client by Id")
  // }

}