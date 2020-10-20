import { Request, Response } from "express";

export const getUsers = (res: Response, data: any) => {
    res.status(200).send({
        metadata: {
            Status_Code: 200,
            count: data.length
        },
        Users: data
    })
};
