import User from "../models/User.js";

export const updateUser= async (req,res,next)=>{
    try {
        const updateuser = await User.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},
            {new: true}
            );
        res.status(200).json(updateuser)
    } catch (err) {
        next(err)
    }
}
export const deleteUser = async (req,res,next)=>{
    try {
        const deleteuser = await User.findByIdAndDelete(req.params.id);
        res.status(200).json(deleteuser)
    } catch (err) {
        next(err)
    } 
}
export const getAllUser = async (req,res,next)=>{
    try {
        const getalluser  = await User.find();
        res.status(200).json(getalluser)
    } catch (err) {
         next(err)
       
    }
}
export const getUser = async (req,res,next)=>{
    try {
        const getuser  = await User.findById(req.params.id);
        res.status(200).json(getuser)
    } catch (err) {
         next(err)
       
    }
}

