import { model, Schema } from "mongoose";
import Employee from "../types/employeeType";


const EmployeeSchema = new Schema<Employee>({
    name: { type: String, required: true },
    nickname: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true }
});
const EmployeeModel = model<Employee>('Employee',EmployeeSchema);
export default EmployeeModel;