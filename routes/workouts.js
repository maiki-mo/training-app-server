const fs = require('fs');
const path = require('path');
const baseDir = path.join(__dirname, './../data/workouts');
const express = require('express');
const router = express.Router();
const workouts = require('./../data/workouts/workouts.json');

router.get('/', (req, res) => {
  const workouts = JSON.parse(fs.readFileSync(baseDir + '/workouts.json', 'utf8', (err, data) => {
    if (err) throw err;
    return data;
  }));

  res.send(workouts);
});

router.post('/', (req, res) => {
  fs.writeFile(baseDir + '/workouts.json', JSON.stringify(req.body), (err) => {
    if (err) throw err;
    console.log('saved!');
  })

  res.json(JSON.stringify(req.body));
});

module.exports = router;
