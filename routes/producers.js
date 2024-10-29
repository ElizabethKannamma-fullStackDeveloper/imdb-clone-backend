const express = require('express');
const router = express.Router();
const Producer = require('../models/Producer');

// Get all producers
router.get('/', async (req, res) => {
    try {
        const producers = await Producer.find();
        res.json(producers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Add a new producer
router.post('/', async (req, res) => {
    const newProducer = new Producer(req.body);
    try {
        const savedProducer = await newProducer.save();
        res.status(201).json(savedProducer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Edit a producer
router.put('/:id', async (req, res) => {
    try {
        const updatedProducer = await Producer.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedProducer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a producer
router.delete('/:id', async (req, res) => {
    try {
        await Producer.findByIdAndDelete(req.params.id);
        res.json({ message: 'Producer deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
