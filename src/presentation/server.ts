import express, { Router } from 'express';
import compression from 'compression';
import cors from 'cors';

interface Options {
  port:number;
  routes:Router;
  public_path?:string;
}

export class Server {

  private app = express();
  private readonly port:number;
  private readonly publicPath:string;
  private readonly routes:Router;

  constructor( options:Options ) {
    const { port, routes, public_path = 'public' } = options;
    this.port = port;
    this.publicPath = public_path;
    this.routes = routes;
  }

  async start() {

    //* Middlewares
    this.app.use( express.json() );
    this.app.use( express.urlencoded({ extended: true }) );
    this.app.use( compression() );
    this.app.use( cors() );

    //* Routes
    this.app.use( this.routes );

    //* Port
    this.app.listen(this.port, () => { 
      console.log(`Server running on port ${ this.port }`);
    })

  }
}
