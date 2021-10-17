import { model,Schema } from "mongoose";
import { User } from "../interfaces/user.interface";
import { PasswordManager } from "../services/password.service";

const UserSchema = new Schema<User>({
    email: { 
        type: String, 
        required: true 
    },
    password: { 
        type: String, 
        required: true 
    }
})
UserSchema.pre('save',async function(done){
    if(!this.isModified){
        const hashed = await PasswordManager.toHash(this.get('password'))
        this.set('password',hashed)
    }
})
const UserModel = model<User>('User',UserSchema);
export default UserModel;