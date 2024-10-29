const express = require('express');
const router = express.Router();
const Actor = require('../models/Actor');

// Get all actors
router.get('/', async (req, res) => {
    try {
        const actors = await Actor.find();
        res.json(actors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Add a new actor
router.post('/', async (req, res) => {
    const newActor = new Actor(req.body);
    try {
        const savedActor = await newActor.save();
        res.status(201).json(savedActor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Edit an actor
router.put('/:id', async (req, res) => {
    try {
        const updatedActor = await Actor.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedActor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete an actor
router.delete('/:id', async (req, res) => {
    try {
        await Actor.findByIdAndDelete(req.params.id);
        res.json({ message: 'Actor deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
