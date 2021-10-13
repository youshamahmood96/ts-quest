import express from 'express';
import dbConnect from './dbConnect';
import { Request, Response }  from "express";
const port = 8000;
const init = async():Promise<void> => {
    const app = express();
    console.log(`Listening to port : ${port}`);
    app.use('/', (req:Request, res:Response) => {
        res.send(`${req.method} at \n` + new Date());
    });
    await dbConnect()
    await app.listen(port)
}
init()