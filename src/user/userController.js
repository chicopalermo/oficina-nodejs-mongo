import User from "../db/models/User.js";
import { encrypt } from "../utils/crypt.js";

export const userController = {
    createUser: async (req, res) => {
        try { 
            const { name, email, password } = req.body;
            
            const user = await User.create({
                name,
                email,
                password
            });
    
            res.status(201).json({
                message: 'success',
                payload: user
            });
        } catch (err) {
            res.status(500).json({
                message: 'error',
                payload: err
            });
        }
    },
    findUsers: async (req, res) => {
        try {
            const users = await User.find();

            res.status(200).json({
                message: 'success',
                payload: users
            });
        } catch (error) {
            res.status(500).json({
                message: 'error',
                payload: err
            });
        }
    },
    updateUser: async (req, res) => {
        try { 
            const { id } = req.params;
            const { name, email, password } = req.body;

            await User.findOneAndUpdate({ _id: id }, {
                name,
                email,
                password
            });
    
            res.status(200).json({
                message: 'success',
                payload: null
            });
        } catch (err) {
            res.status(500).json({
                message: 'error',
                payload: err
            });
        }
    },

    deleteUser: async (req, res) => {
        try { 
            const { id } = req.params;

            await User.findByIdAndRemove({ _id: id });
    
            res.status(200).json({
                message: 'success',
                payload: null
            });
        } catch (err) {
            res.status(500).json({
                message: 'error',
                payload: err
            });
        }
    },
}