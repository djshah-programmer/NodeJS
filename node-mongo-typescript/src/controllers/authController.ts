import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { NextFunction, Request, RequestHandler, Response } from 'express'
import userModel from '../models/userModel'

export const userRegister: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
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
                res.json({message: 'User Added Successfully'})
            })
            .catch((err) => {
                res.json({
                    message: err
                })
            })
    })
}