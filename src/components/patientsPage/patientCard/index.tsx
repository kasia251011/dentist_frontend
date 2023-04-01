import { Box } from '@mui/material';
import { useGetPatientByIdQuery } from '../../../feature/services/patientApi';
import LastAppointments from './lastApointments';
import PatientDetails from './patientDetails';
import './style.scss';

const PatientCard = () => {
  const { data: patient, isError } = useGetPatientByIdQuery(1);

  if (isError) {
    return <></>;
  }

  return (
    <Box className="patient-card">
      <PatientDetails patient={patient} />
      <LastAppointments />
    </Box>
  );
};

export default PatientCard;
