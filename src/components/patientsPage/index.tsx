import { Box, IconButton, Typography } from '@mui/material';
import PatientsList from './patientsList';
import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded';
import './style.scss';
import { Outlet, useNavigate } from 'react-router';

const PatientsPage = () => {
  const navigate = useNavigate();

  const displayAddPatient = () => {
    navigate(`add`);
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
      <Outlet />
    </Box>
  );
};

export default PatientsPage;
