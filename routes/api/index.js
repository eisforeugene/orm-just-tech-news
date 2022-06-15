const router = require('express').Router();

const userRoutes = require('./user-routes');

router.use('/users', userRoutes);

module.exports = router;

// this file serves as a means to collect all of the API routes and package it