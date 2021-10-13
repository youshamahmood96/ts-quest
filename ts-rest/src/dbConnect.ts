import mongoose from 'mongoose';
const dbConnect = async() => {
    const uri:string = 'mongodb://localhost:27017/ts-crud';
    try{
        await mongoose.connect(uri)
        mongoose.Promise = global.Promise;
        console.log('dbConnected');
        
    }
    catch(err){
        console.log(err);
    }
}
export default dbConnect;