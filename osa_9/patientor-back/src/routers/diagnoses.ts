import express from 'express';
import {getEntries} from '../services/DiagnoseServise'


const router = express.Router();

router.get('/', (_req, res) => {
    const data= getEntries()
    console.log('data',data)
  res.send(data);
})

router.post('/', (_req, res) => {
  res.send('some data');
})

export default router;