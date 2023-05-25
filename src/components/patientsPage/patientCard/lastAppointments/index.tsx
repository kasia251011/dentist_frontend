import { Box, Card, Divider } from '@mui/material';
import Typography from '@mui/material/Typography';
import './style.scss';
import { useGetAppointmentsByPatientQuery } from '../../../../feature/services/appointmentApi';
import { useParams } from 'react-router-dom';
import AppointmentSummary from './appointmentSummary';
import { Fragment } from 'react';
import NO_APPOINTMENT_IMG from '../../../../assets/Calendar.svg';

const LastAppointments = () => {
  const { id: patientId } = useParams<string>();
  const { data: appointments } = useGetAppointmentsByPatientQuery(patientId ?? '');

  return (
    <Box className="last-appointments">
      <Typography variant="h3">Last Appointments</Typography>
      <Card className="card">
        {appointments?.length === 0 ? (
          <Box display="flex" marginTop={'50px'} alignItems="center" flexDirection="column">
            <img src={NO_APPOINTMENT_IMG} width="200px" />
            <Typography textAlign="center" fontSize="14px">
              There is no appointment scheduled. Add One!
            </Typography>
          </Box>
        ) : (
          appointments?.map((appointment) => (
            <Fragment key={appointment._id}>
              <AppointmentSummary {...appointment} />
              <Divider />
            </Fragment>
          ))
        )}
      </Card>
    </Box>
  );
};

export default LastAppointments;
