const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

// Get all movies
router.get('/', async (req, res) => {
    try {
        const movies = await Movie.find().populate('actors').populate('producer');
        res.json(movies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Add a new movie
router.post('/', async (req, res) => {
    const newMovie = new Movie(req.body);
    try {
        const savedMovie = await newMovie.save();
        res.status(201).json(savedMovie);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get a movie by ID
router.get('/:id', async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id).populate('actors').populate('producer');
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.json(movie);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Edit a movie
router.put('/:id', async (req, res) => {
    try {
        const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedMovie);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a movie
router.delete('/:id', async (req, res) => {
    try {
        await Movie.findByIdAndDelete(req.params.id);
        res.json({ message: 'Movie deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
