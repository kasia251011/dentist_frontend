import { Box, Typography } from '@mui/material';
import { Appointment } from '../../../../../feature/services/types/Appointment';
import { useGetProcedureByIdQuery } from '../../../../../feature/services/procedureApi';

const AppointmentSummary = ({ date, time, procedureId }: Appointment) => {
  const { data: procedure } = useGetProcedureByIdQuery(procedureId);

  return (
    <Box className="appointment-summary">
      <Typography fontSize="14px" fontWeight="bold">
        {procedure?.name}
      </Typography>
      <Typography fontSize="14px">{`${date} ${time}`}</Typography>
    </Box>
  );
};

export default AppointmentSummary;
