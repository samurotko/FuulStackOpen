import express from 'express';
import {getEntries, addPatient, getById, addEntry} from '../services/patientService'
import { Entry } from '../types';
import {toNewEntry, toNewPatientEntry} from '../utils';


const router = express.Router();

router.get('/', (_req, res) => {
    const data= getEntries()
    console.log('data',data)
  res.send(data);
})

router.get('/:id', (_req, res) => {
  const data= getById(_req.params.id)
  console.log('data',data)
  res.send(data);
})

router.post('/', (req, res) => {
  try {
    const newPatientEntry = toNewPatientEntry(req.body);
    const addedPatient = addPatient(newPatientEntry)
   
  res.json(addedPatient);
} catch (e) {
  res.status(400).send(e.message);
}
});

router.post('/:id/entries', (req, res) => {
  const id=req.params.id;
  
  console.log('req entries',req.params.id);
  try {
    const newEntry: Entry | undefined = toNewEntry(req.body);
    console.log('newEntry',newEntry);
    if(newEntry){
    const addedEntry = addEntry(newEntry,id);
    res.json(addedEntry);
  }
    
} catch (e) {
  res.status(400).send(e.message);
}
});


export default router;