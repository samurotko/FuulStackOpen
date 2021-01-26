import patientData from '../../data/patients'
import {Patient, NewPatientEntry, Entry} from '../types'

const patients: Array<Patient> = patientData;


export const getEntries = (): Pick<Patient, 'id' | 'name' | 'gender' | 'occupation' | 'entries'>[] => {
  console.log(patients)
    return patients.map(({ id, name, gender, occupation, entries }) => ({
        id,
        name,
        gender,
        occupation,
        entries
      }));
  
};

export const getById = (id: string): Patient | undefined => {
  return patients.find(p => p.id === id)

}

export const addPatient = (entry: NewPatientEntry): Patient => {
  const Patient = {
    id: Math.floor(Math.random()*1000000).toString(),
    ...entry
  } 
  patients.push(Patient)
  return Patient
};

export const addEntry = (entry: Entry,id:string): Patient | undefined => {
  const patient =getById(id)
  
  if(patient && entry){

  console.log('id,entry',id,patient,entry)
  patient.entries.push(
    entry
  )
  }
  
  return patient
};

export default {
 
  addPatient
};