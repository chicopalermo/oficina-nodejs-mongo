import Post from "../db/models/Post.js";

export const postController = {
    createPost: async (req, res) => {
        try { 
            const { title, content, userId } = req.body;
            
            const post = await Post.create({
                title, 
                content, 
                userId
            });
    
            res.status(201).json({
                message: 'success',
                payload: post
            });
        } catch (err) {
            res.status(500).json({
                message: 'error',
                payload: err
            });
        }
    },
    findPosts: async (req, res) => {
        try {
            const posts = await Post.find();

            res.status(200).json({
                message: 'success',
                payload: posts
            });
        } catch (error) {
            res.status(500).json({
                message: 'error',
                payload: err
            });
        }
    },
    updatePost: async (req, res) => {
        try { 
            const { id } = req.params;
            const { title, content, userId } = req.body;

            await Post.findOneAndUpdate({ _id: id }, {
                title, 
                content, 
                userId
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

    deletePost: async (req, res) => {
        try { 
            const { id } = req.params;
            
            await Post.findByIdAndRemove({ _id: id });
    
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