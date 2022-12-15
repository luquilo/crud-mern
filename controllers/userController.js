import User from '../models/UserModel.js';

export const getUsers = async (req,res) => {
    try{
        const users = await User.find();
        res.json(users);
    }catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const getUsersById = async (req,res) => {
    try{
        const user = await User.findById(req.params.id);
        res.json(user);
    }catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const saveUser = async (req,res) => {
    const user = new User(req.body)
    try{
        const insertedUser = await user.save();
        res.status(201).json(insertedUser);
    }catch (error) {
        res.status(400).json({message: error.message})
    }
}
