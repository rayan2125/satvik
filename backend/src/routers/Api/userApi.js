import express, { Router } from "express"
import { createUser, deleteUser, updateUser, viewUser } from "../../controllers/userControllers.js"

const userRouter = express(Router)

userRouter.post("/create", createUser)
userRouter.get("/view", viewUser)
userRouter.delete("/:id", deleteUser)
userRouter.put("/:id", updateUser)



export default userRouter