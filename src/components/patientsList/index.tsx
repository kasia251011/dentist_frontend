import { Box } from '@mui/material';
import { useGetPatientsQuery } from '../../feature/services/patientApi';

const PaientsList = () => {
  const { data: patients } = useGetPatientsQuery();
  return (
    <Box>
      {patients?.map((patient) => (
        <Box key={patient.id}>{patient.name}</Box>
      ))}
    </Box>
  );
};

export default PaientsList;
