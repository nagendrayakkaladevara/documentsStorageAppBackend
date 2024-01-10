const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Responce = require('./responceModel');
const Accounts = require('./accountsModel');

const app = express();
app.use(express.json()) // meterwear app will take responce in json 


// Enable CORS for all routes
app.use(cors());

// Define a port
const PORT = 4000;

// routes 

app.get('/', (req, res) => {
    res.send('hi i am nagendra');
})


// get responce endpoint 
app.get('/responce', async (req, res) => {
    try {
        const responce = await Responce.find({});
        res.status(200).json(responce);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})


// delete responce endpoint
app.delete('/responce/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const responce = await Responce.findByIdAndDelete(id);
        if (!responce) {
            res.status(404).json({ message: `can not find this` })
        }
        res.status(200).json(responce);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// post responce endpoint
app.post('/responce', async (req, res) => {
    try {
        const responce = await Responce.create(req.body)
        res.status(200).json(responce);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
})

// doc put endpoint
app.put('/responce/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const responce = await Responce.findByIdAndUpdate(id, req.body, { new: true });

        if (!responce) {
            return res.status(404).json({ message: `Cannot find the item with ID ${id}` });
        }

        res.status(200).json(responce);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});



// ----------accounts end points-------------

// get accounts endpoint 
app.get('/accounts', async (req, res) => {
    try {
        const responce = await Accounts.find({});
        res.status(200).json(responce);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// post accounts endpoint
app.post('/accounts', async (req, res) => {
    try {
        const responce = await Accounts.create(req.body)
        res.status(200).json(responce);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
})


mongoose.connect('mongodb+srv://yakkaladevara02:Sep2024@ecrsuapp.ausdj3x.mongodb.net/UploadNews?retryWrites=true&w=majority')
    .then(() => {
        console.log('connected to Mongodb');
        app.listen(PORT, () => {
            console.log(`application is up on port ${PORT}`);
        });
    }).catch((error) => {
        console.log(error.message);
    })