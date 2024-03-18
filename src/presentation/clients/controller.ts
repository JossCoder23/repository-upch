import { Request, Response } from 'express';

export class CLientsController {

  //* Dependency Injections * DI
  constructor() {}

  public getClients = (req:Request, res:Response) => {
    res.json('Hello world')
  }
  public getClientsById = (req:Request, res:Response) => {
    res.json('Hello world')
  }

  public createClient = (req:Request, res:Response) => {
    res.json("hello world");
  }

}