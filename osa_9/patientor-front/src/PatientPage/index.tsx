import React from "react";
import axios from "axios";
import { Button } from "semantic-ui-react";
import { EntryFormValues } from "../AddEntryModal/AddEntryForm";
import { Patient, Diagnosis, Entry} from "../types";
import { apiBaseUrl } from "../constants";
import { useStateValue } from "../state";
import  {useParams} from "react-router-dom";
import AddEntryModal from "../AddEntryModal";

const PatientPage: React.FC = () => {
  const [{ patients }, dispatch] = useStateValue();
  const [diagnosis, setDiagnosis] =React.useState<Diagnosis[] | undefined>();
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const [patient, setPatient] =React.useState<Patient | undefined>();

  let { id } = useParams<{ id: string }>()
  console.log('id',id)
  const [error, setError] = React.useState<string | undefined>();

  React.useEffect(() => {
  setPatient(Object.values(patients).find(p=>p.id===id))
  },[]);

  const assertNever = (value: never): never => {
    throw new Error(
      `Unhandled discriminated union member: ${JSON.stringify(value)}`
    );
  };


  React.useEffect(() => {
  const getDiagnosis = async () => {
    try {
      const diagnosis = await axios.get<Diagnosis[]>(
        `${apiBaseUrl}/diagnosis`
      );
      setDiagnosis(diagnosis.data)
      console.log('get patient',diagnosis.data)
    } catch (e) {
      console.error(e);
    }
  };
  getDiagnosis();
  }, []);

  const openModal = (): void => setModalOpen(true);

  const closeModal = (): void => {
    setModalOpen(false);
    setError(undefined);
  };

  const submitNewEntry = async (values:EntryFormValues) => {
    try {
      console.log('submit entry',values)
      const {data: newEntry } = await axios.post<Patient>(
        `${apiBaseUrl}/patients/${id}/entries`,
        values
      );
      console.log('posted',newEntry)
      setPatient(newEntry)
      closeModal();
    } catch (e) {
      console.error(e.response.data);
      setError(e.response.data.error);
    }
  };
  
  
  console.log('patient && diagnosis',patient,diagnosis);

  const entryDetails: React.FC<{ entry:Entry}> = ({entry}) => {
    switch(entry.type){
      case "Hospital":
        return (
          <div>
            <p>{entry.date} {entry.description}</p>
            <p>specialist: {entry.specialist}</p>
            <p>discharge: {entry.discharge.date} criteria: {entry.discharge.criteria}</p>
          </div>
        )
      case "OccupationalHealthcare":
        return (
          <div>
            <p>{entry.date} {entry.description}</p>
            <p>employer: {entry.employerName} </p>
            <p>specialist: {entry.specialist}</p>
            <p>sickleave: {entry.sickLeave?.startDate}-{entry.sickLeave?.endDate}</p>
          </div>
        )
      case "HealthCheck":
        return (
          <div>
            <p>{entry.date} {entry.description}</p>
            <p>specialist: {entry.specialist} </p>
            <p>healthcheck rating: {entry.healthCheckRating}</p>
          </div>
        )
      default:
        return assertNever(entry)
    }
  }

  if(patient && diagnosis){
  return (
    <div className="App">
      <h1>{patient.name} {patient.gender}</h1>

      <p>ssn:{patient.ssn}</p>
      <p>occupation:{patient.occupation}</p>
      <table>
      <thead> 
        
          {patient.entries.map(p=>{
            return(
          <tr key={p.id}>
          <th key={p.id}>
            {entryDetails({entry: p})}
            <ul key='diagnosis'>
              {p.diagnosisCodes?.map(a=><li key={a}>{a} {(diagnosis.find(d=>d.code===a))?.name}</li>)}
            </ul>
          </th>
          </tr>
            )}
          )}
        
        </thead> 
      </table>
      <AddEntryModal
        modalOpen={modalOpen}
        onSubmit={submitNewEntry}
        error={error}
        onClose={closeModal}
        diagnosis={diagnosis}
      />
      <Button onClick={() => openModal()}>Add New Entry</Button>
    </div>
  );
  }
  return <div>patient not found</div>
};

export default PatientPage;
