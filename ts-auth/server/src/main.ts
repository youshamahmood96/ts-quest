import express from 'express';
import dbConnect from './dbConnect';

const main = async():Promise<void> => {
    const app = express();
    app.use(express.json())
    await dbConnect()
    await app.listen(process.env.PORT,()=>{
        console.log(`Listening at ${process.env.PORT}`);
    })
}
export default main