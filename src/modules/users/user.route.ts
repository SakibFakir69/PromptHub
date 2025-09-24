import { Router } from "express";
import { userController } from "./user.controller.ts";


const router = Router();


router.post('/user', userController.createUser);



export const userRouter = router;