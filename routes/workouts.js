const express = require('express');
const router = express.Router();
const workouts = require('./../data/workouts/workouts.json');

router.get('/', (req, res) => {
  res.json(workouts);
});

module.exports = router;
