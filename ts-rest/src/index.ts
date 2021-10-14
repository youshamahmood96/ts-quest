import express from 'express';
import dbConnect from './dbConnect';
import router from './router/employeeRouter';
const port = 8000;
const init = async():Promise<void> => {
    const app = express();
    app.use(express.json())
    app.use('/api',router)
    await dbConnect()
    await app.listen(port)
}
init()