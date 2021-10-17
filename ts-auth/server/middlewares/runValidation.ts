import { NextFunction, Request, Response } from 'express';
import {validationResult} from 'express-validator'

const runValidation = (req:Request, res:Response,next: NextFunction) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        console.log(errors);
        return res.status(422).json({errors})
    }
    next()
}
export default runValidation