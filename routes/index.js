const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// this is so if we make a request to any endpoint that doesn't exist, we'll receive a 404 error indicating we have requested an incorrect resource
router.use((req, res) => {
    res.status(400).end();
});

module.exports = router;

// this file collects the endpoints and prefixes them. we are collecting the packaged group of API endpoints and prefixing them with the path /api