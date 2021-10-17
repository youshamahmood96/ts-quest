import express, { Request, Response } from "express";
import { userSignUp } from "../controllers/user.controller";
import runValidation from "../middlewares/runValidation";
import currentUser from "../middlewares/userMiddlewares/currentUser";
import { userSignupValidator } from "../middlewares/userMiddlewares/user.validator";

const router = express.Router();

const routing = async() => {
    await router.post('/users/signup',userSignupValidator,runValidation,userSignUp);
    await router.get('/users/current_user',currentUser,async(req:Request, res:Response) => {
        res.send({
            currentUser: req.body || {}
        })
    });
}
routing()
export default router  