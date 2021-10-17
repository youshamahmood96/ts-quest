import {check} from 'express-validator'
class Validation{
    email(){
        return check('email')
        .isEmail()
        .withMessage('Email format invalid')
    }
    password(){
        return check('password')
        .isLength({min:6})
        .withMessage('Must be at least 6 characters long')
    }
}

const validator = new Validation()

export const userSignupValidator = [
    validator.email(),
    validator.password()
]

export const userSigninValidator = [
    validator.email(),
    validator.password()
]