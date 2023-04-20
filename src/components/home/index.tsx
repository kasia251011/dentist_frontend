import { Box, Card } from '@mui/material';
import Typography from '@mui/material/Typography';
import { DateCalendar } from '@mui/x-date-pickers';
import { useGetAppointmentsByDateQuery } from '../../feature/services/appointmentApi';
import AppointmentCard from './AppointmentCard';
import AddAppointmentButton from './AddAppointmentButton';
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
        <Box className="appointment-list">
          <Box className="summary"></Box>
          <Box className="header">
            <Typography variant="h2">Appointments</Typography>
            <AddAppointmentButton />
          </Box>
          {appointments?.map((appointment, index) => (
            <AppointmentCard key={index} {...appointment} />
          ))}
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
