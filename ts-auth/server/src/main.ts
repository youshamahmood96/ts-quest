import express from 'express';
import router from '../routes/user.route';
import dbConnect from './dbConnect';

const main = async():Promise<void> => {
    const app = express();
    app.use(express.json())
    app.use('/api',router)
    await dbConnect()
    await app.listen(process.env.PORT,()=>{
        console.log(`Listening at ${process.env.PORT}`);
    })
}
export default main