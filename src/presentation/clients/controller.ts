import { Request, Response } from 'express';

export class ClientsController {

  //* Dependency Injections * DI
  constructor() {}

  public createClient = (req:Request, res:Response) => {
    const body = req.body;
    return res.json(body);
  }
  
  public getClients = (req:Request, res:Response) => {
    res.json('GET CLIENTE');
  }

  public getClientsById = (req:Request, res:Response) => {
    res.json('GET CLIENT BY ID');
  }



}