import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { NextFunction, Request, RequestHandler, Response } from 'express'
import userModel from '../models/userModel'

export const userRegister: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
    userModel.findOne(req.body.email)
        .then(user => {
            if(user){
                res.json({
                    message: 'Email already Existed!'
                })
            }
        })
    bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
        if(err){
            res.json({
                error: err
            })
        }
        const user = new userModel({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: hashedPassword
        })
        user.save()
            .then(() => {
                res.json({data: user, message: 'User Added Successfully'})
            })
            .catch((err) => {
                res.json({
                    message: err
                })
            })
    })
}

export const userLogin: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
    const email = req.body.email
    const password = req.body.password

    userModel.findOne(email)
        .then(user => {
            if(user){
                bcrypt.compare(password, user.password, (err, success) => {
                    if(err){
                        res.json({
                            message: 'Password does not Match!'
                        })
                    }
                    if(success){
                        const token = jwt.sign({name: user.name}, 'privatekey', {expiresIn: '1h'})
                        res.json({
                            message: 'Login Successfully!',
                            token
                        })
                    }
                })
            }
        })
}