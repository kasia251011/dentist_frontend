import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography
} from '@mui/material';
import { Tooth, ToothState } from '../../../../feature/services/types/Patient';
import { useState } from 'react';
import './style.scss';
import {
  UpdateToothByPatientIdByToothNoI,
  useUpdateToothByPatientIdByToothNoMutation
} from '../../../../feature/services/patientApi';
import { useParams } from 'react-router-dom';

const availableStates: Array<ToothState> = [
  'HEALTHY',
  'ARTIFICIAL',
  'CARIES',
  'CAVITY',
  'EXTRACTED',
  'MILK',
  'SEAL',
  'TREATED'
];

const ChangeToothState = ({ no, state }: Tooth) => {
  const [open, setOpen] = useState(false);
  const [updateTooth] = useUpdateToothByPatientIdByToothNoMutation();
  const { id: patientId } = useParams<string>();

  const changeToothState = (state: ToothState) => {
    console.log(state);
    const updateProps: UpdateToothByPatientIdByToothNoI = {
      id: patientId ?? '1',
      toothNo: no,
      state: state
    };
    console.log(updateProps);
    updateTooth(updateProps);
  };

  console.log(state);

  return (
    <>
      <Typography
        onClick={() => setOpen(true)}
        className={`${state.toLowerCase()}-tooth-label state`}>
        {state.toLowerCase()}
      </Typography>
      <Dialog
        className="change-tooth-state-dialog"
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="xs">
        <DialogTitle>Set the preview of actual status of tooth no. {no}</DialogTitle>
        <DialogContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            alignItems: 'center'
          }}>
          {availableStates.map((s) => (
            <Typography
              key={s}
              className={`${s.toLowerCase()}-tooth-label state ${
                s == state ? 'state--selected' : ''
              }`}
              onClick={() => changeToothState(s)}>
              {s.toLowerCase()}
            </Typography>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ChangeToothState;
