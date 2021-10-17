import { userPayload } from './../../interfaces/user.interface';
import jwt from 'jsonwebtoken'
import { Request, Response,NextFunction } from "express";

const currentUser = (req:Request, res:Response, next:NextFunction) => {
    if(!req.session?.jwt){
        return next()
    }
    try {
        const payload = jwt.verify(req.session.jwt,process.env.JWT_SECRET) as userPayload;
        req.user = payload
    } catch (error) {
        console.log(error)
    }
    next()
}
export default currentUser