import express from 'express';
var bodyParser = require('body-parser');
import { calculateBmi } from './bmiCalculator';
import { calculateExercises } from './exerciseCalculator';
const app = express();
var jsonParser = bodyParser.json()

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
    const height = Number(req.query.height);
    const weight = Number(req.query.weight);

    if(isNaN(height) || isNaN(weight) || !height ||!weight) throw new Error('Wrong arguments');
    console.log('height,weigth',height,weight);
    console.log('bmi',calculateBmi(height,weight));
    try{
        res.send({height:height, weigth:weight, bmi:calculateBmi(height,weight)});
    } catch (e) {
        console.log('Error, something bad happened, message: ', e.message);
    }
  });

  app.post('/exercises',jsonParser, (req, res) => {
    console.log('body',req.body)
    const exercises = req.body.daily_exercises;
    const target = Number(req.body.target);
    console.log('data',exercises,target,typeof(target));
    if(!exercises || !target)  throw new Error("parameters missing");
    if(typeof(target) !== 'number' || typeof(exercises[0]) !== 'number') throw new Error('malformatted parameters')
    console.log('exercisses',calculateExercises(exercises.map((a: string)=>Number(a)),target));
    try{
        res.send(calculateExercises(exercises,target));
    } catch (e) {
        console.log('Error, something bad happened, message: ', e.message);
    }
  });


const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});