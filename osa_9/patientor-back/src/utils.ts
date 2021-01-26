/* eslint-disable @typescript-eslint/no-explicit-any */
import {NewPatientEntry, Gender, BaseEntry, Entry, HealthCheckRating,
HospitalEntry, HealthCheckEntry, OccupationalHealthcareEntry} from './types'

const isString = (text: any): text is string => {
    return typeof text === 'string' || text instanceof String;
};

const parseString = (stringToParse: any): string => {
    if (!stringToParse || !isString(stringToParse)) {
      throw new Error('Incorrect or missing string: ' + stringToParse);
    }
    console.log(stringToParse)
    return stringToParse;
  
}

const isGender = (param: any): param is Gender => {
  return Object.values(Gender).includes(param);
};

const isHealth = (param: any): param is HealthCheckRating => {
  
  console.log(Object.values(HealthCheckRating).includes(param))
  return Object.values(HealthCheckRating).includes(param);
};

const parseGender = (gender: any): Gender => {
  if (!gender || !isGender(gender)) {
    throw new Error('Incorrect or missing visibility: ' + gender);
  }
  return gender;
}

const parseHealthCheck= (health: any): HealthCheckRating => {
  
  if (health === undefined || !isHealth(health)) {
    
    throw new Error('Incorrect or missing health: ' + health);
  }
  console.log('health is,',health)
  return health;
}



export const toNewPatientEntry = (object: any): NewPatientEntry => {
  const newEntry: NewPatientEntry = {
    name: parseString(object.name),
    dateOfBirth: parseString(object.dateOfBirth),
    ssn: parseString(object.ssn),
    gender: parseGender(object.gender),
    occupation: parseString(object.occupation),
    entries: []
  }
  console.log(newEntry)
  

  return newEntry;
}

export const toNewEntry = (object: any): Entry | undefined => {
  console.log('object is',object)
  var newEntry: BaseEntry;
  if(object.diagnosisCodes){
    console.log('diagnosiscodes',object.diagnosisCodes, typeof(object.diagnosisCodes))
    newEntry={
      id: Math.floor(Math.random()*1000000).toString(),
      description: parseString(object.description),
      date: parseString(object.date),
      specialist: parseString(object.specialist),
      diagnosisCodes: object.diagnosisCodes
    }
  }else{
    newEntry={
      id: Math.floor(Math.random()*1000000).toString(),
      description: parseString(object.description),
      date: parseString(object.date),
      specialist: parseString(object.specialist),
    }
  }
  console.log(newEntry)
  console.log(object.type,typeof(object.type))
  switch(object.type){
    case "Hospital":
      const HospitalEntry: HospitalEntry = {
          ...newEntry,
          type: "Hospital",
          discharge: {
            date: parseString(object.discharge.date),
            criteria: parseString(object.discharge.criteria)
          }
        }
        return HospitalEntry
      
    case "OccupationalHealthcare":
      const OccupEntry: OccupationalHealthcareEntry = {
        ...newEntry,
          type: "OccupationalHealthcare",
          employerName: parseString(object.employerName),
          sickLeave: {
              startDate: parseString(object.sickLeave.startDate),
              endDate: parseString(object.sickLeave.endDate)
            }
          }
       
      return OccupEntry
    case "HealthCheck":
      console.log('health')
      const CheckEntry: HealthCheckEntry = {
          ...newEntry, 
          type: "HealthCheck",
          healthCheckRating: parseHealthCheck(object.healthCheckRating)
        }
        console.log('ratingtype',typeof(CheckEntry.healthCheckRating))
      return CheckEntry
    default:
      return undefined;
  
  
  

  
}
}


export default toNewPatientEntry