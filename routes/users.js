import express from "express";
import { getUser,  getAllUser, updateUser, deleteUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();
// router.get("/checkauthentication", verifyToken, (req, res, next)=>{
//     res.send("hello you are logged in")
// })

// router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
//  res.send("hello user, you are logged in and you can delete your account")
// })

// router.get("/checkadmin/:id", verifyUser, (req,res,next)=>{
//  res.send("hello admin you are verified and you can delete all account")
// })
//get all user
router.get("/", verifyAdmin,getUser)
//get single user
router.get("/:id", verifyUser,getAllUser)
//delete user
router.delete("/:id", verifyUser,deleteUser)
//update user
router.put("/:id", verifyUser,updateUser)

export default router