import { Box, Card } from '@mui/material';
import Typography from '@mui/material/Typography';
import { DateCalendar } from '@mui/x-date-pickers';
import { useGetAppointmentsByDateQuery } from '../../feature/services/appointmentApi';
import AppointmentCard from './AppointmentCard';
import AddAppointmentButton from './AddAppointmentButton';
import NO_APPOINTMENT_IMG from '../../assets/Calendar.svg';
import './styles.scss';
import dayjs, { Dayjs } from 'dayjs';
import { SetStateAction, useState } from 'react';

const Home = () => {
  const [pickedDate, setPickedDate] = useState(dayjs().startOf('date'));
  const { data: appointments } = useGetAppointmentsByDateQuery(pickedDate.format('YYYY-MM-DD'));

  return (
    <Box className="home-page page">
      <Typography variant="h1" mb={5}>
        Good morning, <span className="doctor-name">Dr Freeman</span>
      </Typography>
      <Box className="container">
        <Box className="left-container">
          <Box className="summary"></Box>
          <Box className="header">
            <Typography variant="h2">Appointments</Typography>
            <AddAppointmentButton />
          </Box>
          {appointments?.length === 0 ? (
            <Box display="flex" alignItems="center" flexDirection="column">
              <img src={NO_APPOINTMENT_IMG} width="300px" />
              <Typography>There is no appointment scheduled. Add One!</Typography>
            </Box>
          ) : (
            <Box className="appointments-list">
              {appointments?.map((appointment, index) => (
                <AppointmentCard key={index} {...appointment} />
              ))}
            </Box>
          )}
        </Box>
        <Card className="calendar">
          <DateCalendar
            onChange={(newPickedDate) => setPickedDate(newPickedDate as SetStateAction<Dayjs>)}
          />
        </Card>
      </Box>
    </Box>
  );
};

export default Home;
