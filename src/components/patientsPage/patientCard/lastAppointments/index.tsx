import { Box, Card, Divider } from '@mui/material';
import Typography from '@mui/material/Typography';
import './style.scss';
import { useGetAppointmentsByPatientQuery } from '../../../../feature/services/appointmentApi';
import { useParams } from 'react-router-dom';
import AppointmentSummary from './appointmentSummary';

const LastAppointments = () => {
  const { id: patientId } = useParams<string>();
  const { data: appointments } = useGetAppointmentsByPatientQuery(patientId ?? '');

  console.log(appointments);

  return (
    <Box className="last-appointments">
      <Typography variant="h3">Last Appointments</Typography>
      <Card className="card">
        {appointments?.map((appointment) => (
          <>
            <AppointmentSummary key={appointment._id} {...appointment} />
            <Divider />
          </>
        ))}
      </Card>
    </Box>
  );
};

export default LastAppointments;
