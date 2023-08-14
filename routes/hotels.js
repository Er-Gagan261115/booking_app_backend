import express from "express";
// import Hotel from "../models/Hotel.js";
import {createError} from "../utils/error.js"
import {verifyAdmin} from "../utils/verifyToken.js"
import { createHotel,updateHotel,deleteHotel,getAllHotel, getHotel, countByCity } from "../controllers/hotel.js";
const router = express.Router();
//CREATE HOTEL
router.post("/",verifyAdmin, createHotel)
//UPDATE
router.put("/:id",verifyAdmin,updateHotel )
//DELETE
router.delete("/:id",deleteHotel )
//GET one hotel
router.get("/find/:id",getHotel)
//GET ALL
router.get("/",getAllHotel)
router.get("/countByCity",countByCity)
router.get("/countByType",getAllHotel)
export default router