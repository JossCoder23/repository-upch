import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { ClientRepository, CreateClient, CreateClientDto, DeleteAll } from '../../domain';

export class ClientsController {

  //* Dependency Injections * DI
  constructor(
    private readonly clientRepository:ClientRepository
  ) {}

  public createClient = (req:Request, res:Response) => {
    
    // const createClientDto = CreateClientDto.create( req.body )
    const [ error, createClientDto ] = CreateClientDto.create( req.body );
    if( error ) return res.status(400).json({ error })
    new CreateClient( this.clientRepository )
      .execute( createClientDto! )
      .then( client => res.json( client ) )
      .catch( error => res.status(400).json({error}) )

    // const client = await this.clientRepository.create( createClientDto! );
    // res.json( client );

  }

  // public getClients = (req:Request, res:Response) => {
  //   res.json("GET clients")
  // }

  // public getClientsById = (req:Request, res:Response) => {
  //   res.json("GET client by Id")
  // }

  public deleteClients = ( req:Request, res:Response ) => {
    new DeleteAll( this.clientRepository )
      .execute()
      .then( response => res.json( response ) )
      .catch( error => res.status(400).json({error}) )
  }

}