import express from 'express';
import { Request, Response }  from "express";
const app = express();
const port = 8000; // default port to listen

// define a route handler for the default home page
app.get( "/", ( req:Request, res:Response ) => {
    res.send( "Hello world!" );
} );

// start the Express server
app.listen( port, () => {
     // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );