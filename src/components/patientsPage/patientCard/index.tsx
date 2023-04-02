import { Box, Button, CardActionArea, Card, Typography } from '@mui/material';
import { useGetPatientByIdQuery } from '../../../feature/services/patientApi';
import LastAppointments from './lastApointments';
import PatientDetails from './patientDetails';
import DeleteIcon from '@mui/icons-material/Delete';
import './style.scss';
import { useAppSelector } from '../../../feature/hooks';
import TOOTH_IMG from '../../../assets/dental-care.png';

const PatientCard = () => {
  const patientId = useAppSelector((state) => state.currentSession.patieintId);
  const { data: patient, isError } = useGetPatientByIdQuery(patientId ?? 0);

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
        <Button color="warning" startIcon={<DeleteIcon />}>
          Delete patient
        </Button>
      </Box>
    </Box>
  );
};

export default PatientCard;
