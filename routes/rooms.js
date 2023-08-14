import express from "express";
// import Hotel from "../models/Hotel.js";
import {createError} from "../utils/error.js"
import {verifyAdmin} from "../utils/verifyToken.js"
import { createRoom, deleteRoom, getAllRooms, getRoom, updateRoom } from "../controllers/room.js";
const router = express.Router();
//CREATE HOTEL
router.post("/:hotelid",verifyAdmin, createRoom)
//UPDATE
router.put("/:id",verifyAdmin,updateRoom )
//DELETE
router.delete("/:id/:hotelid",verifyAdmin, deleteRoom )
//GET one hotel
router.get("/:id",getRoom)
//GET ALL
router.get("/",getAllRooms)
export default router