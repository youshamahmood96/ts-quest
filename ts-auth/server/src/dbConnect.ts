import mongoose from 'mongoose';
const dbConnect = async() => {
    try{
        const uri:string = process.env.DB_URI as string;       
        const options:mongoose.ConnectOptions = {
            dbName: 'ts-auth',
            autoIndex:true
          }
        await mongoose.connect(uri,options)
        mongoose.Promise = global.Promise;
        console.log('connected');
                
    }
    catch(err){
        console.log(err);
    }
}
export default dbConnect;