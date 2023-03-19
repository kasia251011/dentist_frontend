import { Box } from '@mui/material';
import PatientCard from './patientCard';
import PatientsList from './patientsList';
import './style.scss';

const PatientsPage = () => {
  return (
    <Box className="page patients-page">
      <PatientsList />
      <PatientCard />
    </Box>
  );
};

export default PatientsPage;
