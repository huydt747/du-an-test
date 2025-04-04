const express = require('express');
const router = express.Router();
const { getClient } = require('./db');

router.get('/api/example', async (req, res) => {
    const client = getClient();
	
});

module.exports = router;
