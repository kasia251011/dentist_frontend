import { Box, Button } from '@mui/material';
import {
  useDeletePatientByIdMutation,
  useGetPatientByIdQuery
} from '../../../feature/services/patientApi';
import LastAppointments from './lastAppointments';
import PatientDetails from './patientDetails';
import DeleteIcon from '@mui/icons-material/Delete';
import './style.scss';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import PATH from '../../../router/paths';
import TeethButton from './teethButton';

const PatientCard = () => {
  const { id: patientId } = useParams<string>();
  const { data: patient, isError } = useGetPatientByIdQuery(patientId ?? '');
  const [deletePatientById] = useDeletePatientByIdMutation();
  const navigate = useNavigate();

  const deletePatient = () => {
    if (patientId) {
      deletePatientById(patientId);
      navigate(PATH.PATIENTS, { replace: true });
    }
  };

  if (isError) {
    return <></>;
  }

  return (
    <Box className="patient-card">
      <PatientDetails patient={patient} />
      <Box className="right-side">
        <LastAppointments />
        <TeethButton />
        <Box className="button-container">
          <Button color="warning" onClick={deletePatient} endIcon={<DeleteIcon />}>
            Delete patient
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PatientCard;
