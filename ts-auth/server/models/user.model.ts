import { model,Schema } from "mongoose";
import { User } from "../interfaces/user.interface";

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
const UserModel = model<User>('User',UserSchema);
export default UserModel;