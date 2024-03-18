import { Request, Response } from 'express';

export class CLientsController {

  //* Dependency Injections * DI
  constructor() {}

  public getClients = (req:Request, res:Response) => {
    res.json('Hello world')
  }

  public createClient = (req:Request, res:Response) => {

    const { 
      names,
      surnames,
      type_document,
      document_number,
      telephone_number,
      email,
      graduation_year,
      city 
    } = req.body;

    const body = req.body;

    res.json("hello world")
  }

}