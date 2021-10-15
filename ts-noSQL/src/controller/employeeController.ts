import { Request, Response } from "express";
import mongoose from "mongoose";

import EmployeeModel from '../model/employeeModel'
import Employee from "../types/employeeType";


export const addEmployee = async(req:Request,res:Response) => {    
    const employee:Employee = req.body
    try{
        await EmployeeModel.create(employee)
        res.send(`${employee.name} is saved`)
    }
    catch(err){
        res.send(err)
    }
}
export const getAllEmployees = async(req:Request, res:Response) =>{
    try{
        const employee = await EmployeeModel.find().exec()
        res.send(employee)
    }
    catch(err){
        res.send(err)
    }
}
export const deleteEmployee = async(req:Request, res:Response) =>{
    try{
        await EmployeeModel.deleteOne({_id: new mongoose.Types.ObjectId(req.params.id)})
        res.send(`${new mongoose.Types.ObjectId(req.params.id)} is deleted`)
    }
    catch(err){
        res.send(err)
    }
}
export const updateEmployee = async(req:Request, res:Response) =>{
    try {
        await EmployeeModel.findOneAndUpdate({_id:new mongoose.Types.ObjectId(req.params.id)},req.body,{
            new:true
        })
        res.send(`${req.body.name} is updated`)
    } catch (err) {
        res.send(err)
    }
}