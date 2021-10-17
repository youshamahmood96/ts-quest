import { Request, Response } from "express";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user.model";
import jwt from 'jsonwebtoken'
export const userSignUp = async(req:Request, res:Response) =>{
    const user:User = req.body
    try{ 
        await UserModel.create(user)
        const userJwt = jwt.sign({
            id:Date.now().toString(),
            password:req.body.password
        },process.env.JWT_SECRET)
        req.session = {
            jwt:userJwt
        }
        res.status(201).send(user)
    }
    catch(err){
        res.send(err)
    }
}