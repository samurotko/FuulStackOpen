import React from 'react';
import { Modal, Segment } from 'semantic-ui-react';
import  { AddEntryForm, EntryFormValues } from './AddEntryForm';
import {Diagnosis} from '../types'

interface Props {
  modalOpen: boolean;
  onClose: () => void;
  onSubmit: (values: EntryFormValues) => void;
  error?: string;
  diagnosis: Diagnosis[]
}

const AddEntryModal = ({ modalOpen, onClose, onSubmit, error, diagnosis }: Props) => (
  <Modal open={modalOpen} onClose={onClose} centered={false} closeIcon>
    <Modal.Header>Add a new entry</Modal.Header>
    <Modal.Content>
      {error && <Segment inverted color="red">{`Error: ${error}`}</Segment>}
      <AddEntryForm onSubmit={onSubmit} onCancel={onClose} diagnoses={diagnosis}/>
    </Modal.Content>
  </Modal>
);

export default AddEntryModal;
