import User from "../db/models/User.js";
import { encrypt } from "../utils/crypt.js";

export const userController = {
    createUser: async (req, res) => {
        try { 
            const { name, email, password } = req.body;
            
            const user = await User.create({
                name,
                email,
                password: encrypt(password)
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
    }
}