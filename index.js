const express = require('express');
const app = express();
const cors = require('cors');

const bodyParser = require('body-parser');
const workouts = require('./data/workouts/workouts.json');

app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());
app.use('/workouts', require('./routes/workouts'));

app.get('/', (req, res) => {
  res.status(200).json(workouts);
});

app.listen(3001, () => {
  console.log('App is listening on port: 3001');
});
