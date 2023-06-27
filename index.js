import axios from 'axios';
import express, { json } from 'express';

const app = express();

app.use(json());

app.get('/:id', async (req, res) => {
    try { 
        const { id } = req.params;
        const { monster } = req.body;
        const response = await axios.get(`https://www.dnd5eapi.co/api/monsters/${monster}`);

        res.send({
            message: 'success',
            payload: response.data
        })
    } catch (error) {
        console.log(error);
    }
})

app.listen(3333, () => {
    console.log("Server connected");
})