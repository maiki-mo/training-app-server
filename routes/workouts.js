const fs = require('fs');
const path = require('path');
const baseDir = path.join(__dirname, './../data/workouts');
const express = require('express');
const router = express.Router();
const workouts = require('./../data/workouts/workouts.json');

router.get('/', (req, res) => {
  res.json(workouts);
});

router.post('/', (req, res) => {
  fs.writeFile(baseDir + '/workouts.json', JSON.stringify(req.body), (err) => {
    if (err) throw err;
    console.log('saved!');
  })

  res.json(workouts);
});

module.exports = router;
