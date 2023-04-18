import { Box, Button, CardActionArea, Card, Typography } from '@mui/material';
import {
  useDeletePatienttByIdMutation,
  useGetPatientByIdQuery
} from '../../../feature/services/patientApi';
import LastAppointments from './lastApointments';
import PatientDetails from './patientDetails';
import DeleteIcon from '@mui/icons-material/Delete';
import './style.scss';
import TOOTH_IMG from '../../../assets/dental-care.png';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import PATH from '../../../router/paths';

const PatientCard = () => {
  const { id: patientId } = useParams<string>();
  const { data: patient, isError } = useGetPatientByIdQuery(patientId ?? '');
  const [deletePatientById] = useDeletePatienttByIdMutation();
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
        <Card className="tooth-btn">
          <CardActionArea className="container">
            <img src={TOOTH_IMG} />
            <Typography>Check out toothng and diagnosis</Typography>
          </CardActionArea>
        </Card>
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
