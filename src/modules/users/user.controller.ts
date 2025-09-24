

// create user

import { Request, Response } from "express";
import { userServices } from "./user.services.ts";


interface Error {
    status:number,
    message:string,
    error:string
}

const createUser = async (req:Request, res:Response)=>{

    try {


        // use zod for correction test 
        // and check correct input or invalid data 

        const result = await userServices.createUser(req.body);

        return res.status(201).json({
            status:true,
            message:"User Created Successfully",
            data:result
        })



        
    } catch (error:Error) {
        
        

        return res.status(500).json({
            status:false,
            message:`error is  ${error.name}`,
            error:error.stack , ////  where the error happen
        })
    }



}


export const userController = {
    createUser
}