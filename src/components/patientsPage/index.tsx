import { Box, IconButton, Typography } from '@mui/material';
import PatientsList from './patientsList';
import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded';
import './style.scss';
import AddPatientCard from './addPatientCard';
import PatientCard from './patientCard';
import { useAppSelector, useAppDispatch } from '../../feature/hooks';
import { setPatientId } from '../../feature/currentSession/currentSessionSlice';

const PatientsPage = () => {
  const patientId = useAppSelector((state) => state.currentSession.patieintId);
  const dispatch = useAppDispatch();

  const displayAddPatient = () => {
    dispatch(setPatientId(null));
  };

  return (
    <Box className="page patients-page">
      <Box>
        <Box className="header">
          <Typography variant="h2">Your patients</Typography>
          <IconButton color="primary" onClick={displayAddPatient}>
            <PersonAddRoundedIcon />
          </IconButton>
        </Box>
        <PatientsList />
      </Box>
      {patientId === null ? <AddPatientCard /> : <PatientCard />}
    </Box>
  );
};

export default PatientsPage;
