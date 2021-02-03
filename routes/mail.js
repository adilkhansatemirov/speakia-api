const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello world');
});

router.post('/', async (req, res) => {
  res.json({ nice: req.body });
});

module.exports = router;
