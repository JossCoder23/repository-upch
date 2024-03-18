import { Request, Response } from 'express';

export class ClientsController {

  //* Dependency Injections * DI
  constructor() {}

  public getClients = (req:Request, res:Response) => {
    res.json('GET CLIENTE');
  }

  public getClientsById = (req:Request, res:Response) => {
    res.json('GET CLIENT BY ID');
  }

  public createClient = (req:Request, res:Response) => {
    const body = req.body;
    res.json(body);
  }

}