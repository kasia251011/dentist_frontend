import { Box, IconButton, Typography } from '@mui/material';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';
import PatientTeeth from './pateintTeeth';
import './style.scss';
import { useGetPatientByIdQuery } from '../../feature/services/patientApi';

const TeethPage = () => {
  const { id: patientId } = useParams<string>();
  const { data: patient } = useGetPatientByIdQuery(patientId ?? '');
  const navigate = useNavigate();

  return (
    <Box className="teeth-page page">
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h3">{`${patient?.name} ${patient?.surname} teeth`}</Typography>
        <IconButton onClick={() => navigate(-1)}>
          <ClearIcon />
        </IconButton>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
        <PatientTeeth />
        <Outlet />
      </Box>
    </Box>
  );
};

export default TeethPage;
