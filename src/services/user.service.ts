import { Request, Response } from "express";
import { Users_Model } from '../models/user.model';
import * as usersResponse  from '../responsebuilder/user.response';
// let usersResponse = require('../responsebuilder/user.response')
// import { UpdateOptions, DestroyOptions } from 'sequelize'
export class UserService {

  
    // public usersResponse: UsersResponse = new UsersResponse();
    // Sample Hello Message
    public index(req: Request, res: Response) {
        res.send({
            message: "Hello Madhu Korada"
        });
    }

    // Ger All Users
    public getUsers(_req: Request, res: Response) {
        Users_Model.findAll({})
            .then((data: any) => {
                // res.status(200).send({
                //     metadata :{
                //         Status_Code : 200,
                //         count : data.length
                //     },
                //     Users: data
                // })   
                usersResponse.getUsers(res,data);
            })
            .catch((err: Error) =>  {
                res.status(500).send({
                    metadata :{
                        Status_Code : 500,
                        count : 0,
                        Error : err,
                        Message :  "Failed to fetch User details"
                    }
                })   
            })
    }

    // Create API 
    public createUser(_req: Request, res: Response) {

        Users_Model.create({
            First_Name: _req.body.First_Name,
            Last_Name: _req.body.Last_Name,
            Email: _req.body.Email
        })
        .then(() => {
                res.status(200).send({
                    metadata: {
                        Status_Code: 200,
                        Message: "User Created Successfully"
                    }
                });
            })
        .catch((err: Error) => {
            res.status(500).send({
                metadata :{
                    Status_Code : 500,
                    count : 0,
                    Error : err,
                    Message :  "Failed to create User"
                }
            })   
        })
    }
}